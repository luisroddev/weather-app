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
        padding: 3rem 7rem 3rem 7rem;
    }

    @include responsive(90rem){
        .container{
            padding: 2rem;
        }
    }
</style>