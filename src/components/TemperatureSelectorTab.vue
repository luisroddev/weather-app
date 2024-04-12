<script setup>

</script>
<template>
    <section class="selector">
        <button class="selector__button selector__button--active" aria-label="Select Celsius measure">
            <span>ºC</span>
        </button>
        <button class="selector__button" aria-label="Select Fahrenheit measure">
            <span>ºF</span>
        </button>
    </section>
</template>
<style lang="scss" scoped>
    .selector{
        display: flex;
        justify-content: flex-end;

        &__button{
            padding: 1rem;
            margin: 0.5rem;
            border-radius: 50%;
            border: none;
            background-color: map-get($map: $colors, $key: c-background-terciary);
            color: map-get($map: $colors, $key: c-white);
            font-size: map-get($map: $font-sizes, $key: fs-medium);
            font-weight: bold;
            cursor: pointer;
            transition: 0.5s;

            &:hover{
                background-color: map-get($map: $colors, $key: c-background-accent);
                color: map-get($map: $colors, $key: c-white);
            }

            &--active{
                background-color: map-get($map: $colors, $key: c-white);
                color: map-get($map: $colors, $key: c-background-primary);

            }
        }

    }
    
</style>