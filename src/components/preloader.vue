<template>
    <div class="preloader" v-if="!loading">
      <div class="preloader__content">
        <img src="@/assets/images/preloader/preloader.svg" alt="">
        <p class="section-text">Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        loading: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .preloader {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            text-align: center;
            margin: 0;
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            /* identical to box height, or 29px */

            text-align: center;
            letter-spacing: 0.02em;

            /* Secondary / Text */

            color: #606276;
            margin-top: 20px;
        }
    }
  }

  </style>
  