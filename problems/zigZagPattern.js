function convert2(s, numRows) {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill('');
  console.log(rows);
  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }
  console.log(rows);
  return rows.join('');
}

function convert(s, numRows) {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill('');
  console.log(rows);
  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] = rows[currentRow] + char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow = currentRow + goingDown ? 1 : -1;
  }
  console.log(rows);
  return rows.join('');
}

// Example usage:
const result = convert('PAYPALISHIRING', 3);
console.log(result); // Output: "PAHNAPLSIIGYIR"
