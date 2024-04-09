<script setup>
    import WeekTab from './WeekTab.vue';
    import TodayTab from './TodayTab.vue';
</script>
<template>
    <main class="main">
        <WeekTab />
        <TodayTab />
    </main>
</template>
<style lang="scss" scoped>
    .main{
        display: grid;
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    @include responsive(90rem){
        .main{
        }
    }
</style>