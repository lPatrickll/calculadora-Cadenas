import sumarCadenas from "./calcCadenas";

describe("Calculadora de Cadenas", () => {
    it("deberia no mostrar nada ya que la cadena es vacia", () => {
        expect(sumarCadenas("")).toEqual(0);
    });
});