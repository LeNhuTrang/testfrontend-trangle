function createTable(rows, cols) {
  let output = "<table border=1 width=500 cellpadding=0 cellspacing = 0>";
  for (let i = 1; i <= rows; i++) {
    output = output + "<tr>";
    for (let j = 1; j <= cols; j++) {
      output = output + "<td>" + `${j}*${i}=` + i * j + "</td>";
    }
    output = output + "</tr>";
    j = 1;
  }
  output = output + "</table>";
  document.getElementById("table").innerHTML = output;
}
createTable(10, 10);

