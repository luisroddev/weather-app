<script setup>
    import Main from './Main.vue';
    import Footer from './Footer.vue';
</script>
<template>
    <div class="container">
        <Main />
        <Footer />
    </div>
</template>
<style lang="scss" scoped>
    .container{
        width: 100%;
        padding: 5rem;
    }

    @include responsive(90rem){
        .container{
            padding: 4rem;
        }
    }
</style>