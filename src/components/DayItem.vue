<script setup>
    defineProps({
        date: String,
        icon: String,
        max: Number,
        min: Number
    })
</script>
<template>
    <article class="day">
        <p class="day__date">{{ date }}</p>
        <span v-if="icon" class="day__icon material-symbols-outlined">
            {{ icon }}
        </span>
        <div class="day__degrees">
            <p class="day__maxdeg">{{ max }}ºC</p>
            <p class="day__mindeg">{{ min }}ºC</p>
        </div>
    </article>
</template>
<style lang="scss" scoped>
    .day{
        padding: 1.5rem;
        min-height: 12.75rem;
        display: flex;
        flex-direction: column;
        background: map-get($map: $colors, $key: c-background-secondary);

        &__icon{
            font-size: map-get($map: $icon-sizes, $key: i-large);
            margin: 2rem 0 2rem 0;
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
</style>