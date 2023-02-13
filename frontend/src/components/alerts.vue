<template>
    <div class="bg-white h-full w-[550px] px-4 py-2 relative flex flex-col rounded">
        <div>
            <p class="font-bold text-[17px] mb-3">Alerts</p>
        </div>
        <div class="gap-y-3 flex flex-col h-[300px] overflow-y-scroll">
            <div class="bg-slate-200 h-[80px] before:rounded-l-lg relative rounded text-[.9rem] before:block before:h-full before:w-[10px] before:content-[''] before:absolute before:bg-red-500">
                <div class="h-full p-2 px-7">
                    <p class="text-[.8rem]">Today 9:30 AM</p>
                    <p class="font-semibold text-[1rem]">Co2 level exceeded the limit </p>
                    <p>500 PPM</p>
                </div>
            </div>

            <div class="bg-slate-200 h-[80px] before:rounded-l-lg relative rounded text-[.9rem] before:block before:h-full before:w-[10px] before:content-[''] before:absolute before:bg-yellow-500">
                <div class="h-full p-2 px-7">
                    <p class="text-[.8rem]">Yesteday 12:30 PM</p>
                    <p class="font-semibold text-[1rem]">Methane Level exceeded the limit</p>
                    <p>200 PPM</p>
                </div>
            </div>

            <div class="bg-slate-200 h-[80px] before:rounded-l-lg relative rounded text-[.9rem] before:block before:h-full before:w-[10px] before:content-[''] before:absolute before:bg-green-500">
                <div class="h-full p-2 px-7">
                    <p class="text-[.8rem]">3 Days Ago</p>
                    <p class="font-semibold text-[1rem]">Co2 level exceeded the limit </p>
                    <p>500 PPM</p>
                </div>
            </div>

            <div class="bg-slate-200 h-[80px] before:rounded-l-lg relative rounded text-[.9rem] before:block before:h-full before:w-[10px] before:content-[''] before:absolute before:bg-green-500">
                <div class="h-full p-2 px-7">
                    <p class="text-[.8rem]">6 Days Ago</p>
                    <p class="font-semibold text-[1rem]">Co2 level exceeded the limit </p>
                    <p>500 PPM</p>
                </div>
            </div>
        </div>
    </div>
</template>