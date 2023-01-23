<template>
    <div class="singleTile" :class="{'left' : !dataObject.left}">
        <img 
            :src=dataObject.photo 
            :alt=dataObject.alternativePhotoText
            class="singleTile__image"
        >
        <div class="textField">
            <p class="textField__description">{{ dataObject.description }}</p>
            <p class="textField__text">{{ dataObject.text }}</p>
        </div>

        <div 
            class="singleTile__icon" 
            :class="{'left-icon' : !dataObject.left}"
            v-if="!dataObject.makro">
            <img :src=dataObject.icon :alt=dataObject.alternativeIconText >
        </div>
    </div>
</template>

<script>
    import { TILEINFOS } from '@/Utilities/mocks';

    export default {
        name: 'SingleTile',
        props: ['accesor'],
        setup(props) {

            const dataObject = {
                photo: TILEINFOS[props.accesor].photo,
                alternativePhotoText : TILEINFOS[props.accesor].alternativePhotoText,
                alternativeIconText : TILEINFOS[props.accesor].alternativeIconText,
                icon : TILEINFOS[props.accesor].icon,
                description : TILEINFOS[props.accesor].description,
                text: TILEINFOS[props.accesor].text,
                makro: TILEINFOS[props.accesor].makro,
                left: TILEINFOS[props.accesor].left
            }

            return {dataObject}
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../Utilities/utilities.scss";
    .singleTile {
        padding: calc(10px + 2vw) 0px;
        margin-top: 50px;
        width: clamp(300px, 95%, 700px);
        background-color: #fff;

        @include spaceB;
        flex-direction: column;

        gap: 30px;
        box-shadow: 4px 4px 20px 0px #0000003b;


        &__image {
            width: 50%;
            aspect-ratio: 1/1;
            transform: translateY(-10vw);
            z-index: 1;
            box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.181);
        }

        .textField {
            font-family: $maven;
            font-size: calc(14px + 0.5vw);
            text-align: center;
            width: clamp(250px, 60%, 500px);

            &__description {
                font-size: 1.3em;
                font-weight: 500;
            }

            &__text {
                margin-top: 15px;
                font-size: .9em;
            }
        }

        &__icon {
            box-sizing: border-box;
            aspect-ratio: 1;
            background-color: $main;

            display: none;

            img {
                width: 100%;
                aspect-ratio: 1;
            }
        }
    }

    @media screen and (min-width: 900px) {

        .singleTile {
        position: relative;
        padding: calc(10px + 2vw) 0px;
        width: clamp(700px, 98%, 1000px);
        margin-top: 150px;
        background-color: transparent;

        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0px;
        box-shadow: none;


        &__image {
            width: clamp(300px, 40%, 400px);
            aspect-ratio: 1;
            transform: none;
            z-index: 1;
            box-shadow: none;
        }

        .textField {
            font-family: $maven;
            font-size: calc(14px + 0.5vw);
            text-align: start;
            width: clamp(300px, 40%, 400px);
            aspect-ratio: 1;
            background-color: #fff;
            padding: 30px;

            @include center;
            flex-direction: column;
            align-items: flex-start;

            transform: translateY(50px);

            &__description {
                font-size: 1.2em;
            }

            &__text {
                font-size: .7em;
            }
        }

        &__icon {
            position: absolute;
            top: 0;
            right: 35%;
            box-sizing: border-box;
            aspect-ratio: 1;
            width: 100px;
            background-color: $main;
            padding: clamp(20px, 2vw, 40px);

            display: flex;
            justify-content: center;
            align-items: center;

            transform: translateY(30px);

            img {
                width: 100%;
                aspect-ratio: 1;
            }
        }

        .left-icon {
            left: 15%;
        }
    }

    .left {
        flex-direction: row-reverse;
    }


    }

</style>