// Determinar el talle de corpinios con condicional

let busto = parseInt(prompt("Ingresá tu medida de busto en cm:"));
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

let cintura = parseInt(prompt("Ingresá tu medida de cintura en cm:"));
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


// Calculando la cantidad de prendas con bucle

let productos = ["corpiño Viento Sur", "bombacha Viento Norte"];
let precios = [15000, 10000]

let subTotal = 0;
let cantTotal = 0;
for (let i = 0; i < 2; i++){
    let cantidad = parseInt(prompt(
        "Ingresá la cantidad de " + productos[i] +  
        " que quieres llevar:"
    ))
    subTotal += cantidad * precios[i];
    cantTotal += cantidad;
}



// Calculando el importe final con descuentos con una función

function descuento (cantidad) {
    if (cantidad >= 6) {
        return 25.0
    } else if (cantidad >= 3) {
        return 15.0
    } else {
        return 0.0
    }
}

let dto = descuento(cantTotal);
if (dto > 0) {
    alert(
        "Felicitaciones! Obtuviste un " + 
        dto + 
        "% de decuento. El precio total de tu compra es: ARS " +
        subTotal * (1 - dto/100)
    )
} else {
    alert("El precio total de tu compra es: ARS " + subTotal * (1 - dto/100))
}
