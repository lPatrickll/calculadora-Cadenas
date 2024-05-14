function sumarCadenas(cadena) {
    let suma = 0;
    if (cadena === "") {
        return suma;
    } else {
        let numerosCadena;
        const match = cadena.match(/\/\/\[(.)\]\s+(.*)/);
        if (match) {
            const caracterEspecial = match[1];
            numerosCadena = match[2].split(new RegExp(`[${caracterEspecial},-]`));
        } else {
            numerosCadena = cadena.split(/,|-/);
        }

        for (const numero of numerosCadena) {
            suma += parseInt(numero);
        }
        return suma;
    }
}

export default sumarCadenas;
