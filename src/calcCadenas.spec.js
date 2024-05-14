import sumarCadenas from "./calcCadenas";

describe("Calculadora de Cadenas", () => {
    it("deberia no mostrar nada ya que la cadena es vacia", () => {
        expect(sumarCadenas("")).toEqual(0);
    });

    it("deberia mostrar la suma de una cadena con un solo numero", () => {
        expect(sumarCadenas("2")).toEqual(2);
    });
});