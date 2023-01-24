<template>
  <section class="container__header">
    <div class="header"></div>
    <p class="header__navigate">Strona główna / Franczyza</p>
    <p class="header__description">Franczyza</p>
  </section>
</template>

<script>

export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../Utilities/utilities.scss";

  .container__header {
    width: 100vw;
    font-family: 'Maven Pro', sans-serif;
    height: clamp(250px, 20vw, 350px);

    color: white;
    background-image: url("../../assets/Photos/header2.avif");

    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;

    font-size: calc(16px + 1.2vw);
    position: relative;

    @include center;
    flex-direction: column;
    

    &:before {
      background-color: rgba(0, 0, 157, 0.149);
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .header {
        height: 30%;
        flex-direction: column;


        &__description {
            font-weight: 700;
            font-size: 2em;
            z-index: 3;
        }

        &__navigate {
            font-size: .7em;
            color: rgb(255, 255, 255);
            text-shadow: 0 0 3px rgb(0, 0, 0);
            z-index: 3;

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
