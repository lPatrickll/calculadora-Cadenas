import sumarCadenas from "./calcCadenas";

describe("Calculadora de Cadenas", () => {
    it("deberia no mostrar nada ya que la cadena es vacia", () => {
        expect(sumarCadenas("")).toEqual(0);
    });

    it("deberia mostrar la suma de una cadena con un solo numero", () => {
        expect(sumarCadenas("2")).toEqual(2);
    });

    it("deberia mostrar la suma de una cadena de numeros separados por una coma como 2,3 que suma 5", () => {
        expect(sumarCadenas("2,3")).toEqual(5);
    });

    it("deberia mostrar la suma de una cadena de numeros separados por un guion como 1-2 que la suma 3", () => {
        expect(sumarCadenas("1-2")).toEqual(3);
    });
});