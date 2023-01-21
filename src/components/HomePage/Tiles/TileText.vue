<template>
    <div class="tileText">
        <p class="tileText__becomeMember">
            Zostań częścią rozpoznawalnej marki
        </p>
        <p class="tileText__description tileText__description--bolded">
            Ponad <span class="underlined">2000</span> sklepów 
        </p>
        <p class="tileText__description">
            w całej Polsce
        </p>
    </div>
</template>

<script>
    export default {
        name: 'TileText'
    }
</script>

<style scoped lang="scss">
@import "../../../Utilities/utilities.scss";

    .tileText {
        font-family: $maven;
        font-size: calc(16px + 0.6vw);
        margin: 50px auto;
        margin-bottom: 0px;

        @include center;
        flex-direction: column;

        text-align: center;

        &__becomeMember {
            font-size: .7em;
        }

        &__description {
            font-size: 2em;

            &--bolded {
                font-size: 1.8em;
                font-weight: 700;
            }
        }

        .underlined {
            position: relative;
            @include underlined;
        }
    }

</style>