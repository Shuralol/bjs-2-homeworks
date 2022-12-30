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
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }
  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  get area() {
    const p = (this.sideA + this.sideB + this.sideC) / 2;

    return Number(
      Math.sqrt(
        p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
      ).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
