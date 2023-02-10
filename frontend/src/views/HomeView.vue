<script setup>
import chart from "../components/chart.vue"
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
            <div class="detections gap-3 grid grid-cols-3 h-[200px]">
                <div class="bg-yellow-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">450PPM</p>
                    <p class="text-[.8rem]">Carbon Dioxide (CO2)</p>
                </div>
                <div class="bg-blue-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">450PPM</p>
                    <p class="text-[.8rem]">Carbon Dioxide (CO2)</p>
                </div>
                <div class="bg-red-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">450PPM</p>
                    <p class="text-[.8rem]">Carbon Dioxide (CO2)</p>
                </div>
                <div class="bg-green-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">450PPM</p>
                    <p class="text-[.8rem]">Carbon Dioxide (CO2)</p>
                </div>
                <div class="bg-violet-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">450PPM</p>
                    <p class="text-[.8rem]">Carbon Dioxide (CO2)</p>
                </div>
                <div class="bg-yellow-200 rounded flex flex-col px-6 justify-center items-center w-[230px] h-full">
                    <p class="font-semibold">450PPM</p>
                    <p class="text-[.8rem]">Carbon Dioxide (CO2)</p>
                </div>
                
            </div>
        </div>
    </section>

    <section class="max-w-[1300px] w-full bg-white mt-10 mx-auto p-4 h-[330px]">
        <chart class="w-full max-w-[700px]"/>
    </section>
  </main>
</template>



