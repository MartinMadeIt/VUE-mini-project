<template>
  <div class="container__header">
    <div class="header"></div>
    <p class="header__navigate">Strona główna / Franczyza</p>
    <p class="header__description">Franczyza</p>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .container__header {
    width: 100vw;
    height: clamp(250px, 20vw, 350px);
    font-family: 'Maven Pro', sans-serif;
    height: clamp(250px, 20vw, 350px);

    color: white;
    background-image: url("../assets/Photos/header.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .header {
        height: 30%;
        flex-direction: column;

        &__description {
            font-weight: 700;
            font-size: 2rem;
        }

        &__navigate {
            font-size: 1rem;
            color: rgb(255, 255, 255);
            text-shadow: 0 0 3px rgb(0, 0, 0);
        }
    }
  }


  @media screen and (max-width: 600px) {
    .container {
      
      .header {
        
        &__navigate {
          font-size: .6rem;
        }

        &__description {
          font-size: 1.4rem;
        }

      }
    }
  }

</style>
