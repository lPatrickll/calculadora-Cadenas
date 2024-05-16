function sumarCadenas(cadena) {
    let suma = 0;

    const numerosCadena = obtenerNumeros(cadena);
    const numerosValidos = filtrarNumerosValidos(numerosCadena);

    for (const numero of numerosValidos) {
        suma += parseInt(numero);
    }

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

export default sumarCadenas;
