<template>
    <div class="home">
       <section class="swiper">
        <div class="container">
            <div class="swiper__content">
                <div class="swiper__content-left">
                    <div class="content-text">
                        <h1>The easiest way to buy a car in Canada</h1>
                    </div>
                </div>
                <div class="swiper__content-right">
                    <div class="swiper-container swiper-one">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="@/assets/images/home/swiper/Nissan.png" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="@/assets/images/home/swiper/Ford1.png" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="@/assets/images/home/swiper/Ram.png" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="@/assets/images/home/swiper/cupe.png" alt="">
                            </div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
            <div class="content-btn">
                <router-link to="/quiz"><the-button :bg-color="'white'">{{activeText}}</the-button></router-link>
                    </div>
        </div>
       </section>
       <section class="cars">
        <div class="abs-car left-car">
            <img src="../assets/images/cars/Honda.png" alt="">
        </div>
        <div class="container">
            <div class="cars__content">
                <h2 class="cars__content-title">How does it work?</h2>
                <h3 class="cars__content-subtitle">From your Phone to your Home</h3>
                <p>We make it easy for you to buy your dream car from your phone without ever having to step into a dealership!
                    We deliver your vehicle to your home for you to test drive before you sign anything.</p>
            </div>
        </div>
        <div class="abs-car right-car">
            <img src="../assets/images/cars/Lexus.png" alt="">
        </div>
       </section>
       <section class="steps">
        <div class="container">
            <div class="title">
                <h3>Your perfect car in <span></span>
                    5 easy steps</h3>
            </div>
            <div class="steps__content">
                <div class="steps__content-left">
                    <div class="step">
                        <div class="number">
                            <span>1</span>
                        </div>
                        <div class="text">
                            <h5>First Contact</h5>
                            <p>Tell us what your dream vehicle is.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="number">
                            <span>2</span>
                        </div>
                        <div class="text">
                            <h5>Vehicle Selection</h5>
                            <p>One of our Qualified Agents sends you custom
                                pictures and videos of the car you are interested in.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="number">
                            <span>3</span>
                        </div>
                        <div class="text">
                            <h5>Secure Financing</h5>
                            <p>You work with a dedicated Qualified Agent to
                                secure financing on your terms.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="number">
                            <span>4</span>
                        </div>
                        <div class="text">
                            <h5>Vehicle Delivery</h5>
                            <p>We deliver your car to your home or office for
                                you to test drive.</p>
                        </div>
                    </div>
                     <div class="step">
                        <div class="number">
                            <span>5</span>
                        </div>
                        <div class="text">
                            <h5>Getting Vehicle</h5>
                            <p>If you love the vehicle, you sign the paperwork
                                and keep the car.</p>
                        </div>
                    </div>
                </div>
                <div class="steps__content-right">
                    <img src="@/assets/images/home/step/phone1.png" alt="">
                    <img src="@/assets/images/home/step/phone-2.png" alt="">
                </div>
            </div>
        </div>
       </section>
       <section class="ours">
        <div class="container">
            <h3 class="ours-title">Advantages of working with us</h3>
            <div class="ours__content">
                <div class="item-one">
                    <div class="img">
                        <img src="../assets/images/home/item.svg" alt="">
                    </div>
                    <div class="text">
                        <img src="../assets/images/home/ours/Union.svg" alt="">
                        <h5>Vehicle Delivery</h5>
                        <p>We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. 
                            There is never any obligation to buy beforehand.</p>
                    </div>
                </div>
                <div class="item-one reverse">
                    <div class="img">
                        <img src="../assets/images/home/item.svg" alt="">
                    </div>
                    <div class="text">
                        <img src="../assets/images/home/ours/Finance.svg" alt="">
                        <h5>Auto Financing</h5>
                        <p>We partner with the largest lenders in Canada to
                             offer the strongest financing options in the industry—including rates as low as 4%</p>
                    </div>
                </div>

                <!-- позиционная хуйня -->
                <div class="item-poistion">
                    <div class="item">
                        <div class="item-one">
                            <img src="../assets/images/home/revers-item.svg" alt="">
                        </div>
                        <div class="item-text">
                            <img src="../assets/images/home/ours/Finance.svg" alt="">
                            <h5>Auto Financing</h5>
                            <p>We partner with the largest lenders in Canada to
                                 offer the strongest financing options in the industry—including rates <span></span> as low as 4%</p>
                        </div>
                    </div>
                </div>


                <div class="item-one">
                    <div class="img">
                        <img src="../assets/images/home/item.svg" alt="">
                    </div>
                    <div class="text">
                        <img src="../assets/images/home/ours/car.svg" alt="">
                        <h5>Huge Inventory</h5>
                        <p>We have access to thousands of high-quality 
                            vehicles and offer them to you at wholesale prices. Your dream car is waiting for you</p>
                    </div>
                </div>
            </div>
            <div class="ours__content-none">
                <div class="item">
                    <img src="../assets/images/home/ours/Union.svg" alt="">
                    <h5>Vehicle Delivery</h5>
                    <p>We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. 
                        There is never any obligation to buy beforehand.</p>
                </div>
                <div class="item">
                    <img src="../assets/images/home/ours/Finance.svg" alt="">
                    <h5>Auto Financing</h5>
                    <p>We partner with the largest lenders in Canada to
                         offer the strongest financing options in the industry—including rates as low as 4%</p>
                </div>
                <div class="item">
                    <img src="../assets/images/home/ours/car.svg" alt="">
                    <h5>Huge Inventory</h5>
                    <p>We have access to thousands of high-quality 
                        vehicles and offer them to you at wholesale prices. Your dream car is waiting for you</p>
                </div>
            </div>
        </div>
       </section>
       <section class="catalog">
        <div class="container">
            <div class="catalog__content">
                <div class="catalog__content-left">
                    <img src="../assets/images/home/catalog/corola.png" alt="">
                    <img src="../assets/images/home/catalog/honda.png" alt="">
                </div>
                <div class="catalog__content-right">
                    <h5>Сhoose your dream vehicle in our catalog</h5>
                    <div class="text">

                   
                    <p>In our catalogue there are many models of vehicles. Choose your car to your liking.</p>
                    <div class="btn">
                        <router-link to="/inventory">    <the-button :bg-color="'#7481FF'" :color-text="'#FFFFFF'">Inventory</the-button></router-link> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
       <section class="happy">
        <div class="container">
            <div class="happy__content">
                <div class="happy__content-left">
                    <h3>Happy customers</h3>
                    <p>Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes. </p>
                    <div class="info">
                        <h5>What are you waiting? Get started right now!</h5>
                        <div class="btn">
                            <router-link to="/quiz"> <the-button :bg-color="'#7481FF'" :color-text="'#FFFFFF'">Request a Car</the-button></router-link> 
                        </div>
                    </div>
                </div>
                <div class="happy__content-right">
                    <div class="item">
                        <h3>7,988+</h3>
                        <p>Sold Cars</p>
                    </div>
                    <div class="item">
                        <h3>16,974+</h3>
                        <p>Vehicles To Choose From</p>
                    </div>
                    <div class="item">
                        <h3>123</h3>
                        <p>Experts Across Canada</p>
                    </div>
                </div>
                <div class="happy__content-none">
                    <div class="info">
                        <h5>What are you waiting? <span></span> Get started right now!</h5>
                        <div class="btn">
                            <router-link to="/quiz"><the-button :bg-color="'#7481FF'" :color-text="'#FFFFFF'">Request a Car</the-button></router-link>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
       <the-reviews></the-reviews>
       <the-calculator></the-calculator>
       <news-swiper></news-swiper>
    </div>
