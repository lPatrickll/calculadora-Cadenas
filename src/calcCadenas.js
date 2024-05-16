function sumarCadenas(cadena) {
    let suma = 0;

    const numerosCadena = obtenerNumeros(cadena);

    for (const numero of numerosCadena) {
        const numeroParseado = parseInt(numero);
        if (numeroParseado <= 1000) {
            suma += numeroParseado;
        }
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

export default sumarCadenas;
