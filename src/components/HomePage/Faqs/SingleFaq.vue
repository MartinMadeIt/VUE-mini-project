<template>
    <div class="singleQuestion">
        <div 
            class="titleBox"
            :class="{'titleBox--active' : open}"
        >
            <p class="titleBox__title"> {{ title }} </p>
            <button 
                @click="handleOpen"
                class="titleBox__toggle"
                :class="{'toggled' : open}"
            >
                <i class="uil uil-angle-down"></i>
            </button>
        </div>
        <div 
            class="answerBox" 
            :class="{'answerBox--open' : open }"
        >
            <p 
                class="answerBox__answer"
                :class="{'answerBox__answer--open' : open}"
            >
            {{ answer }}    
            </p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default {
        name: 'SingleFaq',
        props: [
            'title',
            'answer'
        ],
        setup() {
            const open = ref(false)

            const handleOpen = () => open.value = !open.value

            return { open, handleOpen }
        }
    }
</script>

<style scoped lang="scss">
@import '../../../Utilities/utilities.scss';

    .singleQuestion {
        font-family: 'Maven Pro', sans-serif;
        font-size: calc(14px + 1vw);
        width: 100%;

        .titleBox {
            box-sizing: border-box;
            position: relative;
            overflow: hidden;

            width: 100%;
            height: 60px;
            border-bottom: 1px solid grey;
            padding: 5px 0px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            &__title {
                font-size: .8em;
            }

            &__toggle {
                border: none;
                background-color: transparent;
                font-size: 1.4em;
                cursor: pointer;
                color: grey;
                transition: all 250ms;
                transform-origin: center;

                &:hover {
                    color: $main;
                }

                &:active {
                    transform: scale(.9);
                }
            }

            .toggled {
                transform: rotate(180deg);
                color: $main;
            }

            &::before {
                content: '';
                background-color: $main;
                position: absolute;
                bottom: 0px;
                left: -100%;
                width: 100%;
                height: 2px;
                transition: 250ms ease-in-out;
            }

            &:hover::before {
                left: 0;
            }

            &--active {
                border-bottom: 2px solid $main;
                position: relative;


                &::before {
                    content: '';
                    background-color: $main;
                    position: absolute;
                    bottom: 0px;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    transition: 250ms ease-in-out;
                }
            }


        }


        .answerBox {
            overflow: hidden;
            height: 0px;
            width: 100%;
            transition: 250ms;

            &__answer {
                font-size: .7em;
                opacity: 0;

                transition: 2000ms;

                &--open {
                    opacity: 1;
                    transition-delay: 200ms;

                }
            }

            &--open {
                height: fit-content;
                padding: 40px 20px;
                background-color: #fff;
            }
        }
    }

</style>