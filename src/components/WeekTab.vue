<script setup>
    //import { ref } from 'vue'
    import { useWeatherStore } from './../stores/weatherStore.js'
    import WeekItem from './WeekItem.vue';

    const weatherStore = useWeatherStore()

    weatherStore.receiveDataToday()
    //console.log(weatherStore.weather)
    console.log(weatherStore.listWeatherFormatted)
</script>
<template>
    <article v-if="weatherStore.weather.daily" class="week">
        article
        <span v-for="(day, index) in weatherStore.weather.daily" :key="index">
            <span>{{ day }}</span>
        </span>
        <!--
        <WeekItem v-for="(day, index) in weatherStore.weather.daily" 
            :day="day.daily.time" 
            :max="day.daily.temperature_2m_max" 
            :min="day.daily.temperature_2m_min" 
            :key="index"/>
           --> 
            <!--
        <div class="week__item">
            <p class="week__day">Tomorrow</p>
            <span class="week__icon">
                <svg class="week__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>
                </svg>
            </span>
            <div class="week__degrees">
                <p class="week__maxdeg">16ºC</p>
                <p class="week__mindeg">11ºC</p>
            </div>
        </div>
        <div class="week__item">
            <p class="week__day">Tomorrow</p>
            <span class="week__icon">
                <svg class="week__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>
                </svg>
            </span>
            <div class="week__degrees">
                <p class="week__maxdeg">16ºC</p>
                <p class="week__mindeg">11ºC</p>
            </div>
        </div>
        <div class="week__item">
            <p class="week__day">Tomorrow</p>
            <span class="week__icon">
                <svg class="week__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>
                </svg>
            </span>
            <div class="week__degrees">
                <p class="week__maxdeg">16ºC</p>
                <p class="week__mindeg">11ºC</p>
            </div>
        </div>
        <div class="week__item">
            <p class="week__day">Tomorrow</p>
            <span class="week__icon">
                <svg class="week__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>
                </svg>
            </span>
            <div class="week__degrees">
                <p class="week__maxdeg">16ºC</p>
                <p class="week__mindeg">11ºC</p>
            </div>
        </div>
        <div class="week__item">
            <p class="week__day">Tomorrow</p>
            <span class="week__icon">
                <svg class="week__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>
                </svg>
            </span>
            <div class="week__degrees">
                <p class="week__maxdeg">16ºC</p>
                <p class="week__mindeg">11ºC</p>
            </div>
        </div>
        -->
    </article>
</template>
<style lang="scss" scoped>
    .week{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap:2rem;
        text-align: center;

        &__item{
            padding: 2rem;
            display: flex;
            flex-direction: column;
            background: map-get($map: $colors, $key: c-background-secondary);
        }

        &__svg{
            fill: map-get($map: $colors, $key: c-text-primary);
            width: 5rem;
            margin: 2rem 0 2rem 0;
            height: auto;
        
        }

        &__degrees{
            display: flex;
            justify-content: space-between;
        }

        &__maxdeg{
            margin: 0 1rem 0 0;
        }

        &__mindeg{
            color: map-get($map: $colors, $key: c-text-secondary);
        }
    }

    @include responsive(90rem){
        .week{
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @include responsive(70rem){
        .week{
            grid-template-columns: repeat(2, 1fr);
        }
    }

</style>