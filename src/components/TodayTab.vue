<script setup>
    import HumidityBar from './HumidityBar.vue'

    defineProps({
        wind: Number,
        wind_degrees: Number,
        wind_direction: String,
        humidity: Number,
        visibility: Number,
        air_pressure: Number
    })
</script>
<template>
    <article class="today">
        <h1 class="today__h1">Today's Hightlights</h1>
        <div class="today__container">
            <div class="today__item">
                <p class="today__title">Wind status</p>
                <p class="today__measure"><span class="today__measure--accent">{{  wind }}</span>mph</p>
                <p class="today__direction">
                    <span :style="{ transform: 'rotate(' + wind_degrees + 'deg)' }"
                        class="today__icon material-symbols-outlined">
                        navigation
                    </span>
                    <span>{{ wind_direction }}</span>
                </p>
            </div>
            <div class="today__item">
                <p class="today__title">Humidity</p>
                <p class="today__measure"><span class="today__measure--accent">{{ humidity }}</span>%</p>
                <HumidityBar :humidity="humidity"/>
            </div>
            <div class="today__item">
                <p class="today__title">Visibility</p>
                <p class="today__measure"><span class="today__measure--accent">{{ visibility }}</span>miles</p>
            </div>
            <div class="today__item">
                <p class="today__title">Air Pressure</p>
                <p class="today__measure"><span class="today__measure--accent">{{ air_pressure }}</span>mb</p>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
    .today{
        
        &__h1{
            margin: 0 0 2rem 0;
        }

        &__container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }

        &__item{
            display: flex;
            flex-direction: column;
            align-items: center;
            background: map-get($map: $colors, $key: c-background-secondary);
            width: 100%;
            padding: 2rem;
            text-align: center;
        }

        &__measure{
            font-size: map-get($map: $font-sizes, $key: fs-large);
            padding: 1rem 0 1rem 0;

            &--accent{
                font-size: map-get($map: $font-sizes, $key: fs-extra-large);
                font-weight: bold;
            }
        }

        &__direction{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__icon{
            background: map-get($map: $colors, $key: c-text-terciary);
            border-radius: 50%;
            padding: 0.5rem;
            margin: 0 1rem 0 0;
        }

    }


    @include responsive(55rem){
        .today{
            &__container{
                grid-template-columns: 1fr;
            }
        }
    }
</style>