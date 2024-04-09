<script setup>

</script>
<template>
    <footer class="footer">
        <p>created by <a href="https://github.com/luisroddev" class="footer__link" title="Link to Luis's Github" target="_blank">Luis</a> - devChallenges.io</p>
    </footer>
</template>
<style lang="scss" scoped>
    .footer{
        text-align: center;
        color: map-get($map: $colors, $key: c-text-secondary);
        margin: 9rem 0 0 0;

        &__link{
            font-weight: bold;
            color: map-get($map: $colors, $key: c-text-secondary);
        }
    }
</style>