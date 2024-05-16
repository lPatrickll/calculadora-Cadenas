function sumarCadenas(cadena) {
    const numerosCadena = obtenerNumeros(cadena);
    const numerosValidos = filtrarNumerosValidos(numerosCadena);
    const suma = calcularSuma(numerosValidos);

    return suma;
}

function obtenerNumeros(cadena) {
    if (cadena === "") {
        return [];
    }

    const match = cadena.match(/\/\/\[(.)\]\s+(.*)/);
    if (match) {
        const caracterEspecial = match[1];
        return match[2].split(new RegExp(`[${caracterEspecial},-]`));
    } else {
        return cadena.split(/,|-/);
    }
}

function filtrarNumerosValidos(numeros) {
    const mil = 1000;
    return numeros
        .map(numero => parseInt(numero))
        .filter(numero => !isNaN(numero) && numeroMenorMil(numero, mil));
}

function numeroMenorMil(numero, mill) {
    return numero <= mill;
}

function calcularSuma(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

export default sumarCadenas;
