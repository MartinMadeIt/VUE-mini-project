<template>
    <NavbarForm />
    <div class="form">
        <div class="indicator">
            <p 
                v-for="(element, index) in [1,2,3]"
                class="indicator__number"
                :class="{'indicator__number--active': element === current}"
                :key="index"
            >{{ element }}</p>
        </div>

        <div class="formField">

            
        </div>

        <div class="button">
            <button 
                class="button__next"
                v-if="current < 3"
                @click="handleNext">
            Next
            </button>
            <button 
                class="button__prev"
                v-if="current > 1"
                @click="handlePrev"
            >Prev</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import NavbarForm from './NavbarForm.vue';

    export default {
    name : 'FormView', 
    components: { NavbarForm },
    setup() {

        const current = ref(1)

        const handleNext = () => current.value < 3 ? current.value++ : null
        const handlePrev = () => current.value > 1 ? current.value-- : null

        return {current, handleNext, handlePrev}
    }
}
</script>

<style scoped lang="scss">
@import "../../Utilities/utilities.scss";

    .form {
        position: relative;
        width: 100vw;
        min-height: 100vh;
        padding: 80px 20px 10px 20px;
        font-family: $maven;

        .indicator {
            position: relative;
            width: clamp(200px, 50%, 300px);
            margin: auto;
            height: 80px;
            @include spaceB;

            &::before {
                position: absolute;
                content: '';
                z-index: -1;
                width: 100%;
                height: 1px;
                background-color: $orange;
                top: 50%;
                left: 0;
            }


            &__number {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: white;
                border: 1px solid $orange;
                color: $orange;
                @include center;
                transition: 250ms;

                &--active {
                    background-color: $orange;
                    color: white;
                    transform: scale(1.5);
                }

            }
        }

        .button {
            width: 100%;
            height: 40px;
            @include center;
            gap: 30px;

            &__next,
            &__prev {
                width: 120px;
                height: 40px;
                border-radius: 6px;
                transition: 250ms;
                border: none;
                cursor: pointer;
                
                &:hover {
                    opacity: 1;
                }

                &:active {
                    transform: scale(1);
                }
            }

            &__next {
                background-color: $orange;
                opacity: .6;
                color: white;
            }

            &__prev {
                border: 1px solid $orange;
                color: $orange;
            }
        }

        .formField {
            height: 600px;
        }
    }

</style>