</template>

<script>
import NewsSwiper from '../components/News-Swiper.vue';

// свайпер
import Swiper, {Navigation, Pagination}  from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// подключение отзывов
import Reviews from '../components/Reviews.vue';
// калькулятор
import Calculator from '../components/Calculator.vue';

// кнопки
import Button from '../components/ui/Button.vue';
export default{
    components: {
        'the-button': Button,
        'the-reviews': Reviews,
        'the-calculator': Calculator,
        'news-swiper': NewsSwiper
    },  
    data(){
        
        return{
             activeIndex: 0,
            swiper: null,
        }
    },
     computed: {
    activeText() {
      switch (this.activeIndex) {
        case 0:
          return 'Request a SUV';
        case 1:
          return 'Request a Car';
        case 2:
          return 'Request a TRUCK';
        case 3:
            return 'Request a VAN';  
        default:
          return '';
         }
     },
    },
    mounted() {
     this.swiper = new Swiper('.swiper-one', {
    slidesPerView: 1,
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    on: {
        slideChange: () => {
          this.activeIndex = this.swiper.activeIndex % 4;
        },
      },
    });
    },
}
</script>

<style lang="scss" scoped>

.swiper{
    background: url('@/assets/images/home/home-bg.jpg') 50%;
    background-size: cover;
    padding: 120px 0px 150px;
    overflow: hidden;
    &__content{
        display: flex;
        justify-content: space-between;
       
        &-left{
            .content-text{
                max-width: 534px;
                margin-bottom: 40px;
                h1{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 800;
                    font-size: 60px;
                    line-height: 108.5%;
                    letter-spacing: 0.02em;
                    color: #FFFFFF;
                }
            }

        }
        &-right{
            width: 55%;
            margin-top: 40px;
            overflow: hidden;
            position: relative;
            .swiper-container{
                text-align: center;
                .swiper-wrapper{
                    align-items: center;
                    img{
                        display: block;
                        margin: 0 auto;
                        max-width: 500px;
                        width: 100%;
                        
                    }
                }
                .swiper-button-prev,
                .swiper-button-next{
                    width: 53px;
                    height: 53px;
                    border-radius: 50%;
                    background: #fff;
                    opacity: .5;
                    transition: all .3s;
                }
                .swiper-button-prev:hover,
                .swiper-button-next:hover{
                    opacity: 1;
                }
                .swiper-button-next:after,
                .swiper-button-prev::after{
                    font-size: 22px;
                }
                .swiper-button-next:after{
                    transform: translateX(10%);
                }
                .swiper-button-prev::after{
                    transform: translateX(-15%);
                }
            }
        }
    }
    .content-btn{
        max-width: 200px;
    }
}
@media(max-width:1190px){
    .swiper__content-right{
        .swiper-container{
            .swiper-wrapper{
                img{
                    width: 70%;
                }
            }
        }
    }
}
@media(max-width:1100px){
    .swiper{
        .swiper__content{
            flex-direction: column;
            align-items: center;
            &-left{
                width: 100%;
                .content-text{
                    max-width: 100%;
                    text-align: center;
                }
            }
            &-right{
                width: 100%;
                .swiper-container{
                    .swiper-wrapper{
                        img{
                            width: 100%;
                            max-width: 700px;
                        }
                    }
                }
            }
        }
        .content-btn{
            margin: 0 auto;
            margin-top: 70px;
        }
    }
    
}
@media(max-width: 870px){
    .swiper{
        padding-top: 70px;
        padding-bottom: 140px;
        .swiper__content-right{
            .swiper-container{
                .swiper-wrapper{
                    img{
                        width: 70%;
                    }
                }
            }
        }
    }
  
}
@media(max-width: 621px){
    .swiper{
        .swiper__content{
            .swiper__content-left{
                .content-text{
                    h1{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 800;
                        font-size: 35px;
                        line-height: 108.5%;
                    }
                
                }
            }
            .swiper__content-right{
                .swiper-container{
                    .swiper-wrapper{
                        img{
                            width: 80%;
                        }
                    }
                    .swiper-button-next:after,
                    .swiper-button-prev:after{
                        font-size: 15px;
                    }
                    .swiper-button-next,
                    .swiper-button-prev{
                        width: 35px;
                        height: 35px;
                    }
                }
            }
        }
    }
  
}
.cars{
    overflow: hidden;
   margin-top: -40px;
   position: relative;
   padding-bottom: 40px;
   z-index: 10;
    &__content{
        background: #FFFFFF;
        max-width: 606px;
        margin: 0 auto;
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 60px;
        position: relative;
        z-index: 10;
        h2{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            text-align: center;
            color: #41456B;
        }
        h3{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 140%;
            text-align: center;
            color: #7481FF;
        }
        p{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            text-align: center;
            letter-spacing: 0.02em;
            color: #606276;
        }
    }
    @media(max-width:1247px){
        &__content{
            padding: 40px;
            h2{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
            }
            h3{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 140%;
            }
            p{
                font-family: 'Gilroy';
                font-weight: 400;
                font-size: 16px;
                line-height: 29px;
                color: #606276;
            }
        }
        
    }
    @media(max-width: 700px){
        &__content{
            padding: 20px;
            max-width: 320px;
            h2{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 140.5%;
            }
            h3{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 140%;
            }
            p{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
            }
        }
    }
    }


    @media(max-width:1247px){
        .cars{
            padding-bottom: 210px;
        }
    }
    @media(max-width:700px){
        .cars{
            padding-bottom: 280px;
        }
    }
    .abs-car{
        min-width: 259px;
        max-width: 600px;
        position: absolute;
        z-index: 0;
        img{
            width: 83%;
        }
    }
    @media(max-width: 700px){
        .abs-car{
            max-width: 380px;
        }
    }
    .left-car{
        left: -90px;
        bottom: 0;
    }
    @media(max-width: 1247px){
        .left-car{
            left: -110px
        }
       
    }
    .right-car{
        right: -122px;
        top: 50%;
        transform: translateY(-50%);
        text-align: right;
    }
    @media(max-width: 1247px){
        .right-car{
            top: 75%;
            right: -200px;
            transform: translateY(-75%);
        }
    }
    @media(max-width: 900px){
        .right-car{
            right: -250px;
        }
    }
    @media(max-width: 700px){
        .right-car{
            right: -150px;
        }
    }
   
