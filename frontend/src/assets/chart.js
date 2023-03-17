import Chart from "chart.js/auto";
import {
  generateData, 
  carbon_chart,
  temperature_chart,
  humidity_chart,
  lpg_chart,
  pressure_chart } from "./fetch"
var dataPoints = [0];
setInterval(fetchData,2000)
export let chart_data = []
let carbon = document.getElementById('carbon'),
      humi = document.getElementById('humi'),
      pressure = document.getElementById('pressure'),
      temp = document.getElementById('temp'),
      LpG = document.getElementById('lpg')
let data_length = 9

let label
window.addEventListener('load',()=>{
  chart_data = carbon_chart
  label = "C02"
  updateData()
})
carbon.onclick = ()=>{
    chart_data = carbon_chart
    label = "C02"
    updateData()
}
humi.onclick = ()=>{
    chart_data = humidity_chart
    label = "Humidity"
    updateData()
}
pressure.onclick = ()=>{
    chart_data = pressure_chart
    label = "Pressure"
    updateData()
}
temp.onclick = ()=>{
    chart_data = temperature_chart
    label = "Temperature"
    updateData()
}
LpG.onclick = ()=>{
    chart_data = lpg_chart
    label = "LPG"
    updateData()
}
//setup
const data = {
      labels: dataPoints,
      datasets: [{
          label: label,
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
  type: "line",
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
}
const lineChart = new Chart(
    document.getElementById("thisChart").getContext('2d'),
    config
)

function updateData(){

    for(var i = 0; i < chart_data.length; i++){
      lineChart.data.datasets[0].data[i] = chart_data[i]
    }

    lineChart.data.datasets[0].label = label

    if(chart_data.length > data_length){
      chart_data.shift()
    }

    const newNumber = dataPoints[dataPoints.length - 1] + 1
    dataPoints.push(newNumber)
    if(dataPoints.length > data_length){
      dataPoints.shift()
    }
    lineChart.update();

}

function fetchData(){
    generateData()
    updateData()

}

