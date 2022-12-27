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

    if (a + b < c && a + c < b) {
    } else {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
}