.steps{
    margin-top: 200px;
    overflow: hidden;
    .title{
        h3{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;          
            color: #41456B;
            span{
                display: block;
            }
        }
    }
    @media(max-width: 1100px){
        .title{
            h3{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;          
                color: #41456B;
                span{
                    display: inline;
                }
            }
        }
    }
    @media(max-width: 700px){
        .title{
            h3{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 140.5%;
                span{
                    display: inline;
                }
            }
        }
    }
    &__content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 50px;
        &-left{
            
            .step{
                max-width: 510px;
                display: flex;
                margin-top: 40px;
                align-items: center;
                .number{
                    background: url('@/assets/images/home/step/step-bg.svg') no-repeat;
                    max-width: 75px;
                    width: 100%;
                    height: 67px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 10px;
                    span{
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 35px;
                        letter-spacing: .02em;
                        color: #41456b;
                    }
                }
                .text{
                    margin-left: 20px;
                    h5{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 25px;
                        color: #41456B;
                    }
                    p{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        letter-spacing: 0.02em;
                        color: #606276;
                        margin: 0;
                    }
                }
            }
        }
        &-right{
            display: flex;
            img{
                width: 50%;
                filter: drop-shadow(0 20px 25px rgba(0,0,0,.1));
            }
            img:nth-child(2){
                rotate: -15deg;
            }
        }
        @media(max-width:1100px){
            &-right{
                flex-direction: column;
                margin-left: 80px;
                img{
                    width: 70%;
                    rotate: 15deg;
                }
                img:nth-child(2){
                    width: 70%;
                    rotate: 15deg;
                    margin-top: -80px;
                }
            }
        }
        @media(max-width:700px){
            &-right{
                flex-direction: row;
                margin-left: 0;
                margin-top: 30px;
                margin-right: 50px;
                max-width: 700px;
                img:nth-child(1){
                    width: 50%;
                    rotate: 0deg;
                }
                img:nth-child(2){
                    rotate: -15deg;
                    margin-top: 0;
                    max-width: 100%;
                    width: 50%;
                }
            }
        }
    }
    @media(max-width: 700px){
        &__content{
            flex-direction: column;
            &-left{
                .step{
                    max-width: 100%;
                    width: 100%;
                }
            }
        }
    }
}
@media(max-width: 700px){
    .steps{
        margin-top: 80px;
    }
   
}

