<script setup>
    defineProps({
        humidity: Number
    })

</script>
<template>
    <div class="bar">
        <div class="bar__levels">
            <span class="bar__number">0</span>
            <span class="bar__number">50</span>
            <span class="bar__number">100</span>
        </div>
        <div class="bar__progress">
            <div class="bar__completed" :style="{ width: `${humidity}%` }"></div>
        </div>
        <p class="bar__percentage">%</p>
    </div>
</template>
<style lang="scss" scoped>
    .bar{
        width:100%;
        display: flex;
        flex-direction: column;
        color: map-get($map: $colors, $key: c-text-secondary);
        
        &__levels{
            display:flex;
            justify-content: space-between;
        }

        &__progress{
            width: 100%;
            height: 0.6rem;
            background-color: map-get($map: $colors, $key: c-white);
            border-radius: 1rem;
            overflow: hidden;
        }

        &__completed{
            height: 0.6rem;
            background-color: map-get($map: $colors, $key: c-yellow);
        }

        &__percentage{
            text-align: right;
        }
    }

</style>