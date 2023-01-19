<template>
    <div class="singleTile">
        <img 
            :src=dataObject.photo 
            :alt=dataObject.alternativePhotoText
            class="singleTile__image"
        >
        <div class="textField">
            <p class="textField__description">{{ dataObject.description }}</p>
            <p class="textField__text">{{ dataObject.text }}</p>
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
                left: TILEINFOS[props.accesor].left
            }

            return {dataObject}
        }
    }
</script>

<style scoped lang="scss">
    .singleTile {
        padding: calc(10px + 2vw) 0px;
        width: 98%;
        margin-top: 50px;
        width: clamp(300px, 95%, 700px);
        background-color: #fff;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        box-shadow: 4px 4px 20px 0px #0000003b;


        &__image {
            width: 50%;
            aspect-ratio: 1/1;
            transform: translateY(-6vw);
            z-index: 1;
        }

        .textField {
            font-family: 'Maven Pro', sans-serif;
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
    }

</style>