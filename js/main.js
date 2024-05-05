// Determinar el talle de corpinios con condicional

let busto = parseInt(prompt("Hola " + nombre + "ingresá tu medida de busto:"));
let bajoBusto = parseInt(prompt("Ingresa tu medida de bajo busto:"));

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

let cintura = parseInt(prompt("Ingresá tu medida de cintura:"));
let cadera = parseInt(prompt("Ingresa tu medida de cadera:"));

let talleBombacha = "";

if ((cintura >= 60 && cintura <= 70) && (cadera >= 75 && cadera <= 90)) {
    talleBombacha = "S";
} else if ((cintura >= 71 && cintura <= 76) && (cadera >= 91 && cadera <= 100)) {
    talleBombacha = "M";
} else if ((cintura >= 77 && cintura <= 84) && (cadera >= 101 && cadera <= 109)) {
    talleBombacha = "L";
} else if ((cintura >= 85 && cintura <= 92) && (cadera >= 109 && cadera <= 115)) {
    talleBombacha = "XL";
} else if ((cintura >= 92 && cintura <= 99) && (cadera >= 116 && cadera <= 124)) {
    talleBombacha = "2XL";
} else if ((cintura >= 100 && cintura <= 110) && (cadera >= 125 && cadera <= 130)) {
    talleBombacha = "3XL";
} 
if (talleBombacha == "") {
    talleBombacha = prompt("No tenemos talle para vos, ingresalo manualmente:")
} else {
    alert("Tu talle sugerido para bombachas es " + talleBombacha)
}


// Funcion para calcular total: bucle

let productos = ["corpiño Viento Sur", "bombacha Viento Sur"];
let precios = [15000, 10000]

let subTotal = 0;
let cantTotal = 0;
for (let i = 0; i < 2; i++){
    let cantidad = parseInt(prompt(
        "Ingrese la cantidad de " + productos[i] + " talle " 
        + talleCorpinio + 
        " que quieres llevar"
    ))
    subTotal += cantidad * precios[i];
    cantTotal += cantidad;
}



// Funcion para calcular total funcion

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
        "% de decuento. El precio total es: ARS " +
        subTotal * (1 - dto/100)
    )
} else {
    alert("El precio total es: ARS " + subTotal * (1 - dto/100))
}

