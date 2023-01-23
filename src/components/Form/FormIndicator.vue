<template>
    <div class="indicator">
        <p 
            v-for="(element, index) in steps"
            class="indicator__number"
            :class="{'indicator__number--active': element === current}"
            :key="index"
        >{{ element }}</p>
    </div>
</template>

<script>
    export default {
        name: "FormIndicator",
        props: ['current', 'steps']
    }
</script>

<style scoped lang="scss">
@import "../../Utilities/utilities.scss";

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
            background-color: $main;
            top: 50%;
            left: 0;
        }


        &__number {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: white;
            border: 1px solid $main;
            color: $main;
            @include center;
            transition: 
                transform 450ms cubic-bezier(0.89, -0.22, 0, 2),
                background-color 350ms;

            &--active {
                background-color: $main;
                color: white;
                transform: scale(1.5);
            }

        }
    }

</style>