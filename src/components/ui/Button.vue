<template>
 
        <button class="button-page" 
        :style="{ backgroundColor: bgColor, border: border, color: colorText }">
        <slot></slot>
    </button>
</template>

<script>
export default{
    props: {
    bgColor: {
      type: String,
      default: 'white'
    },
    border: {
      type: String,
      default: 'none'
    },
    colorText:{
        type: String,
        default: '#7481FF'
    }
  },
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
    .button-page{
        display: block;
        width: 100%;
        padding: 15px;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 14px;
        /* or 90% */
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        border-radius: 2px;
    }
</style>