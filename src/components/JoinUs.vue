<template>
    <div class="joinUs">
        <img src="../assets/Photos/share.png" alt="share" class="joinUs__img">
        <p class="joinUs__text">Dołącz do nas ! </p>
        <button class="joinUs__button">
            <p class="button__text">Formularz zgłoszeniowy</p>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'JoinUs'
    }
</script>

<style scoped lang="scss">

@import "../Utilities/utilities.scss";
    .joinUs {
        margin: 60px auto;
        width: clamp(250px, 70%, 600px);
        aspect-ratio: 2/1;
        background-color: #fff;
        padding: calc(10px + 1vw) calc(5px + 1vw);

        font-family: $maven;

        @include spaceB;
        flex-direction: column;


        &__img {
            display: none;
            aspect-ratio: 1;
            width: clamp(45px, 20%, 70px);
        }

        &__button {
            position: relative;
            height: 50%;
            width: 80%;
            background-color: $orange;
            color: white;
            border: none;
            cursor: pointer;
            overflow: hidden;
            transform-style: preserve-3d;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background-color: $green;
                z-index: -1;
                transition: 250ms ease-in-out;
            }

            &:hover::before {
                left: 0;
            }

        }
    }

    @media screen and (min-width: 600px) {
        .joinUs {
            flex-direction: row;
            aspect-ratio: 10/1;

            &__img {
                display: initial;
            }

            &__button {
                width: 150px;
                height: 60px;
            }
        }
    }

</style>