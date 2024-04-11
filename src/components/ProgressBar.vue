<script setup>
    defineProps({
        value: Number
    })
</script>
<template>
    <div class="progress">
        <div class="progress__levels">
            <span class="progress__number">0</span>
            <span class="progress__number">50</span>
            <span class="progress__number">100</span>
        </div>
        <div class="progress__bar">
            <div class="progress__completed" :style="{ width: `${value}%` }"></div>
        </div>
        <p class="progress__percentage">%</p>
    </div>
</template>
<style lang="scss" >
    * {
        border: 1px solid red;
    }
    .progress{
        background-color: red;
        width:100%;
        display: flex;
        flex-direction: column;
        color: map-get($map: $colors, $key: c-text-secondary);
        
        &__levels{
            display:flex;
            justify-content: space-between;
        }

        &__bar{
            width: 100%;
            height: .625rem;
            background-color: map-get($map: $colors, $key: c-white);
            border-radius: 1rem;
            overflow: hidden;
        }

        &__completed{
            height: .625rem;
            background-color: map-get($map: $colors, $key: c-yellow);
        }

        &__percentage{
            text-align: right;
        }
    }

</style>