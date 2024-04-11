<script setup>
    defineProps({
        icon: String,
        deg: Number,
        name: String,
        time: String,
        location: String
    })
</script>
<template>
    <section class="weather">
        <span class="weather__icon material-symbols-outlined">{{ icon }}</span>
        <p class="weather__measure"><span class="weather__measure--numeric">{{ deg }}</span><span>ºC</span></p>
        <p class="weather__type">{{ name }}</p>
        <p class="weather__place">{{ time }}</p>
        <p class="weather__location">
            <svg  class="weather__svg weather__svg--location" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
            </svg>
            <span class="weather__name">{{ location }}</span>
        </p>
    </section>
</template>
<style lang="scss" scoped>
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
            margin: 7rem 0 3rem 0;
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
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }

        &__name{
            margin: 0 0 0 0.4rem;
        }
    }
</style>