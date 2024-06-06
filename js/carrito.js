// Obtener el pedido del localStorage y parsearlo
let pedido = JSON.parse(localStorage.getItem("pedido-carrito")) || [];

// Referencias a los elementos del DOM
const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");
const totalElement = document.querySelector("#total");
const botonVaciarCarrito = document.querySelector("#carritoAccionesVaciar");
const botonComprarAhora = document.querySelector("#carrito-acciones-comprar");
let botonesEliminar = document.querySelectorAll(".eliminar-producto");

// Función para cargar los productos en el carrito
function cargarProductosEnCarrito() {
    contenedorCarritoProductos.innerHTML = "";

    if (pedido.length > 0) {
        contenedorCarritoVacio.classList.add("disable");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disable");

        pedido.forEach((producto) => {
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
                <button class="eliminar-producto" id="${producto.id}">X</button>
            `;

            contenedorCarritoProductos.appendChild(div);
        });

        actualizarBotonesEliminar();
        actualizarTotal();
    } else {
        contenedorCarritoVacio.classList.remove("disable");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disable");
        totalElement.innerText = "$0";
    }
}

// Función para actualizar los botones de eliminar producto
function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".eliminar-producto");

    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(e) {
    const idBotonProducto = e.currentTarget.id;
    const index = pedido.findIndex(producto => producto.id === idBotonProducto);

    if (index !== -1) {
        pedido.splice(index, 1);
        cargarProductosEnCarrito();
        localStorage.setItem("pedido-carrito", JSON.stringify(pedido));
    }
}

// Función para actualizar el total del pedido
function actualizarTotal() {
    const total = pedido.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    totalElement.innerText = `$${total}`;
}

// Evento para vaciar el carrito
botonVaciarCarrito.addEventListener("click", () => {
    pedido = [];
    cargarProductosEnCarrito();
    localStorage.setItem("pedido-carrito", JSON.stringify(pedido));
});

// Evento para comprar ahora
botonComprarAhora.addEventListener("click", () => {
    pedido = [];
    cargarProductosEnCarrito();
    localStorage.setItem("pedido-carrito", JSON.stringify(pedido));
    contenedorCarritoComprado.classList.remove("disable");
    contenedorCarritoVacio.classList.add("disable");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
});

// Cargar los productos en el carrito al cargar la página
cargarProductosEnCarrito();
