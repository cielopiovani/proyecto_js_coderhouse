// Determinar el talle de corpinios con condicional

alert("Hola! Bienvenida a la TIENDA ONLINE DE DUNAS. Vamos a elegir el talle correcto para vos.");

let busto = parseInt(prompt("Tenemos seis talles disponibles de corpiños, que van desde 60cm a 130cm de busto. Ingresá tu medida de busto en cm:"));
let bajoBusto = parseInt(prompt("Ingresá tu medida de bajo busto en cm:"));

let talleCorpinio = "";

if ((bajoBusto >= 62 && bajoBusto <= 72) && (busto >= 75 && busto <= 95)) {
    talleCorpinio = "S";
} else if ((bajoBusto >= 73 && bajoBusto <= 80) && (busto >= 75 && busto <= 100)) {
    talleCorpinio = "M";
} else if ((bajoBusto >= 81 && bajoBusto <= 90) && (busto >= 75 && busto <= 100)) {
    talleCorpinio = "L";
} else if ((bajoBusto >= 91 && bajoBusto <= 102) && (busto >= 89 && busto <= 112)) {
    talleCorpinio = "XL";
} else if ((bajoBusto >= 103 && bajoBusto <= 108) && (busto >= 101 && busto <= 118)) {
    talleCorpinio = "2XL";
} else if ((bajoBusto >= 109 && bajoBusto <= 116) && (busto >= 101 && busto <= 130)) {
    talleCorpinio = "3XL";
} 
if (talleCorpinio == "") {
    talleCorpinio = prompt("No tenemos talle para vos, ingresalo manualmente:")
} else {
    alert("Tu talle sugerido de corpiños es " + talleCorpinio)
}


// Determinar el talle de bombachas con condicional

let cintura = parseInt(prompt("Tenemos seis talles disponibles de bombachas, de 70cm a 135cm de cadera. Ingresá tu medida de cintura en cm:"));
let cadera = parseInt(prompt("Ingresá tu medida de cadera en cm:"));

let talleBombacha = "";

if ((cadera >= 70 && cadera <= 94) && (cintura >= 58 && cintura <= 68)) {
    talleBombacha = "S";
} else if ((cadera >= 95 && cadera <= 100) && (cintura >= 60 && cintura <= 76)) {
    talleBombacha = "M";
} else if ((cadera >= 101 && cadera <= 110) && (cintura >= 69 && cintura <= 86)) {
    talleBombacha = "L";
} else if ((cadera >= 111 && cadera <= 115) && (cintura >= 77 && cintura <= 92)) {
    talleBombacha = "XL";
} else if ((cadera >= 116 && cadera <= 125) && (cintura >= 87 && cintura <= 105)) {
    talleBombacha = "2XL";
} else if ((cadera >= 126 && cadera <= 135) && (cintura >= 93 && cintura <= 115)) {
    talleBombacha = "3XL";
} 
if (talleBombacha == "") {
    talleBombacha = prompt("No tenemos talle para vos, ingresalo manualmente:")
} else {
    alert("Tu talle sugerido para bombachas es " + talleBombacha)
}

alert(
    "Ahora que ya sabes tu talle, podemos continuar a realizar el pedido."
)

// Creando objeto con class constructor

class Producto {
    constructor (titulo, precio, color, stock) {
        this.titulo = titulo;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
        this.cantRequerido = 0;
    }        
    subTotal () {return this.cantRequerido * this.precio}
    }


// Declarando los objetos

const Producto1 = new Producto ("Corpiño Viento Sur", 30000, "negro", 10);
const Producto2 = new Producto ("Bombacha Viento Sur", 15000, "negro", 8);
const Producto3 = new Producto ("Corpiño Claromeco", 30000, "chocolate", 6);
const Producto4 = new Producto ("Bombacha Claromeco", 15500, "chocolate", 20);

const prendas = [Producto1, Producto2, Producto3, Producto4];

// Productos disponibles

const prendasDisponibles = prendas.reduce(
    (acc, prenda) => acc + "- " + prenda.titulo + " " + prenda.color + " $" + prenda.precio + "\n",
    "Por el momento, tenemos disponibles las siguientes prendas: \n"
);

alert(prendasDisponibles);


// PEDIDO

let pedido = [];

prendas.forEach ((prenda) => {
    prenda.cantRequerido = prompt(
        "Ingrese la cantidad de " +
        prenda.titulo +
        " que quiere llevar. Si no desea llevar éste artículo ingrese 0"
    );
    pedido.push(prenda);
});


let total = 0;
let resumen = "";

pedido.forEach((prenda) => {
    console.log(prenda.titulo + " | Subtotal: ARS " + prenda.subTotal());
    total += prenda.subTotal()
    resumen += " - " + prenda.titulo + " | " + "Cantidad: " + prenda.cantRequerido + " | Subotal producto $" + prenda.subTotal() + "\n"     
})

alert(
    "¡Perfecto! Su pedido es: \n" +
    resumen + 
    "El subtotal de su pedido es de $" + total + " ARS "
);

function descuento (total) {
    if (total >= 150000) {
        return 25.0
    } else if (total >= 100000) {
        return 15.0
    } else {
        return 0.0
    }
}

let dto = descuento(total);
if (dto > 0) {
    alert(
        "¡Felicitaciones! Como superaste los valores promedio de venta obtuviste un " + 
        dto + 
        "% de decuento. El precio total de tu compra es: $" +
        total * (1 - dto/100) + "ARS ¡Gracias por comprar en DUNAS"
    )
} else {
    alert("El precio total de tu compra es: $" + total * (1 - dto/100) + " ARS ¡Gracias por comprar en DUNAS")
}