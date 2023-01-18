

<script>

export default {
    name: 'NavbarComponent'
}
</script>

<template>

    <nav class="navbar">
        <img src="../assets/Photos/logo.png" alt="Logo" class="navbar__logo">

        <img class="navbar__logo" />
        <div class="navbar__options">
            <p>Some</p>
            <p>Options</p>
            <p>Available</p>
        </div>
    </nav>
    
    </template>
    


<style lang="scss">

    .navbar {
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: #fff;
        padding: 10px 30px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        &__logo {
            width: 110px;
            z-index: 10;
            margin-top: 30px;
        }


        &__options {
            font-family: "Maven Pro", sans-serif;
            width: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }
    }

</style>