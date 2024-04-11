<script setup>
    import { ref } from 'vue'
    import { useWeatherStore } from '@/stores/weatherStore';
    import Nav from './Nav.vue';
    import TodayBar from './TodayBar.vue';
    
    const weatherStore = useWeatherStore()

    const isNavOpen = ref(false)

    function changeNavState(){
        isNavOpen.value = !isNavOpen.value
    }

    function registerUserPosition(){
        if(navigator.geolocation){
            console.log("Ubicación activada")
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
            });
        }else{
            alert("No está conectada la Ubicación")
        }
    }


</script>
<template>
    <aside class="aside">
        <Nav @changeNavState="changeNavState" v-show="isNavOpen"/>
        <section class="aside__options">
            <button @click="changeNavState" class="aside__button">Search for places</button>
            <button @click="registerUserPosition" class="aside__button aside__button--round">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z"/>
                </svg>
            </button>
        </section>
        <TodayBar v-if="typeof weatherStore.todayWeatherData.weather_code !== 'undefined'"
            :icon="weatherStore.weatherCodesList[weatherStore.todayWeatherData.weather_code].icon"
            :deg="weatherStore.todayWeatherData.deg"
            :name="weatherStore.todayWeatherData.name"
            :time="weatherStore.weatherCodesList[weatherStore.todayWeatherData.weather_code].name"
            :location="weatherStore.todayWeatherData.time"
        />
        <!-- 
        <section v-if="weatherStore.todayWeatherData" class="aside__weather weather">
            <span v-if="weatherStore.todayWeatherData.weather_code && weatherStore.weatherCodesList" class="weather__icon material-symbols-outlined">
                {{ weatherStore.weatherCodesList[weatherStore.todayWeatherData.weather_code].icon }}
            </span>
            <p v-if="weatherStore.todayWeatherData.weather_code && weatherStore.weatherCodesList" class="weather__type">
                {{ weatherStore.weatherCodesList[weatherStore.todayWeatherData.weather_code].name }}
            </p>
            <p class="weather__measure"><span class="weather__measure--numeric"> 
                {{ weatherStore.todayWeatherData.deg }}</span>
                ºC
            </p>
            <p class="weather__place">
                {{ weatherStore.todayWeatherData.time }}
            </p>
            <p class="weather__location">
                <svg  class="weather__svg weather__svg--location" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                </svg>
                <span>Helsinki</span>
            </p>
        </section>

        -->
    </aside>
</template>
<style lang="scss" scoped>
    .aside{
        width: 100%;
        padding: 3rem;
        background-color: map-get($map: $colors, $key: c-background-secondary);
        background-image: linear-gradient(to bottom, map-get($map: $colors, $key: c-background-secondary), map-get($map: $colors, $key: c-background-primary));
        
        &__options{
            display: flex;
            justify-content: space-between;
        }

        &__button{
            background-color: map-get($map: $colors, $key: c-grey);
            color: map-get($map: $colors, $key: c-text-primary);
            font-size: map-get($map: $font-sizes, $key: fs-medium); 
            border: none;
            padding: 0.5rem 1.25rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            box-shadow: 0 0.5rem 1rem map-get($map: $colors, $key: c-background-primary);
            
            &--round{
                fill: map-get($map: $colors, $key: c-text-primary);
                padding: 0.5rem;
                border-radius: 50%;
            }

            &:hover{
                background-color: map-get($map: $colors, $key: c-text-primary);
                color: map-get($map: $colors, $key: c-background-accent);
                fill: map-get($map: $colors, $key: c-background-accent);
                box-shadow: 0 0.2rem 1rem map-get($map: $colors, $key: c-background-terciary);
            
            }
        }

        &__weather{
            display: flex;
            align-items: center;
        }

    }

    .weather{
        display: flex;
        flex-direction: column;
        text-align: center;
        color: map-get($map: $colors, $key: c-text-secondary);
        
        &__measure{
            font-size: map-get($map: $font-sizes, $key: fs-large);

            &--numeric{
                color: map-get($map: $colors, $key: c-text-primary);
                font-size: map-get($map: $font-sizes, $key: fs-extra-xl-large);
            
                &::first-letter{
                    color:red;
                }
            }
        }
        
        &__svg{
            fill: map-get($map: $colors, $key: c-text-primary); 
        }

        &__type{
            color: map-get($map: $colors, $key: c-text-secondary);
            font-size: map-get($map: $font-sizes, $key: fs-large);
            margin: 3rem 0 3rem 0;
        }

        &__place{
            margin: 0 0 1rem 0;
        }

        &__icon{
            color: map-get($map: $colors, $key: c-text-primary);
            font-size: map-get($map: $icon-sizes, $key: i-extra-large);
            height: auto;
            margin: 5rem 0 5rem 0;
        }

        &__svg{
            &--measure{
                fill: map-get($map: $colors, $key: c-text-primary);
                width: 10rem;
                height: auto;
                margin: 3rem 0 5rem 0;
            }

            &--location{
                fill: map-get($map: $colors, $key: c-text-secondary);
            }

        }

        &__location{
            width: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
    }
</style>