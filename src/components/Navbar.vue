
<template>

    <nav class="navbar">
        <img src="../assets/Photos/logo.png" alt="Logo" class="navbar__logo">

        <img class="navbar__logo" />
        <div class="options">
            <p class="options__p">Some</p>
            <p class="options__p">Options</p>
            <p class="options__p">Available</p>
        </div>
        <button class="btn" @click="changeState">
            <i class="uil uil-list-ul"></i>
        </button>

        <div class="menu" :class="{'toggled' : active}">
            <p class="options__p">Some</p>
            <p class="options__p">Options</p>
            <p class="options__p">Available</p>
        </div>
        <!-- <div class='indicator' :class="{'active' : active}"/> -->
    </nav>
    
</template>



<script>
import { watch } from 'vue';
import { ref } from 'vue';



export default {
    name: 'NavbarComponent',
    setup() {
        const active = ref(false)

        const changeState = () => active.value = !active.value

        watch(active, () => console.log(active.value))

        return {active, changeState}
    }
}
</script>
    


<style lang="scss">

    .navbar {
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: #fff;
        padding: 10px 30px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 20;


        &__logo {
            width: 110px;
            z-index: 10;
            margin-top: 30px;
        }


        .options {
            font-family: "Maven Pro", sans-serif;
            width: 600px;

            display: none;

            &__p {
                position: relative;
                height: 30px;
                font-size: calc(12px + 0.4vw);
                cursor: pointer;
                overflow: hidden;

                &::before {
                    position: absolute;
                    content: '';
                    left: -100%;
                    bottom: 0;
                    width: 100%;
                    background-color: rgb(255, 106, 0);
                    height: 3px;
                    transition: 250ms;
                }

                &:hover::before {
                    left: 0;
                }
            }
        }
    }

    .btn {
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 12px;
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
        height: 150px;
        background-color: #fff;

        position: absolute;
        top: 60px;
        left: 0;

        gap: 20px;

        display: none;
    }

    .toggled {
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