.ours{
    margin-top: 200px;
    pointer-events: none;
    &-title{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
    }
    @media(max-width: 680px){
        &-title{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 140.5%;
            /* or 42px */

            text-align: center;
        }
    }
    &__content{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        position: relative;

        .item-poistion{
            position: absolute;
            left: 50%;
            max-width: 480px;
            top: -10px;
            margin-left: -240px;
            .item{
                position: relative;
                .item-one{
                    img{
                        
                        filter: drop-shadow(0 20px 25px rgba(0,0,0,.1));
                    }
                    }
                .item-text{
                    position: absolute;
                    left: 50%;
                    top: 24px;
                    max-width: 204px;
                    margin-left: -102px;
                    text-align: center;
                    img{
                        margin: 0 auto;
                    }
                    h5{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 25px;
                        color: #41456B;
                        margin:  5px 0px;
                        
                    }
                    p{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        color: #606276;
                        span{
                            display: block;
                        }
                    }
                }
            }
        }
        .item-one{
            position: relative;
            max-width: 480px;
            .img{
               
                img{
                    filter: drop-shadow(0 20px 25px rgba(0,0,0,.1));
                }
            }
            .text{
                position: absolute;
                width: 320px;
                left: 50%;
                margin-left: -160px;
                top: 180px;
                text-align: center;
                img{
                    display: block;
                    margin: 0 auto;
                }
                h5{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    color: #41456B;
                    margin:  5px 0px;
                }
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    color: #606276;
                }
            }
            @media(max-width:1170px){
                .text{
                    top: 150px;
                }
            }
        }
        .reverse{
            display: none;
        } 
        @media(max-width:1170px){
            .item-poistion{
                display: none;
            }
            .reverse{
                display: block;
            }
            .item-one{
                margin: 20px 0px;
            }
        }
    }
    @media(max-width:1170px){
        &__content{
            flex-direction: column;
            align-items: center;
        }
        
    }
    &__content-none{
        display: none;
    }
    @media(max-width: 680px){
        &__content{
            display: none;
        }
        &__content-none{
            display: block;
            .item:nth-child(1){
                margin-top: 40px;
            }
            .item{
                text-align: center;
                margin: 30px 0px;
                img{
                    margin: 0 auto;
                }
                h5{
                    margin: 5px 0px;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 25px;
                    color: #41456B;
                }
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    color: #606276;
                }
            }
        }
    }
}
@media(max-width: 1170px){
    .ours{
        margin-top: 100px;
    }
}
@media(max-width: 680px){
    .ours{
        margin-top: 30px;
    }
}


