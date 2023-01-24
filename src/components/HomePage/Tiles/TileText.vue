<template>
    <div class="tileText">
        <p class="tileText__becomeMember">
            Poznaj bliej naszą ofertę i bądź jak
        </p>
        <p class="tileText__description tileText__description--bolded">
            Ponad <span class="underlined">3.14</span> zadowolonych 
        </p>
        <p class="tileText__description">
            klientów z całego świata
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
            font-size: 1.6em;

            &--bolded {
                font-size: 2em;
                font-weight: 700;
            }
        }

        .underlined {
            position: relative;
            @include underlined;
        }
    }

</style>