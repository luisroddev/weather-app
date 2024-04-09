<script setup>
    import { ref } from 'vue'
    import Nav from './Nav.vue';
    import tiempo from './prueba.json'
    
    //console.log(tiempo)
    //const weather = ref([]);

    /*
    console.log()
    fetch()
    .then(res => res.json)
    .then(dataJSON => weather.value = dataJSON)
    */
    const isNavOpen = ref(false)

    function changeNavState(){
        isNavOpen.value = !isNavOpen.value
    }

    const position = ref({
        latitude: 0,
        longitude: 0
    })

    function registerUserPosition(){
        if(navigator.geolocation){
            console.log("El usuario tiene activada la Geolocalización")
            navigator.geolocation.getCurrentPosition(successUserPosition);
            //console.log(position.value)
        }else{
            alert("Activa el permiso de Ubicación en tu navegador")
        }
    }

    function successUserPosition(pos){
        console.log(pos.coords.latitude);
    }

</script>
<template>
    <aside class="aside">
        <Nav @changeNavState="changeNavState" v-show="isNavOpen"/>
        <section class="aside__options">
            <button @click="changeNavState" class="aside__button">Search for places</button>
            <button @click="registerUserPosition" class="aside__button aside__button--round">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z"/>
                </svg>
            </button>
        </section>
        <section class="aside__weather weather">
            <span class="weather__icon">
                <svg class="weather__svg weather__svg--measure" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>
                </svg>
            </span>
            <p class="weather__measure"><span class="weather__measure--numeric">15</span>ºC</p>
            <p class="weather__type">Shower</p>
            <p class="weather__place">Today • Fri 5, Jun</p>
            <p class="weather__location">
                <svg  class="weather__svg weather__svg--location" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                </svg>
                <span>Helsinki</span></p>
        </section>
    </aside>
</template>
<style lang="scss" scoped>
    .aside{
        width: 100%;
        padding: 3rem;
        background-color: map-get($map: $colors, $key: c-background-secondary);

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
            margin: 5rem 0 5rem 0;
        }

        &__place{
            margin: 0 0 1rem 0;
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
        }
    }
</style>