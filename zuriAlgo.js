// Question 1

function convertFahrToCelsius(value) {
  if (!value) return "No value passed";
  const valueType = typeof value;
  const fahrValue = Number(value);

  if (Number.isNaN(fahrValue))
    return `${value} is not a valid number but a/an ${valueType}`;

  const celsuisValue = ((fahrValue - 32) * 5) / 9;
  return celsuisValue.toFixed(2) + "\xB0C";
}

// Question 2

function checkYuGiOh(n) {
  if (!n) return `No value passed`;
  const arrMax = Number(n);

  if (Number.isNaN(arrMax)) return `invalid parameter: ${n}`;

  const numArray = [];

  for (let i = 1; i <= arrMax; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) numArray.push("yu-gi-oh");
    else if (i % 3 === 0 && i % 5 === 0) numArray.push("gi-oh");
    else if (i % 2 === 0 && i % 5 === 0) numArray.push("yu-oh");
    else if (i % 2 === 0 && i % 3 === 0) numArray.push("yu-gi");
    else if (i % 2 === 0) numArray.push("yu");
    else if (i % 3 === 0) numArray.push("gi");
    else if (i % 5 === 0) numArray.push("oh");
    else numArray.push(i);
  }

  return numArray;
}
