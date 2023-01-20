<template>
    <div class="tiles">
        <SingleTile accesor=partner />
        <SingleTile accesor=employee />
        <SingleTile accesor=makro />
    </div>
</template>

<script>
    import SingleTile from './SingleTile.vue';

    export default {
        name: 'AllTiles',
        components: {
            SingleTile
        },
        setup() {

        }
    }
</script>

<style scoped lang="scss">
    .tiles {
        width: 100%;
        min-height: 800px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 100px;
    }
</style>