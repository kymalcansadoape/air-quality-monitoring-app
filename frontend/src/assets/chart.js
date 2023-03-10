import Chart from "chart.js/auto";
let co2 = document.getElementById('co2'),
      hum = document.getElementById('hum'),
      methane = document.getElementById('methane'),
      cm = document.getElementById('cm'),
      lpg = document.getElementById('lpg')
var dates = [];
  for (var i = 1; i <= 7; i++) {
    dates.push(`Day ${i}`);
}
let chart_data = [12,2,4,6,9,17,1]
let label

co2.onclick = ()=>{
    chart_data = [12,2,4,6,9,17]
    label = "C02"
    updateData()
}
hum.onclick = ()=>{
    chart_data = [5,2,6,8,1,3,7]
    label = "Humidity"
    updateData()
}
methane.onclick = ()=>{
    chart_data = [2,5,2,8,3,9,1]
    label = "Methane"
    updateData()
}
cm.onclick = ()=>{
    chart_data = [1,4,8,3,9,3,8]
    label = "Carbon Monoxide"
    updateData()
}
lpg.onclick = ()=>{
    chart_data = [1,2,8,3,8,4,8]
    label = "LPG"
    updateData()
}
//setup
const data = {
      labels: dates,
      datasets: [{
          label: "C02",
          data: chart_data,
          backgroundColor: [
            "rgba(255,99,132,.7)",
            "rgba(54,162,235,.7)",
            "rgba(255,206,86,.7)",
            "rgba(75,192,192,.7)",
            "rgba(153,102,255,.7)",
            "rgba(255,159,64,.7)",
          ],
          borderColor: [
            "rgba(255,99,132,.7)",
            "rgba(54,162,235,.7)",
            "rgba(255,206,86,.7)",
            "rgba(75,192,192,.7)",
            "rgba(153,102,255,.7)",
            "rgba(255,159,64,.7)",
          ],
          borderWidth: 1,
        }],
}

//config
const config = {
  type: "bar",
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
}
const barChart = new Chart(
    document.getElementById("thisChart").getContext('2d'),
    config
)

function updateData(){

    for(var i = 0; i < chart_data.length; i++){
        barChart.data.datasets[0].data[i] = chart_data[i]
    }
    barChart.data.datasets[0].label = label
    barChart.update();
}

