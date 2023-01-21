<template>
    <div class="tiles">
        <SingleTile accesor=partner />
        <TileText />
        <SingleTile accesor=employee />
        <SingleTile accesor=makro />
    </div>
</template>

<script>
    import SingleTile from './SingleTile.vue';
    import TileText from './TileText.vue';

    export default {
        name: 'AllTiles',
        components: {
            SingleTile,
            TileText
        },
        setup() {

        }
    }
</script>

<style scoped lang="scss">
@import "../../../Utilities/utilities.scss";
    .tiles {
        width: 100%;
        min-height: 800px;
        padding: 20px;
        @include center;
        flex-direction: column;
        gap: 100px;
    }
</style>