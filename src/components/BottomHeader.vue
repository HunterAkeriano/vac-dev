<template>
    <section class="btheader">
        <div class="container">
            <h3><slot></slot></h3>
        </div>
    </section>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
    .btheader{
    width: 100%;
    background: url('../assets/images/bt-header/bt-header.png');
    background-size: cover;
    padding: 40px 0px;
    h3{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 800;
        font-size: 60px;
        line-height: 108.5%;
        /* or 65px */

        letter-spacing: 0.02em;

        /* Primary / White */

        color: #FFFFFF;
    }
    @media(max-width: 710px){
        h3{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 800;
            font-size: 35px;
            line-height: 108.5%;
        }
    }
    }
    @media(max-width: 710px){
        .btheader{
            padding: 30px 0px;
        }
       
    }
</style>
