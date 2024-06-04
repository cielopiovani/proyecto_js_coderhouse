const productos = [
  {
    id: "corpiñoMNatural",
    tituloProducto: "CORPIÑO MAR NATURAL",
    precio: "12.000",
    img: "../multimedia/producto_1.jpg",
    imgAlt: "Corpiño estilo top color natural con bordes negros",
    tituloFigcaption: "PIEZA IDEAL PARA UN BUEN SOSTÉN",
    descripcion:
      "Breteles anchos y cómodos, excelente calidad. Ideal para usar en el verano como prenda exterior, y para prácticar deporte.",
    stock: "SIN STOCK",
  },
  {
    id: "vedetinaMNatural",
    tituloProducto: "VEDETINA MAR NATURAL",
    precio: "10.000",
    img: "../multimedia/producto_2.jpg",
    imgAlt: "Corpiño estilo top color natural con bordes negros",
    tituloFigcaption: "PIEZA IDEAL PARA UN BUEN SOSTÉN",
    descripcion:
      "Breteles anchos y cómodos, excelente calidad. Ideal para usar en el verano como prenda exterior, y para prácticar deporte.",
    stock: "SIN STOCK",
  },
  {
    id: "topMRojo",
    tituloProducto: "TOP MARGARITA ROJO",
    precio: "15.000",
    img: "../multimedia/producto_3.jpg",
    imgAlt: "Corpiño estilo top color natural con bordes negros",
    tituloFigcaption: "PIEZA IDEAL PARA UN BUEN SOSTÉN",
    descripcion:
      "Breteles anchos y cómodos, excelente calidad. Ideal para usar en el verano como prenda exterior, y para prácticar deporte.",
    stock: "SIN STOCK",
  },
  {
    id: "calzaCRojo",
    tituloProducto: "CALZA CICLISTA ROJO",
    precio: "20.000",
    img: "../multimedia/producto_4.jpg",
    imgAlt: "Corpiño estilo top color natural con bordes negros",
    tituloFigcaption: "PIEZA IDEAL PARA UN BUEN SOSTÉN",
    descripcion:
      "Breteles anchos y cómodos, excelente calidad. Ideal para usar en el verano como prenda exterior, y para prácticar deporte.",
    stock: "SIN STOCK",
  },
  {
    id: "CorpiñoMLila",
    tituloProducto: "CORPIÑO MAR LILA",
    precio: "12.000",
    img: "../multimedia/producto_5.jpg",
    imgAlt: "Corpiño estilo top color natural con bordes negros",
    tituloFigcaption: "PIEZA IDEAL PARA UN BUEN SOSTÉN",
    descripcion:
      "Breteles anchos y cómodos, excelente calidad. Ideal para usar en el verano como prenda exterior, y para prácticar deporte.",
    stock: "SIN STOCK",
  },
  {
    id: "BombachaMLila",
    tituloProducto: "BOMBACHA MAR LILA",
    precio: "10.000",
    img: "../multimedia/producto_6.jpg",
    imgAlt: "Corpiño estilo top color natural con bordes negros",
    tituloFigcaption: "PIEZA IDEAL PARA UN BUEN SOSTÉN",
    descripcion:
      "Breteles anchos y cómodos, excelente calidad. Ideal para usar en el verano como prenda exterior, y para prácticar deporte.",
    stock: "SIN STOCK",
  },
  {
    id: "CorpiñoMCafe",
    tituloProducto: "CORPIÑO MAR CAFE",
    precio: "15.000",
    img: "../multimedia/producto_7.jpg",
    imgAlt: "Corpiño estilo top color natural con bordes negros",
    tituloFigcaption: "PIEZA IDEAL PARA UN BUEN SOSTÉN",
    descripcion:
      "Breteles anchos y cómodos, excelente calidad. Ideal para usar en el verano como prenda exterior, y para prácticar deporte.",
    stock: "SIN STOCK",
  },
  {
    id: "BombachaMCafe",
    tituloProducto: "BOMBACHA MAR CAFE",
    precio: "20.000",
    img: "../multimedia/producto_8.jpg",
    imgAlt: "Corpiño estilo top color natural con bordes negros",
    tituloFigcaption: "PIEZA IDEAL PARA UN BUEN SOSTÉN",
    descripcion:
      "Breteles anchos y cómodos, excelente calidad. Ideal para usar en el verano como prenda exterior, y para prácticar deporte.",
    stock: "SIN STOCK",
  },
];

// Llamar al div principal que contiene todos los productos
const contenedorPrincipal = document.querySelector("#contenedorPrincipal");

function cargarProductos() {
  productos.forEach((producto) => {
    // Crear el contenedor individual de los productos
    const contenedorProducto = document.createElement("div");
    contenedorProducto.classList.add = "contenedorProducto";

    // Pasar el contenido (del HTML) creandolo desde JS -> Incorporar el contenido
    contenedorProducto.innerHTML = `
    <div class="contenedor-img"><img src="${producto.img}" alt="${producto.imgAlt}"/>
        <div class="stock">${producto.stock}</div>
            <figcaption>
                <div class="text-figcaption">
                    <h4>${producto.tituloFigcaption}</h4>
                    <p>${producto.descripcion}</p>
                </div>
            </figcaption>
    </div>
    <div class="textProd">
        <h1>${producto.tituloProducto}</h1>
        <p class = "precio">$${producto.precio}</p>
        <div>
            <button class="boton-talle">Elegir talle</button>
            <button id ="${producto.id}" class="boton-agregar">Agregar</button>
        </div>
    </div>
    `;

    // Agregar el contenedor de cada uno de los productos al contenedor principal
    contenedorPrincipal.appendChild(contenedorProducto);
  });
}

//Llamar a la función para ejecutar y cargar productos
cargarProductos();
