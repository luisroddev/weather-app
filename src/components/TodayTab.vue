<script setup>

</script>
<template>
    <article class="today">
        <h2 class="today__h2">Today's Hightlights</h2>
        <div class="today__container">
            <div class="today__item">
                <p class="today__title">Wind status</p>
                <p class="today__measure"><span class="today__measure--accent">7</span>mph</p>
                <p class="today__wsw">WSW</p>
            </div>
            <div class="today__item">
                <p class="today__title">Humidity</p>
                <p class="today__measure"><span class="today__measure--accent">84</span>%</p>
            </div>
            <div class="today__item">
                <p class="today__title">Visibility</p>
                <p class="today__measure"><span class="today__measure--accent">6,4</span>miles</p>
            </div>
            <div class="today__item">
                <p class="today__title">Air Pressure</p>
                <p class="today__measure"><span class="today__measure--accent">998</span>mb</p>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
    .today{
        
        &__h2{
            margin: 0 0 2rem 0;
        }

        &__container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }

        &__item{
            background: map-get($map: $colors, $key: c-background-secondary);
            padding: 2rem;
            text-align: center;
        }

        &__measure{
            font-size: map-get($map: $font-sizes, $key: fs-large);

            &--accent{
                font-size: map-get($map: $font-sizes, $key: fs-extra-large);
                font-weight: bold;
            }
        }
    }

    @include responsive(90rem){
        .today{
            &__container{
                grid-template-columns: 1fr;
            }
        }
    }
</style>