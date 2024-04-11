<script setup>
    import { ref } from 'vue'
    import { useWeatherStore } from '@/stores/weatherStore';
    import { usePlaceStore } from '@/stores/placeStore';
    const weatherStore = useWeatherStore()
    const placeStore = usePlaceStore()

    const emit = defineEmits(['changeNavState'])
    function changeNavState(){
        emit('changeNavState', true);
    }

    const placeWritten = ref()

    const searchWeather = async() => {
        try{
            let locationFound = await placeStore.fetchPlace(placeWritten.value)
            if(locationFound.results && locationFound.results.length > 0){
                let placeData = {
                    name: locationFound.results[0].name,
                    latitude: locationFound.results[0].latitude,
                    longitude: locationFound.results[0].longitude
                }
                placeStore.updateSelectedPlace(placeData)
                weatherStore.fetchDataWeatherFromLocation(placeData)
            }else{
                alert("Place not found!")
            }
        }catch(error){
            console.error(error)
        }
    }

    function selectWeather(place){
        let location = placeStore.searchPlace(place)
        weatherStore.fetchDataWeatherFromLocation(location)
    }
</script>
<template>
    <nav class="nav">
        <button @click="changeNavState" class="nav__close">
            <svg class="nav__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
        </button>
        <nav class="nav__bar">
            <input v-model="placeWritten" type="text" class="nav__input-text" placeholder="Search location">
            <input @click="searchWeather()" type="button" class="nav__input-button" value="Search">
        </nav>
        <div class="nav__list">
            <button class="nav__place" @click="selectWeather('London')">
                <span class="nav__span">London</span>
                <span class="nav__span">
                    <svg class="nav__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                    </svg>
                </span>
            </button>
            <button class="nav__place" @click="selectWeather('Barcelona')">
                <span class="nav__span">Barcelona</span>
                <span class="nav__span">
                    <svg class="nav__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                    </svg>
                </span>
            </button>
            <button class="nav__place" @click="selectWeather('Long Beach')">
                <span class="nav__span">Long Beach</span>
                <span class="nav__span">
                    <svg class="nav__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                    </svg>
                </span>
            </button>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
    .nav{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        max-width: 26rem;
        background-color: map-get($map: $colors, $key: c-background-secondary);
        height: 100vh;
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        &__close{
            background-color: map-get($map: $colors, $key: c-background-secondary);
            padding: 1rem;
            border: 0;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: 0.5s;
            margin: 0 0 1rem 0;

            &:hover{
                rotate: 90deg;
            }
        }


        &__bar{
            display: flex;
            justify-content: space-between;
        }

        &__input-text{
            width: 100%;
            border: 0.19rem solid map-get($map: $colors, $key: c-text-primary);
            color: map-get($map: $colors, $key: c-text-primary);
            background-color: map-get($map: $colors, $key: c-transparent);
            font-size: map-get($map: $font-sizes, $key: fs-medium);
            padding: 0 1rem;
            border-radius: 1rem 0 0 1rem;
            font-weight: bold;
            transition: 0.5s;

            &::placeholder{
                color: map-get($map: $colors, $key: c-text-primary);
            }

            &:focus{
                outline: none;
                background-color: map-get($map: $colors, $key: c-text-primary);
                color: map-get($map: $colors, $key: c-text-terciary);

                &::placeholder{
                    color: map-get($map: $colors, $key: c-text-terciary);
                }
            }
        }
    
        &__input-button{
            background-color: map-get($map: $colors, $key: c-background-accent);
            color: map-get($map: $colors, $key: c-text-primary);
            font-size: map-get($map: $font-sizes, $key: fs-medium);
            padding:1rem 2rem;
            border-radius:  0 1rem 1rem 0;
            border: none;
            outline: none;
            font-weight: bold;
            cursor: pointer;
            transition: 0.5s;

            &:hover{
                background-color: map-get($map: $colors, $key: c-black);
            }
        }

        &__list{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: 3rem 0;
        }

        &__place{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: map-get($map: $colors, $key: c-background-secondary);
            border: 0.19rem solid map-get($map: $colors, $key: c-transparent);
            border-radius: 1rem;
            color: map-get($map: $colors, $key: c-text-primary);
            outline: none;
            padding: 1.5rem 1rem 1.5rem 1rem;
            margin: 1rem 0 1rem 0;
            font-size: map-get($map: $font-sizes, $key: fs-medium);
            cursor: pointer;

            transition: all 0.5s ease;

            &:hover{
                border: 0.19rem solid map-get($map: $colors, $key: c-text-terciary);
            }
        }

        &__span{
            color: map-get($map: $colors, $key: c-text-primary);
        }

        &__svg{
            fill: map-get($map: $colors, $key: c-text-primary);
        }
    }

    @include responsive(60rem){
        .nav{
            max-width: 100%;
            display: inline-block;
        }
    }
</style>