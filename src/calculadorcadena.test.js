import generarCadena from "./calculadoracadena.js"
describe("generar cadena", () => {
  it("deberia generar 0 si la cadena es vacia", () => {
    expect(generarCadena("")).toEqual(0);
  });
  it("deberia generar 2 si la cadena es 2", () => {
    expect(generarCadena("2")).toEqual(2);
  });
  
});