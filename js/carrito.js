// const pruebaBoton = document.querySelector("#carritoAccionesVaciar");
// pruebaBoton.addEventListener("click", console.log("Hola"));

const pedido = JSON.parse(localStorage.getItem("pedido-carrito"));


const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");

contenedorCarritoProductos.innerHTML= "";

if (pedido) {

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disable");

    pedido.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML = `
    <img src="${producto.img}" alt="${producto.imgAlt}">
    <div class="carrito-producto-titulo">
      <p>Artículo</p>
      <h4>${producto.tituloProducto}</h4>
    </div>
    <div class="carrito-producto-cantidad">
      <p>Cantidad</p>
      <h4>${producto.cantidad}</h4>
    </div>
      <div class="carrito-producto-precio">
        <p>Precio</p>
        <h4>$${producto.precio}</h4>
      </div>
      <div class="carrito-producto-subtotal">
        <p>Subtotal</p>
        <h4>$${producto.precio * producto.cantidad}</h4>
      </div>
      <button class="eliminar-producto" id=${producto.id}>X</button>
    `

    contenedorCarritoProductos.append(div);
    })

} else {
}


