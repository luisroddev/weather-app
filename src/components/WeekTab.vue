<script setup>
    import { useWeatherStore } from './../stores/weatherStore.js'
    import DayItem from './DayItem.vue';

    const weatherStore = useWeatherStore()
    
</script>
<template>
    <section v-if="(typeof weatherStore.todayWeatherData.weather_code !== 'undefined')" class="week">
        <DayItem v-for="(day, index) in weatherStore.nextDaysWeatherData" 
            :date="day.date" 
            :icon="weatherStore.weatherCodesList[day.weather_code].icon"
            :max="day.deg_max" 
            :min="day.deg_min" 
            :key="index"/>
    </section>
</template>
<style lang="scss" scoped>
    .week{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        gap:2rem;
        text-align: center;
    }

    @include responsive(90rem){
        .week{
            grid-template-columns: repeat(2, 1fr);
            padding: 1rem;
        }
    }
</style>