.catalog{
    margin-top: 200px;
    overflow: hidden;
    &__content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-left{
            max-width: 600px;
            position: relative;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding-bottom: 20px;
            img:nth-child(1){
                width: 75%;
            }
            img:nth-child(2){
                width: 75%;
                position: absolute;
                left: 0;
                top: 35px;
            }
        }
        &-right{
            max-width: 500px;
            h5{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
            }
            p{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;
            }
            .btn{
                max-width: 190px;
                margin-top: 40px;
            }
        }
    }
    @media(max-width: 1170px){
        &__content{
            flex-direction: column-reverse;
            &-right{
               
                display: flex;
                justify-content: space-between;
                max-width: 100%;
                width: 80%;
                h5{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 45px;
                    line-height: 140.5%;
                    max-width: 300px;
                }
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    max-width: 225px;
                }
                .btn{
                    max-width: 190px;
                }
            }
            &-left{
                margin-top: 60px;
            }
        }
    }
    @media(max-width: 700px){
        &__content{
            &-right{
                flex-direction: column;
                width: 100%;
                h5{
                    max-width: 100%;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 30px;
                    line-height: 140.5%;
                }
                p{
                    max-width: 100%;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                }
                .btn{
                    max-width: 100%;
                }
                .text{
                    width: 100%;
                    max-width: 100%;
                }
            }
        }
    }
}
@media(max-width: 1170px){
    .catalog{
        margin-top: 160px;
        padding-bottom: 60px;
    }
}
@media(max-width: 700px){
    .catalog{
        margin-top: 80px;
    }
    
}

