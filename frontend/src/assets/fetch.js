import axios from 'axios'
export let carbon_chart = []
export let temperature_chart = []
export let humidity_chart = []
export let lpg_chart = []
export let pressure_chart = []
export let airQuality_percentage = []
export let created_at = ["2022-03-17T16:37:00.000Z"]
export function generateData(){
  axios.get('http://127.0.0.1:8000/api/latest')
  .then(response =>{
     carbon_chart.push(response.data.co2)
     temperature_chart.push(response.data.temperature)
     pressure_chart.push(response.data.pressure)
     lpg_chart.push(response.data.lpg)
     humidity_chart.push(response.data.hum)
     airQuality_percentage.push(response.data.overall)
     created_at.push(response.data.created_at)
 })
 .catch(error=>{
    console.log(error)
 })
}
