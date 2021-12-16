for (i = 0; i <= 15; i++) {
  for (j = 0; j <= i; j++) {
    document.write(" * ");
  }
  document.write("<br>");
}

let n = 25; 
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "<br>";
}
document.write(`<pre>${string}</pre>`);
