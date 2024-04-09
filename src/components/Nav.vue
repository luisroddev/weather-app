<script setup>
    const emit = defineEmits(['changeNavState'])

    function changeNavState(){
        emit('changeNavState', true);
    }
</script>
<template>
    <nav class="nav"  v-show="isNavOpen">
        <button @click="changeNavState" class="nav__close">
            <svg class="nav__svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
        </button>
        <nav class="nav__bar">
            <input type="text" class="nav__input-text" placeholder="search location">
            <input @click="search" type="button" class="nav__input-button" value="Search">
        </nav>
        <div class="nav__list">
            <button class="nav__place">
                <span class="nav__span">London</span>
                <span class="nav__span">
                    <svg class="nav__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                    </svg>
                </span>
            </button>
            <button class="nav__place">
                <span class="nav__span">Barcelona</span>
                <span class="nav__span">
                    <svg class="nav__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                    </svg>
                </span>
            </button>
            <button class="nav__place">
                <span class="nav__span">Long Beach</span>
                <span class="nav__span">
                    <svg class="nav__svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                    </svg>
                </span>
            </button>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
    .nav{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        max-width: 26rem;
        background-color: map-get($map: $colors, $key: c-background-secondary);
        height: 100vh;
        padding: 4rem 2rem;

        &__close{
            background-color: map-get($map: $colors, $key: c-background-secondary);
            border: none;
            padding: 1rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: 0.5s;
            margin: 1rem 0;

            &:hover{
                rotate: 90deg;
            }
        }


        &__bar{
            display: flex;
            justify-content: space-between;
        }

        &__input-text{
            border: .125rem solid map-get($map: $colors, $key: c-text-primary);
            color: map-get($map: $colors, $key: c-text-primary);
            background-color: map-get($map: $colors, $key: c-transparent);
            font-size: map-get($map: $font-sizes, $key: fs-medium);
            padding: 0 1rem;
            &:active{
                outline: none;
            }
        }
    
        &__input-button{
            background-color: map-get($map: $colors, $key: c-background-accent);
            color: map-get($map: $colors, $key: c-text-primary);
            font-size: map-get($map: $font-sizes, $key: fs-medium);
            padding:1rem 0.8rem;
            border: none;
            outline: none;
            font-weight: bold;
            cursor: pointer;
            transition: 0.5s;

            &:hover{
                background-color: map-get($map: $colors, $key: c-white);
                color: map-get($map: $colors, $key: c-background-accent);
            }
        }

        &__list{
            display: flex;
            flex-direction: column;

        }

        &__place{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: map-get($map: $colors, $key: c-background-secondary);
            border: .125rem solid map-get($map: $colors, $key: c-transparent);
            color: map-get($map: $colors, $key: c-text-primary);
            outline: none;
            padding: 1.5rem 1rem 1.5rem 1rem;
            margin: 1rem 0 1rem 0;
            font-size: map-get($map: $font-sizes, $key: fs-medium);
            cursor: pointer;

            transition: all 0.5s ease;

            &:hover{
                border: .125rem solid map-get($map: $colors, $key: c-text-terciary);
            }
        }

        &__span{
            color: map-get($map: $colors, $key: c-text-primary);
        }

        &__svg{
            fill: map-get($map: $colors, $key: c-text-primary);
        }
    }

    @include responsive(60rem){
        .nav{
            max-width: 100%;
            display: inline-block;
        }
    }
</style>