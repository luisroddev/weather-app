<script setup>
    defineProps({
        title: String,
        message: String
    })
</script>
<template>
    <div class="modal">
        <h2 class="modal__title">{{ title }}</h2>
        <p class="modal__message">{{ message }}</p>
    </div>
</template>
<style lang="scss" scoped>
    .modal{
        width: 100%;
        max-width: 30%;
        background-color: map-get($map: $colors, $key: c-white);
        border: .1875rem solid map-get($map: $colors, $key: c-background-accent);
        border-radius: .3125rem;
        padding: 4rem;
    }
</style>