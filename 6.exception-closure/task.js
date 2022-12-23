/* Задача 1 */

function parseCount(parse) {
  return Number.parseFloat(parse);
}
console.log(Number.parseFloat("12.3px"));

if (Number.parseFloat("FF2")) {
  throw new Error("невалидное значение");
}

function validateCount(parse) {
  try {
    const parseNumber = Number.parseFloat(parse);
    if (!isFinite(parseNumber)) {
      throw new Error("не валидное значение");
    }
    return parseNumber;
  } catch (error) {
    return error.message;
  }
}
validateCount(5.33);
