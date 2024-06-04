//! Calcular talle superior

//Llamando al button para crear el evento
document
  .getElementById("calcularTalleSuperior")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const busto = parseInt(document.querySelector("#busto").value);
    const bajoBusto = parseInt(document.querySelector("#bajoBusto").value);

    let talleCorpinio = "";

    // Determinar talle de corpiño
    if (bajoBusto >= 62 && bajoBusto <= 72 && busto >= 75 && busto <= 95) {
      talleCorpinio = "S";
    } else if (
      bajoBusto >= 73 &&
      bajoBusto <= 80 &&
      busto >= 75 &&
      busto <= 100
    ) {
      talleCorpinio = "M";
    } else if (
      bajoBusto >= 81 &&
      bajoBusto <= 90 &&
      busto >= 75 &&
      busto <= 100
    ) {
      talleCorpinio = "L";
    } else if (
      bajoBusto >= 91 &&
      bajoBusto <= 102 &&
      busto >= 89 &&
      busto <= 112
    ) {
      talleCorpinio = "XL";
    } else if (
      bajoBusto >= 103 &&
      bajoBusto <= 108 &&
      busto >= 101 &&
      busto <= 118
    ) {
      talleCorpinio = "2XL";
    } else if (
      bajoBusto >= 109 &&
      bajoBusto <= 116 &&
      busto >= 101 &&
      busto <= 130
    ) {
      talleCorpinio = "3XL";
    }

    // Mostrar el talle en el DOM
    const resultadoTallesSuperiores = document.querySelector(
      "#resultadoTallesSuperiores"
    );

    if (talleCorpinio.length > 0) {
      resultadoTallesSuperiores.innerHTML = `
        <h3>Tu talle sugerido para prendas superiores: ${talleCorpinio}</h3>
    `;
    } else {
      resultadoTallesSuperiores.innerHTML = `
    <h3>Las medidas indicadas no estan dentro de nuestra tabla de talles, por lo que recomendamos que mires las referencias de cada prenda</h3>
    `;
    }
  });

//! Calcular talle inferior

document
  .getElementById("calcularTalleInferior")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cintura = parseInt(document.getElementById("cintura").value);
    const cadera = parseInt(document.getElementById("cadera").value);

    let talleBombacha = "";

    // Determinar talle de bombacha
    if (cadera >= 70 && cadera <= 94 && cintura >= 58 && cintura <= 68) {
      talleBombacha = "S";
    } else if (
      cadera >= 95 &&
      cadera <= 100 &&
      cintura >= 60 &&
      cintura <= 76
    ) {
      talleBombacha = "M";
    } else if (
      cadera >= 101 &&
      cadera <= 110 &&
      cintura >= 69 &&
      cintura <= 86
    ) {
      talleBombacha = "L";
    } else if (
      cadera >= 111 &&
      cadera <= 115 &&
      cintura >= 77 &&
      cintura <= 92
    ) {
      talleBombacha = "XL";
    } else if (
      cadera >= 116 &&
      cadera <= 125 &&
      cintura >= 87 &&
      cintura <= 105
    ) {
      talleBombacha = "2XL";
    } else if (
      cadera >= 126 &&
      cadera <= 135 &&
      cintura >= 93 &&
      cintura <= 115
    ) {
      talleBombacha = "3XL";
    }

    // Mostrar el talle en el DOM
    const resultadoTallesInferiores = document.querySelector(
      "#resultadoTallesInferiores"
    );
    if (talleBombacha.length > 0) {
      resultadoTallesInferiores.innerHTML = `
            <h3>Tu talle sugerido para prendas superiores: ${talleBombacha}</h3>
        `;
    } else {
      resultadoTallesInferiores.innerHTML = `
        <h3>Las medidas indicadas no estan dentro de nuestra tabla de talles, por lo que recomendamos que mires las referencias de cada prenda</h3>
        `;
    }
  });
