<script setup>
    import TemperatureSelectorTab from './TemperatureSelectorTab.vue';
    import WeekTab from './WeekTab.vue';
    import TodayTab from './TodayTab.vue';
    import { useWeatherStore } from '@/stores/weatherStore';
    const weatherStore = useWeatherStore()
</script>
<template>
    <main class="main">
        <TemperatureSelectorTab />
        <WeekTab />
        <TodayTab v-if="weatherStore.todayWeatherData"
            :wind="weatherStore.todayWeatherData.wind_speed"
            :wind_degrees="weatherStore.todayWeatherData.wind_degrees"
            :wind_direction="weatherStore.transformAngleWindToCharacters(weatherStore.todayWeatherData.wind_degrees)"
            :humidity="weatherStore.todayWeatherData.humidity"
            :visibility="weatherStore.todayWeatherData.visibility"
            :air_pressure="weatherStore.todayWeatherData.air_pressure"/>
    </main>
</template>
<style lang="scss" scoped>
    .main{
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }
</style>