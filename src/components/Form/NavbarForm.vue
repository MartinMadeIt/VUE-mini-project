
<template>

    <nav class="navbar">
        
        <p class="navbar__logo">LOGO</p>
        <RouterLink to="/">Home</RouterLink>
    
    </nav>
    
</template>



<script>

export default {
    name: 'NavbarComponent',
}
</script>
    


<style lang="scss">
@import "../../Utilities/utilities.scss";

    .navbar {
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: #fff;
        padding: 10px 30px;

        @include spaceB;
        z-index: 20;


        &__logo {
            width: 110px;
            z-index: 10;
            margin-top: 30px;
        }


        a, a:link, a:visited, a:active {
            position: relative;
            font-family: $maven;
            height: 30px;
            font-size: calc(12px + 0.4vw);
            cursor: pointer;
            overflow: hidden;
            color: rgb(43, 43, 43);
            text-decoration: none;
            
             // on hover
             @include underlinedOnHover;

        }
    }




</style>