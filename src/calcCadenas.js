function sumarCadenas(cadena) {
    let suma = 0;
    if (cadena === "")
        return suma;
    else {
        const numerosCadena = cadena.split(/-|,/);
        for (const numero of numerosCadena) {
            suma += parseInt(numero);
        }
        return suma;
    }
}

export default sumarCadenas;