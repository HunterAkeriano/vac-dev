<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content one">
                <div class="footer__content-logo">
                    <a href="#">
                        <img src="../assets/images/footer/logo.svg" alt="">
                        <span>VAC</span>
                    </a>
                </div>
                <div class="footer__content-item">
                    <router-link to="/terms"> Terms</router-link>
                    <router-link to="/privacy"> Privacy</router-link>
                </div>
                <div class="footer__content-link">
                    <a href="https://www.instagram.com/hunter_akeriano/"><img src="../assets/images/footer/inst.svg" alt=""></a>
                    <a href="#"><img src="../assets/images/footer/facebook.svg" alt=""></a>
                    <a href="#"><img src="../assets/images/footer/youtube.svg" alt=""></a>
                </div>
                <div class="footer__content-created">
                    <p>Created by <img src="../assets/images/footer/created.svg" alt=""></p>
                </div>
                <div class="footer__content-info">
                    <p>©Copyright, 2020. Vehicle Approval</p>
                </div>
            </div>
            <div class="footer__planshet">
                <div class="footer__planshet-logo">
                    <a href="#">
                        <img src="../assets/images/footer/logo.svg" alt="">
                        <span>VAC</span>
                    </a>
                </div>
                <div class="block">
                    <div class="footer__planshet-item">
                        <router-link to="/terms"> Terms</router-link>
                        <router-link to="/privacy"> Privacy</router-link>
                    </div>
                    <div class="footer__planshet-created">
                        <p>Created by <img src="../assets/images/footer/created.svg" alt=""></p>
                    </div>
                </div>
               <div class="info">
                <div class="footer__planshet-link">
                    <a href="https://www.instagram.com/hunter_akeriano/"><img src="../assets/images/footer/inst.svg" alt=""></a>
                    <a href="#"><img src="../assets/images/footer/facebook.svg" alt=""></a>
                    <a href="#"><img src="../assets/images/footer/youtube.svg" alt=""></a>
                </div>
                
                <div class="footer__planshet-info">
                    <p>©Copyright, 2020. Vehicle Approval</p>
                </div>
               </div>
               
            </div>
            <div class="footer__mobile">

                <div class="one">
                    <div class="footer__mobile-logo">
                        <a href="#">
                            <img src="../assets/images/footer/logo.svg" alt="">
                            <span>VAC</span>
                        </a>
                    </div>
                    <div class="footer__mobile-item">
                        <router-link to="/terms"> Terms</router-link>
                        <router-link to="/privacy"> Privacy</router-link>
                    </div>
    
                </div>
                
                <div class="two">
                    <div class="footer__mobile-link">
                        <a href="https://www.instagram.com/hunter_akeriano/"><img src="../assets/images/footer/inst.svg" alt=""></a>
                        <a href="#"><img src="../assets/images/footer/facebook.svg" alt=""></a>
                        <a href="#"><img src="../assets/images/footer/youtube.svg" alt=""></a>
                    </div>
                    <div class="footer__mobile-created">
                        <p>Created by <img src="../assets/images/footer/created.svg" alt=""></p>
                    </div>
                </div>
              


                <div class="footer__mobile-info">
                    <p>©Copyright, 2020. Vehicle Approval</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
.footer{
    margin-top: auto;
	width: 100%;
    background: #7481FF;
    &__content{
        padding: 20px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-logo{
            a{
                display: flex;
                align-items: center;
                span{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 108.5%;
                    /* or 30px */

                    letter-spacing: 0.02em;

                    /* Primary / White */

                    color: #FFFFFF;
                    margin-left: 5px;

                }
            }
           
        }
        &-item{
            a{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 14px;
                color: #FFFFFF;
                margin: 0 10px;
            }
        }
        &-link{
            a:nth-child(2){
                margin: 0 10px;
            }
        }
        &-created{
            p{
                display: flex;
                align-items: center;
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 14px;
                /* identical to box height, or 90% */


                /* Primary / White */

                color: #FFFFFF;

            }
            img{
                margin-left: 8px;
            }
        }
        &-info{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 159%;
            /* or 22px */


            /* Primary / White */

            color: #FFFFFF;

        }
    }
    &__planshet{
        display: none;
        justify-content: space-between;
        padding: 40px 0px;
        &-logo{
            a{
                display: flex;
                align-items: center;
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 28px;
                line-height: 108.5%;
                /* or 30px */

                letter-spacing: 0.02em;

                /* Primary / White */

                color: #FFFFFF;
                span{
                    margin-left: 5x;
                }

            }
        }
        .block{
            .footer__planshet-item{
                a{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 14px;
                    /* identical to box height, or 90% */

                    text-align: center;

                    /* Primary / White */

                    color: #FFFFFF;
                }
                a:nth-child(2){
                    margin-left: 20px;
                }
            }
            .footer__planshet-created{
                margin-top: 50px;
                p{
                    display: flex;
                    margin: 0;
                    align-items: center;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 14px;
                    /* identical to box height, or 90% */


                    /* Primary / White */

                    color: #FFFFFF;
                    img{
                        margin-left: 8px;
                    }
                }
            }
        }
        .info{
            .footer__planshet-link{
                a:nth-child(2){
                    margin: 0 10px;
                }
            }
            .footer__planshet-info{
                margin-top: 40px;
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 159%;
                    /* or 22px */

                    margin: 0;
                    /* Primary / White */

                    color: #FFFFFF;
                }
            }
        }

    }
    &__mobile{
        display: none;
        padding: 20px 0px;
        .one{
            display: flex;
            align-items: center;
            .footer__mobile-logo{
                a{
                    display: flex;
                    align-items: center;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20.2955px;
                    line-height: 108.5%;
                    letter-spacing: 0.02em;
                    color: #FFFFFF;
                    span{
                        margin-left: 4px;
                    }
                }
            }
            .footer__mobile-item{
                margin-left: 25px;
                a{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 14px;
                    /* identical to box height, or 90% */

                    text-align: center;

                    /* Primary / White */

                    color: #FFFFFF;
                }
                a:nth-child(2){
                    margin-left: 10px;
                }
            }
        }
        .two{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 30px 0px;
            .footer__mobile-link{
                a:nth-child(2){
                    margin: 0 10px;
                }
            }
            .footer__mobile-created{
                p{
                    display: flex;
                    align-items: center;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 14px;
                    /* identical to box height, or 90% */


                    /* Primary / White */

                    color: #FFFFFF;
                    img{
                        margin-left: 8px;
                    }

                }
            }

        }
        &-info{
            p{
                margin: 0;
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 159%;
                /* or 22px */


                /* Primary / White */

                color: #FFFFFF;
            }
        }

    }
    @media(max-width: 800px){
        &__content{
            display: none;
        }
        &__planshet{
            display: flex;
        }
    }
    @media(max-width: 520px){
        &__planshet{
            display: none;
        }
        &__mobile{
            display: block;
        }
    }
}

</style>