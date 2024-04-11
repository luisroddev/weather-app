import { defineStore } from "pinia";
import { ref } from 'vue';
import placesFormatJSON from './../assets/data/places.json'

export const usePlaceStore = defineStore('placeStore', () => {
    const placesFormatList = ref(placesFormatJSON)
    const place = ref()

    //por defecto los datos que se tomarán por primera vez serán los de London
    place.value = placesFormatList.value[0]

    /**
     * Pide a la API Geocoding los datos de un lugar
     * @param {String} placeSearched nombre del lugar buscado
     * @returns objeto con los datos del lugar buscado
     */
    const fetchPlace = async (placeSearched) => {
        try {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${placeSearched}&count=1&language=en&format=json`)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }   
            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    /**
     * Busca los datos de un lugar guardado en el fichero places.json
     * @param {String} location lugar buscado
     * @returns los datos del lugar
     */
    function searchPlace(location) {
        placesFormatList.value.forEach((placeInList) => {
            if(placeInList.name == location){
                place.value = placeInList
            }
        })
        return place.value
    }

    /**
     * Cambiar el valor del lugar elegido
     * @param {String} location lugar elegido
     */
    function updateSelectedPlace(location){
        place.value = location
    }

    return { place, placesFormatList, searchPlace, fetchPlace, updateSelectedPlace }
})