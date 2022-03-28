import calculadoraCadenas from "./calculadoracadena.js"
describe("generar cadena", () => {
  it("deberia generar 0 si la cadena es vacia", () => {
    expect(calculadoraCadenas("")).toEqual(0);
  });
  it("deberia generar 2 si la cadena es 2", () => {
    expect(calculadoraCadenas("2")).toEqual(2);
  });
  it("deberia devolver la suma ", () => {
    expect(calculadoraCadenas("2,3")).toEqual(5);
  });
  
});