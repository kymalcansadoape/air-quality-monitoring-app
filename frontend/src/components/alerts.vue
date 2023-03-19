<script>
    import { 
        humidity_chart,
        carbon_chart,
        temperature_chart,
        lpg_chart,
        pressure_chart,
        created_at } from "../assets/fetch"
    let maximumNotif = 6
    let allNotif = []
    let notificationColor
    let dateToDisplay;
    setInterval(()=>{
        let year = new Date(created_at[created_at.length - 1]).getFullYear()
        let month = new Date(created_at[created_at.length - 1]).toLocaleDateString("en-US",{month:"long"})
        let day = new Date(created_at[created_at.length - 1]).getDate()
        let hours = new Date(created_at[created_at.length - 1]).getHours()
        let mins = new Date(created_at[created_at.length - 1]).getMinutes()
        let latestRead = {
            "humidty": humidity_chart[humidity_chart.length -1],
            "lpg": lpg_chart[lpg_chart.length -1],
            "carbon": carbon_chart[carbon_chart.length -1],
            "temperature": temperature_chart[temperature_chart.length -1],
            "pressure": pressure_chart[pressure_chart.length -1],
            "DateCreated" : `${month}, ${day} ${year} - ${hours}:${mins}`
        }
        if(latestRead.humidty >= 70){addNotif(latestRead['humidty'],"Humidity","%",latestRead['DateCreated'])}
        if(latestRead.lpg >= 50){addNotif(latestRead['lpg'],"LPG","PPM",latestRead['DateCreated'])}
        if(latestRead.carbon >= 80){addNotif(latestRead['carbon'],"Carbon Dioxide","PPM",latestRead['DateCreated'])}
        if(latestRead.temperature >= 37){addNotif(latestRead['temperature'],"Temperature","°C",latestRead['DateCreated'])}
        if(latestRead.pressure  >= 90){addNotif(latestRead['pressure'],"Pressure","hPa",latestRead['DateCreated'])}
        if(allNotif.length > maximumNotif){allNotif.shift()}

    },3000)
    function addNotif(notif,chemicalName,unit,time){
        allNotif.push({
            data: notif,
            name: chemicalName,
            unit: unit,
            timeStamp: time
        })
        const newData = allNotif[allNotif.length - 1]['data']
        const newChemicalNameDetected = allNotif[allNotif.length - 1]['name']
        const newUnit = allNotif[allNotif.length - 1]['unit']
        const newTimeStamp = allNotif[allNotif.length - 1]['timeStamp']
        const parentOfNotif = document.getElementById('main_div')
        const maxChildNotifElement = parentOfNotif.childNodes
        let day = new Date(created_at[created_at.length - 1])
        alertColor(day)
        parentOfNotif.insertAdjacentHTML('afterbegin',renderNotification(newTimeStamp,newChemicalNameDetected,newData,newUnit))
        for(let j = 0; j <maxChildNotifElement.length; j++){
            if(j === 9){
                parentOfNotif.removeChild(maxChildNotifElement[j])
                break
            }
        }
        
    }   
    function renderNotification(time,chemname,data,unit){
        return `
            <div class="notifContainer bg-[#081535] h-[80px] before:rounded-l-lg relative rounded text-[.9rem] before:block before:h-full before:w-[10px] before:content-[''] before:absolute ${notificationColor}">
                <div class="h-full p-2 px-7">
                    <p class="text-[.8rem]">${dateToDisplay} - ${time}</p>
                    <p class="font-semibold text-[1rem]">${chemname} level exceeded the limit </p>
                    <p>${data} ${unit}</p>
                </div>
            </div
        `
    }

    function alertColor(time){
        const now = new Date(time);
        const yesterday = new Date();
        const lastWeek = new Date();
        yesterday.setDate(new Date().getDate() - 1);
        lastWeek.setDate(new Date().getDate() - 7);
        if (now.toDateString() === new Date().toDateString()) {
            dateToDisplay = "Today";
            notificationColor = "before:bg-red-500"
        } else if (yesterday.toDateString() === now.toDateString()) {
            dateToDisplay = "Yesterday";
            notificationColor = "before:bg-yellow-500"
        } else if (lastWeek.toDateString() <= now.toDateString()) {
            dateToDisplay = "Last Week";
            notificationColor = "before:bg-green-500"
        } else {
            dateToDisplay = now.toDateString();
        }
    }

</script>
<template>
    <div class="bg-[#152340] text-slate-300 h-full w-[550px] px-4 py-2 relative flex flex-col rounded">
        <div>
            <p class="font-bold  text-[17px] mb-3">Alerts</p>
        </div>
        <div class="gap-y-3 flex flex-col h-[300px] overflow-y-scroll " id="main_div">
            <!-- Notification goes here -->
        </div>
    </div>
</template>