.happy{
    margin-top: 140px;
    &__content{
        display: flex;
        justify-content: space-between;
        &-left{
            width: 48%;
            h3{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 45px;
                line-height: 140.5%;
                color: #41456B;
            }
            p{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276; 
            }
            .info{
                margin-top: 40px;
                max-width: 320px;
                h5{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 140%;
                    letter-spacing: 0.02em;
                    color: #41456B;
                }
                .btn{
                    margin-top: 40px;
                    max-width: 200px;
                }
            }
        }
        &-right{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 600px;
            .item{
                padding: 25px 35px;
                background: white;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                max-width: 280px;
                width: 100%;
                h3{
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
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    /* identical to box height, or 29px */

                    letter-spacing: 0.02em;

                    /* Secondary / Text */

                    color: #606276;
                }
            }
            .item:nth-child(3){
                margin-top: 40px;
            }
        }
        &-none{
            display: none;
        }
    }
    @media(max-width: 1170px){
        &__content{
            flex-direction: column;
            &-left{
                width: 100%;
                max-width: 100%;
                h3{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 45px;
                    line-height: 140.5%;
                }
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                }
                .info{
                    display: none;
                }
            }
            &-right{
                width: 100%;
                max-width: 100%;
                margin-top: 40px;
                .item:nth-child(3){
                    margin: 0;
                }
            }
            &-none{
                display: block;
                .info{
                    margin-top: 40px;
                    max-width: 320px;
                    h5{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 140%;
                        letter-spacing: 0.02em;
                        color: #41456B;
                    }
                    .btn{
                        margin-top: 40px;
                        max-width: 200px;
                    }
                }
            }

        }
    }
    @media(max-width: 900px){
        &__content{
            &-right{
                max-width: 600px;
                .item:nth-child(3){
                    margin-top: 40px;
                }
            }
        }
    }
    @media(max-width: 600px){
        &__content{
            &-left{
                h3{
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
                    /* or 29px */

                    letter-spacing: 0.02em;
                }
            }
            &-right{
                flex-wrap: nowrap;
                flex-direction: column;
                margin-top: 20px;
               
                .item:nth-child(3){
                    margin: 0;
                }
                .item:nth-child(2){
                    margin: 10px 0px;
                }
                .item{
                    width: 100%;
                    max-width: 100%;
                    padding: 20px 30px;
                    h3{
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
                }
            }
            &-none{
                .info{
                    max-width: 100%;
                    h5{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 140%;
                        span{
                            display: block;
                        }
                    }
                    .btn{
                        max-width: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
}
@media(max-width: 600px){
    .happy{
        margin-top: 40px;
    }
}





</style>