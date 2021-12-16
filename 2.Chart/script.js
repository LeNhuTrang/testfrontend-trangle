function getInput() {
  let anh = +document.getElementById("1").value;
  let phap = +document.getElementById("2").value;
  let duc = +document.getElementById("3").value;
  let nga = +document.getElementById("4").value;
  let nhat = +document.getElementById("5").value;

  let tempdata = [];
  tempdata.push(anh, phap, duc, nga, nhat);

  return tempdata;
}
let data = [];
function drawChart() {
  data = getInput();
  let labels = ["Anh", "Pháp", "Đức", "Nga", "Nhật"];
  // let data = [199.6, 130.3, 126.3, 130];

  let colors = ["#49A9EA", "#36CAAB", "#34495E", "#B370CF", "#FFC107"];

  let myChart = document.getElementById("myChart").getContext("2d");

  let chart = new Chart(myChart, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors,
        },
      ],
    },
    options: {
      title: {
        text: "Chart test",
        display: true,
      },
      legend: {
        display: false,
      },
    },
  });
}
