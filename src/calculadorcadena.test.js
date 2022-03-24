import generacadena from "./calculadoracadena.js"
describe("generar cadena", () => {
  it("deberia generar 0 si la cadena es vacia", () => {
    expect(generacadena("")).toEqual(0);
  });
  
});