/* Домашнее задание к лекции 2 «Функции» */
/* Задание №1 */

function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = sum / arr.length;

  return { min: min, max: max, avg: parseFloat(avg.toFixed(2)) };
}
getArrayParams(-99, 99, 10);

/* Задание №2 */

function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
summElementsWorker(50, 50, 0);

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}
differenceMaxMinWorker(-99, 99);

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}
differenceEvenOddWorker(10, 15, 5, 7, 8, 25, 35, 68);

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}
averageEvenElementsWorker(35, 58, 4, 9, 6, 5, 10);

/* Задание №3 */

function makeWork(arrOfArr, func) {
  if (!arr.length) {
    return 0;
  }
  let maxWorkerResult = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62],
];

console.log("makeWork", makeWork(arr, summElementsWorker));
console.log("makeWork", makeWork(arr, differenceMaxMinWorker));
console.log("makeWork", makeWork(arr, differenceEvenOddWorker));
console.log("makeWork", makeWork(arr, averageEvenElementsWorker));
