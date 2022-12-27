/* Задача 1 */

function parseCount(parse) {
  const parseResult = parseFloat(parse);
  if (isNaN(parseResult)) {
    throw new Error("Невалидное значение");
  }
  return parseResult;
}

function validateCount(parse) {
  try {
    return parseCount(parse);
  } catch (error) {
    return error;
  }
}
validateCount(5.33);

/* Задача 2 */

class Triangle {
  constructor(a, b, c) {
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;

    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    return parseFloat((this.sideA + this.sideB + this.sideC) / 2).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return { perimeter: "Ошибка! Треугольник не существует", area: area() };
  }
}
