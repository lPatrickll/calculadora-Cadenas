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
    return numeros
        .map(numero => parseInt(numero))
        .filter(numero => !isNaN(numero) && numero <= 1000);
}

function calcularSuma(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

export default sumarCadenas;
