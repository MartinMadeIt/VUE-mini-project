<template>
    <a href="#" 
        class="top"
        :disabled="position"
    >
        <i class="uil uil-angle-up"></i>
    </a>
</template>

<script>

    export default {
        name: 'GoTop',
    }
</script>

<style scoped lang="scss">
@import "../../Utilities/utilities.scss";
    .top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: $main;
        z-index: 30;
        opacity: .3;
        color: white;
        @include center;
        font-size: 24px;
        transition: all 250ms;

        &:hover {
            opacity: 1;
        }

        &:active {
            opacity: 1;
            transform: scale(.9);
        }

        
    }
</style>