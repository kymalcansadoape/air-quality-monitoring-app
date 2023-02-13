import axios from 'axios'
import { ref } from 'vue'

axios.defaults.baseURL = "http://localhost:8000/api/"
export default function SensorData(){

    const allData = ref([])
    const getAllSensorData = async()=>{
        const response = await axios.get("sensor")
        allData.value = response.data.data;
    }
    return {
        allData,
        getAllSensorData
    }
}