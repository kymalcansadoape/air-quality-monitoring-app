export let carbon_chart = []
export let temperature_chart = []
export let humidity_chart = []
export let lpg_chart = []
export let pressure_chart = []
export function generateData(){
//   axios.get('http://127.0.0.1:8000/api/latest')
//   .then(response =>{
//     chart_data[0] = response.data.co2
//     chart_data[1] = response.data.hum,
//     chart_data[2] = response.data.cm
//     chart_data[3] = response.data.co2
//     chart_data[4] = response.data.lpg,
//     chart_data[5] = 50
//     updateData()

//  })
//  .catch(error=>{
//     console.log(error)
//  })
    let min =10
    let max =100
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    let y = Math.floor(Math.random() * (max - min + 1)) + min;
    let z = Math.floor(Math.random() * (max - min + 1)) + min;
    let c = Math.floor(Math.random() * (max - min + 1)) + min;
    let b = Math.floor(Math.random() * (max - min + 1)) + min;
    carbon_chart.push(x)
    temperature_chart.push(y)
    pressure_chart.push(z)
    lpg_chart.push(c)
    humidity_chart.push(b)
}
