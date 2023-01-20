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

    .tileText {
        font-family: 'Maven Pro', sans-serif;
        font-size: calc(16px + 0.6vw);
        margin: 50px auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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

            &::before {
                position: absolute;
                content: '';
                bottom: 0px;
                left: 0px;
                width: 100%;
                height: 5px;
                background-color: rgb(255, 106, 0);
            }
        }
    }

</style>