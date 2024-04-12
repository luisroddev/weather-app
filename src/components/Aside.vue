<script setup>
    import { ref } from 'vue'
    import Nav from './Nav.vue';
    import TodayBar from './TodayBar.vue';
    
    import { useWeatherStore } from '@/stores/weatherStore';
    const weatherStore = useWeatherStore()

    import { usePlaceStore } from '@/stores/placeStore';
    const placeStore = usePlaceStore()

    const isNavOpen = ref(false)
    function changeNavState(){
        isNavOpen.value = !isNavOpen.value
    }

    function registerUserPosition(){
        if(navigator.geolocation){
            console.log("Location activated")
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(`Latitude: ${position.coords.latitude} / Longitude: ${position.coords.longitude}`)

                let location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }

                weatherStore.fetchDataWeatherFromLocation(location)

            });
        }else{
            alert("The Location is not activated")
        }
    }

</script>
<template>
    <aside class="aside">
        <Transition name="nav">
            <Nav @changeNavState="changeNavState" v-show="isNavOpen"/>
        </Transition>
        <section class="aside__options">
            <button @click="changeNavState" class="aside__button" aria-label="Search for place">Search for places</button>
            <button @click="registerUserPosition" class="aside__button aside__button--round" aria-label="Choose your location">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z"/>
                </svg>
            </button>
        </section>
        <TodayBar v-if="(typeof weatherStore.todayWeatherData.weather_code !== 'undefined')"
            :icon="weatherStore.weatherCodesList[weatherStore.todayWeatherData.weather_code].icon"
            :deg="weatherStore.todayWeatherData.deg"
            :name="weatherStore.weatherCodesList[weatherStore.todayWeatherData.weather_code].name"
            :time="weatherStore.todayWeatherData.time"
            :location="placeStore.place.name"
        />
    </aside>
</template>
<style lang="scss" scoped>
    .aside{
        width: 100%;
        padding: 3rem;
        background-color: map-get($map: $colors, $key: c-background-primary);
        background-image: linear-gradient(to bottom, map-get($map: $colors, $key: c-background-secondary), map-get($map: $colors, $key: c-background-primary));
        background-size: 100% 80rem;
        background-repeat: no-repeat;

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
    .nav-enter-active,
    .nav-leave-active {
        transition: opacity 0.5s ease;
    }

    .nav-enter-from,
    .nav-leave-to {
        opacity: 0;
    }

    @include responsive(75rem){
        .aside{
            background-size: 100%;
        }
    }

</style>