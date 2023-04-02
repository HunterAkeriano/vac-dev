<template>
    <section class="page">
        <div class="container">
            <div class="page__content">
                <div class="page__content-photo">
                    <img src="../assets/images/404/photo.svg" alt="">
                </div>
                <div class="page__content-text">
                    <h4>404 page</h4>
                    <p>Page not found or such pages do not exist.</p>
                    <div class="btn">
                        <router-link to="/">  <the-button :bg-color="'#7481FF'" :color-text="'white'"> Go home</the-button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonVue from '../components/ui/Button.vue';
export default{
    components: {
        'the-button': ButtonVue,
    }
}
</script>

<style lang="scss" scoped>
.page{
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
        &-photo{
            img{
                display: block;
                margin: 0 auto;
            }
        }
        &-text{
            text-align: center;
            margin-top: 20px;
            h4{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                /* or 63px */


                /* Primary / Content */

                color: #41456B;
            }
            p{
                margin: 5px 0px;
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
            }
            .btn{
                margin: 0 auto;
                margin-top: 40px;
                max-width: 165px;
            }
            @media(max-width:500px){
                h4{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 30px;
                    line-height: 140.5%;
                }
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                }
                .btn{
                    max-width: 130px;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 14px;
                }
            }
        }
    }
}
</style>