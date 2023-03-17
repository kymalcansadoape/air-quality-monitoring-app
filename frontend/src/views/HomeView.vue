<script setup>
import chart from "../components/chart.vue"
import alerts from "../components/alerts.vue"
import axios from 'axios'
</script>

<template>
  <main>
    <section class="mt-10 text-slate-200 rounded grid p-4 h-[235px] w-full max-w-[1300px] bg-[#152340] mx-auto">
        <div class="details flex w-full justify-between">
            <div class="w-[25%] text-[.9rem]">
                <div><span class="font-semibold text-[1.2rem]">Specification</span></div>
                <div class="mt-3 flex justify-between">
                    <div>             
                        <p>Device Name</p>
                        <p>Supply Voltage</p>
                        <p>Battery Alternator</p>
                        <p>Cylinder No.</p>
                        <p>Type</p>
                        <p>Intake Air Method</p>
                    </div>
                    <div>
                        <p>: &nbsp&nbsp&nbspBME680</p>
                        <p>: &nbsp&nbsp&nbsp3.6V</p>
                        <p>: &nbsp&nbsp&nbsp80 Amps</p>
                        <p>: &nbsp&nbsp&nbsp6</p>
                        <p>: &nbsp&nbsp&nbspIN-line</p>
                        <p>: &nbsp&nbsp&nbspAir-cooled</p>
                    </div>
                </div>
            </div>
            <div class="detections text-slate-300 gap-3 grid grid-cols-3 h-[200px]">
                <div class="bg-[#081535] rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ co2 }} PPM</p>
                    <p class="text-[.8rem] text-[#78a58f]">Carbon Dioxide (CO2)</p>
                </div>
                <div class="bg-[#081535] rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ hum}} %</p>
                    <p class="text-[.8rem] text-[#78a58f]">Humidity</p>
                </div>
                <div class="bg-[#081535] rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ pressure}} hPa</p>
                    <p class="text-[.8rem] text-[#78a58f]">Pressure</p>
                </div>
                <div class=" bg-[#081535] rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ temperature }} °C</p>
                    <p class="text-[.8rem] text-[#78a58f]">Temperature</p>
                </div>
                <div class="bg-[#081535] rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ lpg}} PPM</p>
                    <p class="text-[.8rem] text-[#78a58f]">LPG</p>
                </div>
                <div class=" bg-[#081535] rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ overall }} %</p>
                    <p class="text-[.8rem] text-[#78a58f]">Air Quality</p>
                </div>
                
            </div>
        </div>
    </section>

    <section class="max-w-[1300px] w-full  mt-10 mx-auto h-[365px] flex justify-between">
        <chart/>
        <alerts/>
    </section>
  </main>
</template>


<script>
export default {
    data(){
        return {
            co2:"",
            hum:"",
            lpg:"",
            temperature:"",
            pressure: "",
            overall: ""
        }
    },
    mounted() {
        this.fetchData();
        setInterval(()=>{
            this.fetchData()
        },1000)
    },

    methods: {
        // 192.168.43.239 - This is for "Test" hotspot
        fetchData(){
            axios.get('http://127.0.0.1:8000/api/latest')
             .then(response =>{
                this.co2 = response.data.co2,
                this.hum = response.data.hum,
                this.pressure = response.data.pressure,
                this.lpg = response.data.lpg,
                this.temperature = response.data.temperature
                this.overall = response.data.overall
             })
             .catch(error=>{
                console.log(error)
             })
        }
    },
   
}


</script>