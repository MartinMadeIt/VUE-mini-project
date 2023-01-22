<template>

    <div class="button">
        <button 
            class="button__next"
            v-if="current < 3"
            @click="nextStep">
        Next
        </button>
        <button 
            class="button__prev"
            v-if="current > 1"
            @click="prevStep"
        >Prev</button>
    </div>
</template>

<script>

    export default {
        name: "ControlButtonsForm", 
        props : ['current'],
        setup(props, {emit}) {

            const nextStep = () => emit('next-step');
            const prevStep = () => emit('prev-step');

            return {nextStep, prevStep}
        }
    }
</script>

<style scoped lang="scss">
@import "../../Utilities/utilities.scss";

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

</style>