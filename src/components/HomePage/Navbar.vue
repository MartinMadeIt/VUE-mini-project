
<template>

    <nav class="navbar">
        <p class="navbar__logo">LOGO </p>

        <div class="options">
            <a href="#pros">Współpraca</a>
            <a href="#faqs">FAQ</a>
            <a href="#form">Formularz</a>
            <!-- <p class="options__p">Options</p> -->
            <!-- <p class="options__p">Available</p> -->
        </div>
        <button class="btn" @click="changeState">
            <i class="uil uil-list-ul"></i>
        </button>

        <div class="menu" :class="{'toggled' : active}">
            <p class="options__p" :class="{'toggledP' : active}">Some</p>
            <p class="options__p" :class="{'toggledP' : active}">Options</p>
            <p class="options__p" :class="{'toggledP' : active}">Available</p>
        </div>

    </nav>
    
</template>



<script>
import { ref } from 'vue';



export default {
    name: 'NavbarComponent',
    setup() {
        const active = ref(false)

        const changeState = () => active.value = !active.value

        return {active, changeState}
    }
}
</script>
    


<style lang="scss">
@import "../../Utilities/utilities.scss";

    .navbar {
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: #fff;
        padding: 10px 30px;

        @include spaceB;
        z-index: 20;


        &__logo {
            width: 110px;
            z-index: 10;
            margin-top: 30px;
            font-weight: 700;
            color: $main;
            font-size: 24px;
        }


        .options {
            font-family: $maven;
            width: 600px;

            display: none;

            &__p {
                position: relative;
                height: 30px;
                font-size: calc(12px + 0.4vw);
                cursor: pointer;
                overflow: hidden;

                // on hover
                @include underlinedOnHover;
            }
        }
    }

    .btn {
        width: 100px;
        height: 40px;
        border: none;

        background-color: transparent;
        color: rgba(0, 0, 0, 0.439);
        font-size: 36px;
        cursor: pointer;
        transition: 150ms;

        &:hover {
            color: black;
        }

        &:active {
            transform: scale(.9);
        }
    }

    .menu {
        width: 100%;
        height: 0px;
        background-color: #fff;

        position: absolute;
        top: 60px;
        left: 0;

        gap: 20px;
        transition: 250ms;

        .options__p {
            opacity: 0;
            transition-duration: 0ms;
            transition-delay: 0ms;
        }

        .toggledP {
            opacity: 1;
            transition-delay: 250ms;
            transition-duration: 250ms;
        }

    }

    .toggled {
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media screen and (min-width: 800px) {
        .navbar {
            .options {        
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 40px;
        }
        }


        .btn,
        .menu {
            display: none;
        }
    }


</style>