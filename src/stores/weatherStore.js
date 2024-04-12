import { defineStore } from "pinia";
import { ref } from 'vue';
import weatherCodesJSON from './../assets/data/weather-codes.json'

export const useWeatherStore = defineStore('weatherStore', () => {
    const weather = ref({})
    const todayWeatherData = ref([])
    const nextDaysWeatherData = ref([])
    const weatherCodesList = transformWeatherCodesToList();

    /**
     * Realiza una petición fetch a la API Open-Meteo y guarda el resultado
     * en la constante reactiva weather
     */
    const fetchDataWeather = async () => {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.6351&longitude=-4.0049&current=temperature_2m,surface_pressure,wind_speed_10m,relative_humidity_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&daily=wind_direction_10m_dominant&hourly=visibility&wind_speed_unit=mph&timezone=auto')
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            weather.value = data;

            await transformNextDaysData()
            await transformTodayData()

        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    /**
     * Realiza una petición fetch a la API Open-Meteo para recibir el tiempo
     * en una latitud y longitud determinada y guarda el resultado
     * en la constante reactiva weather
     * @param {Object} location objeto con la latitud y la longitud
     */
    const fetchDataWeatherFromLocation = async (location) => {
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,surface_pressure,wind_speed_10m,relative_humidity_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&daily=wind_direction_10m_dominant&hourly=visibility&wind_speed_unit=mph&timezone=auto`)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            weather.value = data;
            await transformNextDaysData()
            await transformTodayData()

        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    /**
     * Transforma los datos recibidos de la API para crear un objeto
     * on los datos de hoy y los guarda en la constante reactiva todayWeatherData
     */
    const transformTodayData = async () => {
        /** Visibility se recibe en una lista de horas.  Se recibe la hora de la
         *  peticion y se usa para pedir la Visibility requerida
         */
        let hourNow = new Date().getHours()

        let obj = {
            deg: weather.value.current.temperature_2m,
            weather_code: weather.value.current.weather_code,
            time: formatDate(weather.value.current.time),
            wind_speed: weather.value.current.wind_speed_10m,
            wind_degrees: weather.value.daily.wind_direction_10m_dominant[0],
            humidity: weather.value.current.relative_humidity_2m,
            visibility: transformMetersToMiles(weather.value.hourly.visibility[hourNow]),
            air_pressure: weather.value.current.surface_pressure
        }
        todayWeatherData.value = obj;
    }

    /**
     * Transforma los datos recibidos de la API para crear una lista
     * de objetos con los datos de los 5 dias siguientes a hoy
     * y los guarda en la constante reactiva nextDaysWeatherData
     */
    const transformNextDaysData = async () => {
        nextDaysWeatherData.value.length = 0
        weather.value.daily.time.forEach((time, index) => {
            let obj = {
                date: formatDate(time),
                weather_code: weather.value.daily.weather_code[index],
                deg_max: weather.value.daily.temperature_2m_max[index],
                deg_min: weather.value.daily.temperature_2m_min[index]
            }
            if(index != 0 && index != 6){
                nextDaysWeatherData.value.push(obj);
            }
        });
    }

    /**
     * Transforma los codigos del tiempo guardados en el fichero JSON a
     * una lista de objetos de Javascript
     */
    function transformWeatherCodesToList (){
        return weatherCodesJSON[0];
    }

    /**
     * Transforma el angulo del viento recibido a una cadena de caracteres
     * @param {Number} angle angulo del viento (de 0 a 360)
     * @returns {String} dirección del viento
     */
    function transformAngleWindToCharacters(angle) {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        return directions[Math.round(angle / 45) % 8];
    }

    /**
     * Tranforma un numero en metros a un numero en millas
     * @param {Number} meters distancia original del cálculo
     * @returns {Number} millas a calcular
     */
    function transformMetersToMiles(meters){
        return Number((meters * 0.000621).toFixed(2))
    }

    /**
     * Formatea una cadena de texto fecha de un formato a otro
     * @param {String} dateString fecha original con estructuraa "YYYY-mm-dd"
     * @returns {String} retorna fecha formateada con estructura "DayOfWeek, Month DayNumber"
     */
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { weekday: 'short', day: 'numeric', month: 'short' };

        return date.toLocaleDateString('en-US', options);
    }

    return { weather, weatherCodesList, todayWeatherData, nextDaysWeatherData, fetchDataWeather, fetchDataWeatherFromLocation,  transformAngleWindToCharacters, formatDate }
})