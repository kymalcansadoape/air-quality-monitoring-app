<script setup>
import chart from "../components/chart.vue"
import alerts from "../components/alerts.vue"
import SensorData from "../assets/fetch_api";
import { onMounted } from 'vue';


const { allData,getAllSensorData} = SensorData()
onMounted(()=> getAllSensorData());
</script>

<template>
  <main>
    <section class="mt-10 rounded grid p-4 h-[235px] w-full max-w-[1300px] bg-white mx-auto">
        <div class="details flex w-full justify-between">
            <div class="w-[25%] text-[.9rem]">
                <div><span class="font-semibold text-[1.2rem]">Specification</span></div>
                <div class="mt-3 flex justify-between">
                    <div>             
                        <p>Device Name</p>
                        <p>System Voltage</p>
                        <p>Battery Alternator</p>
                        <p>Cylinder No.</p>
                        <p>Type</p>
                        <p>Intake Air Method</p>
                    </div>
                    <div>
                        <p>: &nbsp&nbsp&nbspAQ Generator</p>
                        <p>: &nbsp&nbsp&nbsp24 DCV</p>
                        <p>: &nbsp&nbsp&nbsp80 Amps</p>
                        <p>: &nbsp&nbsp&nbsp6</p>
                        <p>: &nbsp&nbsp&nbspIN-line</p>
                        <p>: &nbsp&nbsp&nbspAir-cooled</p>
                    </div>
                </div>
            </div>
            <div class="detections gap-3 grid grid-cols-3 h-[200px]" v-for="data in allData" :key="data.id">
                <div class="bg-yellow-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ data.co2 }}</p>
                    <p class="text-[.8rem]">Carbon Dioxide (CO2)</p>
                </div>
                <div class="bg-blue-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ data.hum }}</p>
                    <p class="text-[.8rem]">Humidity</p>
                </div>
                <div class="bg-red-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ data.cm }}</p>
                    <p class="text-[.8rem]">Carbon Monoxide</p>
                </div>
                <div class="bg-green-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ data.meth }}</p>
                    <p class="text-[.8rem]">Methane</p>
                </div>
                <div class="bg-violet-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ data.lpg }}</p>
                    <p class="text-[.8rem]">LPG</p>
                </div>
                <div class="bg-yellow-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">{{ data.co2 }}</p>
                    <p class="text-[.8rem]">Carbon Dioxide (CO2)</p>
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





