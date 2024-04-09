import { defineStore } from "pinia";
import { ref } from 'vue';

export const useWeatherStore = defineStore('weatherStore', () => {
    const weather = ref({})
    const listWeatherFormatted = ref ({})
    const dayFormat = ref({})

    const saludo = async (name) => {
        console.log(`Hola ${name}`)
    }

    const receiveDataToday = async () => {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&wind_speed_unit=mph&timezone=auto')
        const data = await response.json();
        weather.value = data;

        listWeatherFormatted.value = await transformDataDays();
    }

    const transformDataDays = async () => {
        const obj = {}
        for(let day in weather.value.daily.time.length){
            for(let property in weather.value.daily){
                obj[property] = property;
            }

            listWeatherFormatted.value.push = obj

        }

        console.log(listWeatherFormatted)
    }

    /**
     TEMPERATURA MÁXIMA Y mínima de hoy y proximos dias
     https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&wind_speed_unit=mph&timezone=auto
     
     +HOY tiempo y weather code
     https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&wind_speed_unit=mph&timezone=auto
     //asignar weather code con iconos de google
     */
    /*
    minute
    https://api.open-meteo.com/v1/forecast?latitude=40.637017&longitude=3.9865771&hourly=temperature_2m,visibility,wind_speed_180m,wind_direction_180m,relative_humidity_1000hPa&wind_speed_unit=mph&timezone=Europe%2FLondon
    */

    return { weather, listWeatherFormatted, saludo, receiveDataToday, transformDataDays }
})