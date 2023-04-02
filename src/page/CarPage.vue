<template>
   <div class="carpage">
    <section class="title">
        <div class="container">
            <h2>{{cars[$route.params.id].name}}</h2>
            <p>Watching now 8 people</p>
        </div>
        
    </section>
    <div class="info">
        <div class="container">
            <div class="info__content">
                <div class="info__content-left">
                    <div class="swiper-container one-content">
                        <div  class="swiper-wrapper">
                      
                                <div v-for="(photo, index) in cars[$route.params.id].photos" :key="index" class="swiper-slide" >
                                    <img v-if="photo1" :src="photo.img"  alt="">
                                    <img v-if="photo2" :src="photo.img2"  alt="">
                               
                                </div>
                            
                        </div>
                        <div class="button">
                            <div class="block">
                                <button class="one" :class="{'is-active': active === 1}" @click="setActive(1)">Exterior</button>
                                <button class="two" :class="{'is-active': active === 2}" @click="setActive(2)">Interior</button>
                            </div>
                            <img src="../assets/images/inventory/Share.svg" alt="">
                            
                        </div>
                        
                    </div>
                    <div class="swiper-container two-content">
                        <div  class="swiper-wrapper">
                            <div  v-for="(photo, index) in cars[$route.params.id].photos" :key="index" class="swiper-slide" >
                                <img v-if="photo1" :src="photo.img"  alt="">
                                <img v-if="photo2" :src="photo.img2"  alt="">
                            </div>
                        </div>
                        
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="btn">
                        <router-link :to="{ path: `/quiz/${this.$route.params.id}` }"> <the-button class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">apply for this vehicle</the-button></router-link>  
                    </div>
                </div>
                <div class="info__content-right">
                    <div class="price">
                        <h4>Price</h4>
                        <p>{{cars[$route.params.id].price}}</p>
                    </div>
                    <div class="info-1">
                        <div class="block">
                            <h4>Body</h4>
                            <p>{{cars[$route.params.id].type}}</p>
                        </div>
                        <div class="block">
                            <h4>Year</h4>
                            <p>{{cars[$route.params.id].years}}</p>
                        </div>
                    </div>
                    <div class="info-1">
                        <div class="block">
                            <h4>Transmission</h4>
                            <p>{{cars[$route.params.id].trans}}</p>
                        </div>
                        <div class="block">
                            <h4>Kilometres </h4>
                            <p>{{cars[$route.params.id].km}}</p>
                        </div>
                    </div>
                    <div class="broder"></div>
                    <div class="info">
                        <h3>Detail</h3>
                        <div class="flex">
                            <p>Rear wheel drive</p>
                            <p>{{ cars[$route.params.id].rpm }} rpm</p>
                            <p>{{ cars[$route.params.id].cylyndres }} cylinders</p>
                            <p>0-100 in 2.7 s.</p>
                            <p> {{ cars[$route.params.id].per }} l. per 100 km.</p>
                            <p>{{ cars[$route.params.id].steering }} steering</p>
                        </div>
                    </div>
                    <div class="broder"></div>
                    <div class="description">
                        <h3>Description</h3>
                        <div class="text">
                            <p>{{cars[$route.params.id].text}}</p>
                            <p>{{cars[$route.params.id].textTwo}}</p>
                        </div>
                    </div>
                    <div class="btn">
                        <router-link :to="{ path: `/quiz/${this.$route.params.id}` }"> <the-button class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Request more information</the-button></router-link>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    <calculator class="calc" :dollars="cars[$route.params.id].priceTwo"></calculator>
   </div>
</template>

<script>
import Swiper, {Navigation, Pagination}  from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// фотки для слайдера
import panamera1 from '../assets/images/inventory/swipers/panamera.png'
import panamera2 from '../assets/images/inventory/swipers/panamera2.png'
import panamera3 from '../assets/images/inventory/swipers/panamera3.jpg'
// панамера внутри
import panamera4 from '../assets/images/inventory/swipers/panamera4.jpg'
import panamera5 from '../assets/images/inventory/swipers/panamera5.jpg'
import panamera6 from '../assets/images/inventory/swipers/panamera6.jpg'


import mits1 from '../assets/images/inventory/swipers/mits1.jpg'
import mits2 from '../assets/images/inventory/swipers/mits2.jpg'
import mits3 from '../assets/images/inventory/swipers/mits3.jpg'
import mits4 from '../assets/images/inventory/swipers/mits4.jpg'
import mits5 from '../assets/images/inventory/swipers/mits5.jpg'
import mits6 from '../assets/images/inventory/swipers/mits6.jpg'
import mits7 from '../assets/images/inventory/swipers/mits6.jpg'





import mers1 from '../assets/images/inventory/swipers/mers1.jpg'
import mers2 from '../assets/images/inventory/swipers/mers2.jpg'
import mers3 from '../assets/images/inventory/swipers/mers3.jpg'
import mers4 from '../assets/images/inventory/swipers/mers4.jpg'
import mers5 from '../assets/images/inventory/swipers/mers5.jpg'



import m1 from '../assets/images/inventory/swipers/m1.jpg'
import m2 from '../assets/images/inventory/swipers/m2.jpg'
import m3 from '../assets/images/inventory/swipers/m3.jpg'
import m4 from '../assets/images/inventory/swipers/m4.jpg'
import m5 from '../assets/images/inventory/swipers/m5.jpg'


import vaz1 from '../assets/images/inventory/swipers/vaz1.jpg'
import vaz2 from '../assets/images/inventory/swipers/vaz2.jpg'
import vaz3 from '../assets/images/inventory/swipers/vaz3.jpg'
import vaz4 from '../assets/images/inventory/swipers/vaz4.jpg'
import vaz5 from '../assets/images/inventory/swipers/vaz5.jpg'
import vaz6 from '../assets/images/inventory/swipers/vaz6.jpg'



import zil1 from '../assets/images/inventory/swipers/zil1.jpg'
import zil2 from '../assets/images/inventory/swipers/zil2.jpg'
import zil3 from '../assets/images/inventory/swipers/zil3.jpg'
import zil4 from '../assets/images/inventory/swipers/zil4.jpg'
import zil5 from '../assets/images/inventory/swipers/zil5.jpg'


import gaz1 from '../assets/images/inventory/swipers/gaz1.jpg'
import gaz2 from '../assets/images/inventory/swipers/gaz2.jpg'
import gaz3 from '../assets/images/inventory/swipers/gaz3.jpg'


import ButtonVue from '../components/ui/Button.vue';
import CalculatorNowVue from '../components/CalculatorNow.vue';

export default{
    components:{
        'the-button': ButtonVue,
        'calculator': CalculatorNowVue,
    },
    data(){
        return{
            active: 1,
            photo1: true,
            photo2: false,
             // массив машин
             cars: [
                {
                    id: 0,
                    photos: [
                        {img: panamera1, img2: panamera4},
                        {img: panamera2, img2: panamera5},
                        {img: panamera3, img2: panamera6},
                        {img: panamera1, img2: panamera4},
                        {img: panamera2, img2: panamera5},
                        {img: panamera3, img2: panamera6},
                        {img: panamera1, img2: panamera4},
                        {img: panamera2, img2: panamera5},
                        {img: panamera3, img2: panamera6},   
                        
                    ],
                    name: 'Porsche Panamera II Turbo S E-Hybrid',
                    price: '$ 69 240',
                    priceTwo: 150000,
                    year: '2020 year',
                    years: 2020,
                    type: 'Sedan',
                    trans: 'Manual',
                    km: '20 000',
                    rpm: '2500-4000',
                    cylyndres: 6,
                    per: 9,
                    steering: 'Power steering',
                    text: 'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
                    textTwo: "The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model."
                },
                {
                    id: 1,
                    photos: [
                        { img: mits1, img2: mits5},
                        { img: mits2,  img2: mits6},
                        { img: mits3,  img2: mits7},
                        { img: mits4,  img2: mits5},
                        { img: mits1, img2: mits6},
                        { img: mits2,  img2: mits7},
                        { img: mits3,  img2: mits5},
                        { img: mits4,  img2: mits6},
                        { img: mits1, img2: mits7},
                        { img: mits2,  img2: mits5},
                        { img: mits3,  img2: mits6},
                        { img: mits4,  img2: mits7},
                        
                    ],
                    name: 'Mitsubishi Outlander III Restyling 3',
                    price: '$ 23 500',
                    priceTwo: 23500,
                    year: '2004 year',
                    years: 2004,
                    type: 'Sedan',
                    trans: 'Manual',
                    km: '20 000',
                    rpm: '2500-6000',
                    cylyndres: 8,
                    per: 11,
                    steering: 'Power steering',
                    text: 'The appearance of the Mitsubishi Outlander combines elegance and exceptional power, which speak of the dynamic behavior of an SUV. The practical significance of such a design is improved aerodynamic characteristics. The signature Dynamic Shields front grill, alloy wheels and decisive side lines create harmony in the exterior. If there is a third row of seats, the legroom of passengers in the second row remains unchanged.',
                    textTwo: 'When life throws you a curve, overcome it with confidence. All-wheel drive systems improve the stability of the SUV and its passability, regardless of the type of surface. Already in the basic configuration of the Mitsubishi Outlander, a number of innovative functions are available to protect the driver and passengers. Top equipment technologies make driving a car even safer and more convenient.',


                },
                {
                    id: 2,
                    photos: [
                        { img: mers1, img2: mers4},
                        { img: mers2, img2: mers5},
                        { img: mers3, img2: mers5},
                        { img: mers1, img2: mers4},
                        { img: mers2, img2: mers5},
                        { img: mers3, img2: mers4},
                        { img: mers1, img2: mers5},
                        { img: mers2, img2: mers4},
                        { img: mers3, img2: mers5},
                    ],
                    name: 'Mercedes-Benz CLA I (C117, X117) 200',
                    price: '$ 21 400',
                    priceTwo: 21400,
                    year: '2011 year',
                    years: 2011,
                    type: 'Sedan',
                    trans: 'Manual',
                    km: '20 000',
                    rpm: '2500-5500',
                    cylyndres: 6,
                    per: 10,
                    steering: 'Power steering',
                    text: 'Mercedes-Benz C117 is the first generation of compact CLA-class passenger cars of the German brand Mercedes-Benz, created on the platform of A- and B-class models. The premiere took place in January 2013 at the North American International Auto Show in Detroit.',
                    textTwo: 'Official sales in Europe started in April 2013, in the US - from September of the same year[1]. Already in the first year, the company managed to sell 100,000 units of cars of the series[1], which the representatives of Daimler AG commented on as “the best start in the last 20 years”[2].',

                },
                {
                    id: 3,
                    photos: [
                        { img: m1, img2: m4},
                        { img: m2, img2: m5},
                        { img: m3, img2: m4},
                        { img: m1, img2: m5},
                        { img: m2, img2: m4},
                        { img: m3, img2: m5},
                        { img: m1, img2: m4},
                        { img: m2, img2: m5},
                        { img: m3, img2: m4},
                    ],
                    name: 'Mercedes-Benz W124 420',
                    price: '$ 9 500',
                    priceTwo: 9500,
                    year: '2012 year',
                    years: 2012,
                    type: 'Sedan',
                    trans: 'Manual',
                    km: '20 000',
                    rpm: '2500-5700',
                    cylyndres: 4,
                    per: 12,
                    steering: 'Power steering',
                    text: 'Mercedes-Benz C117 is the first generation of compact CLA-class passenger cars of the German brand Mercedes-Benz, created on the platform of A- and B-class models. The premiere took place in January 2013 at the North American International Auto Show in Detroit.',
                    textTwo: 'Official sales in Europe started in April 2013, in the US - from September of the same year[1]. Already in the first year, the company managed to sell 100,000 units of cars of the series[1], which the representatives of Daimler AG commented on as “the best start in the last 20 years”[2].',

                },
                {
                    id: 4,
                    photos: [
                        {img: vaz1, img2: vaz5},
                        {img: vaz2, img2: vaz6},
                        {img: vaz3, img2: vaz5},
                        { img: vaz4, img2: vaz6},
                        {img: vaz1, img2: vaz5},
                        {img: vaz2, img2: vaz6},
                        {img: vaz3, img2: vaz5},
                        { img: vaz4, img2: vaz6},
                        {img: vaz1, img2: vaz5},
                        {img: vaz2, img2: vaz6},
                        {img: vaz3, img2: vaz5},
                        { img: vaz4, img2: vaz6},

                    ],
                    name: 'ВАЗ 21011 Жигули',
                    price: '$ 1 000',
                    priceTwo: 1000,
                    year: '1990 year(69)',
                    years: 1990,
                    type: 'Sedan',
                    trans: 'Manual',
                    km: '360 000',
                    rpm: '3350-3380',
                    cylyndres: 4,
                    per: 8,
                    steering: 'Rail',
                    text: 'ВАЗ 2101, хорошая машина, владею 3 года. Очень кофортная машина, наездил около 3.000км при своем владении.',
                    textTwo: 'За время владения были сделаны: Двигатель, полная капиталка. Перекрашена на один тон темнее. Сделан салон, сидения 2107'

                },
                {
                    id: 5,
                    photos: [
                        {img: zil1, img2: zil4},
                        {img: zil2, img2: zil5},
                        {img: zil3, img2: zil4},
                        {img: zil1, img2: zil5},
                        {img: zil2, img2: zil4},
                        {img: zil3, img2: zil5},
                        {img: zil1, img2: zil4},
                        {img: zil2, img2: zil5},
                        {img: zil3, img2: zil4},

                    ],
                    name: 'ЗИЛ 130',
                    price: '$ 4 000',
                    priceTwo: 4000,
                    year: '1990 year',
                    years: 1990,
                    type: 'Trucks',
                    trans: 'Manual',
                    km: '120 000',
                    rpm: '3350-3380',
                    cylyndres: 8,
                    per: 22,
                    steering: 'Rail',
                    text: 'Автохлам',
                    textTwo: 'Тарантайка'

                },
                {
                    id: 6,
                    photos: [
                        {img: gaz1, img2: zil4},
                        {img: gaz2, img2: zil5},
                        {img: gaz3, img2: zil4},
                        {img: gaz1, img2: zil4},
                        {img: gaz2, img2: zil5},
                        {img: gaz3, img2: zil4},
                        {img: gaz1, img2: zil4},
                        {img: gaz2, img2: zil5},
                        {img: gaz3, img2: zil4},
                        

                    ],
                    name: 'ГАЗ 52',
                    price: '$ 1 500',
                    priceTwo: 4000,
                    year: '1998 year',
                    years: 1998,
                    type: 'Trucks',
                    trans: 'Manual',
                    km: '240 000',
                    rpm: '3350-3380',
                    cylyndres: 8,
                    per: 22,
                    steering: 'Rail',
                    text: 'Автохлам',
                    textTwo: 'Тарантайка'

                },
            ],
            swiperOne: null,
            swiperTwo: null,
        }
    },
    methods:{
        setActive(number){
            this.active = number;
            if(number === 1){
                this.photo1 = true;
                this.photo2 = false; 
            }
            if(number == 2){
                this.photo1 = false;
                this.photo2 = true; 
            }
            
        }
    },
    mounted(){
        this.swiperOne = new Swiper('.one-content', {
        loop: true,
        allowTouchMove: true,
        modules: [Navigation],
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        allowTouchMove: false,
        });
        this.swiperTwo = new Swiper('.two-content', {
        slidesPerView: 3.7,
        modules: [Navigation],
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            1150:{
                spaceBetween: 10,
            },
            740: {
                spaceBetween: 10,
            },
            200: {
                spaceBetween: 5,
            }
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        allowTouchMove: false,
    
        });


    },
}
</script>

<style lang="scss" scoped>
.carpage{
    margin-top: 100px;
    margin-bottom: 40px;
    .title{
        margin-top: 120px;
        h2{
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
            font-weight: 500;
            font-size: 16px;
            line-height: 159%;
            color: #606276;
            margin: 10px 0px;
        }
    }
    @media(max-width: 1100px){
        .title{
            max-width: 600px;
            margin: 0 auto;
            margin-top: 120px;
        }
    }
    @media(max-width: 640px){
        .title{
            h2{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 140.5%;
            }
            p{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 159%;
            }
        }
    }
    .info{
        &__content{
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            gap: 50px;
            &-left{
                overflow: hidden;
                max-width: 650px;
                .swiper-container.one-content{
                    width: 100%;
                    height: 370px;
                    border-radius: 2px;
                    position: relative;
                    .swiper-wrapper{
                        .swiper-slide{
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .button{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        z-index: 20;
                        width: 100%;
                        padding: 20px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .block{
                            button{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 14px;
                                padding: 10px 20px;
                                letter-spacing: 0.02em;
                                text-transform: uppercase;
                                background: rgba(215, 215, 215, 0.2);
                                border-radius: 2px;
                                border: 0;
                                color: #FFFFFF;
                            }
                            button.is-active{
                                background: #FFFFFF;
                                border-radius: 2px;
                                color: #41456B;
                            }
                            .two{
                                margin-left: 20px;
                            }
                        }
                    }
                    @media(max-width: 640px){
                        .button{
                            padding: 10px;
                            bottom: 10px;
                            .block{
                                button{
                                    padding: 7px 13px;
                                    font-family: 'Gilroy';
                                    font-style: normal;
                                    font-weight: 700;
                                    font-size: 16px;
                                    line-height: 14px;
                                }
                                .two{
                                    margin-left: 10px;
                                }
                            }
                        }
                    }

                }
                .swiper-container.two-content{
                    width: 100%;
                    position: relative;
                    margin-top: 20px;
                    .swiper-wrapper{
                        .swiper-slide{
                            height: 92px;
                            width: 100px;
                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 2px;
                            }
                        }
                        @media(max-width: 660px){
                            .swiper-slide{
                                height: unset;
                            }
                        }
                        .swiper-slide-active{
                            border: 1px solid blue;
                            position: relative;
                        }
                        .swiper-slide-active::after {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            border: 1px solid blue;
                          }
                    }
                    .swiper-button-next,
                    .swiper-button-prev{
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        z-index: 2;
                        width: 53px;
                        height: 53px;
                        background: #7481ff;
                        opacity: .8;
                        border-radius: 50%;
                        margin: 0;
                        color: #fff;
                    }
                    @media(max-width: 640px){

                        .swiper-button-next,
                        .swiper-button-prev{
                            width: 35px;
                             height: 35px;
                        }
                        
                    }
                    .swiper-button-next{
                        right: 0;
                    }
                    .swiper-button-prev{
                        left: 0;
                    }
                    .swiper-button-prev:after{
                        font-size: 22px;
                        transform: translateX(-10%);
                    }
                    
                    .swiper-button-next:after{
                        font-size: 22px;
                        transform: translateX(10%);
                    }
                    @media(max-width: 640px){
                        .swiper-button-prev:after{
                            font-size: 14px;
                        }
                        .swiper-button-next:after{
                            font-size: 14px;
                        }
                    }
                }
                .btn{
                    margin-top: 10px;
                    display: none;
                }
                @media(max-width: 500px){
                    .btn{
                        display: block;
                    }
                   
                }
            }
            &-right{
                max-width: 600px;
                width: 100%;
                .price{
                    h4{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 159%;
                        color: #606276;
                    }
                    p{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 140%;
                        color: #7481FF;
                        margin: 0;
                        margin-top: 10px;
                    }
                }
                .info-1{
                    display: flex;
                    align-items: center;
                    margin-top: 20px;
                    .block{
                        max-width: 250px;
                        width: 100%;
                        h4{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 159%;
                            color: #606276;
                           
                        }
                        p{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 25px;
                            line-height: 140%;
                            color: #41456B;
                            margin: 0;
                            margin-top: 5px;
                        }
                    }
                }
                .broder{
                    border: 1px solid #D7D7D7;
                    margin-top: 60px;
                }
                .info{
                    margin-top: 60px;
                    h3{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 159%;
                        color: #606276;
                    }
                    .flex{
                        display: flex;
                        flex-wrap: wrap;
                        p{
                            width: 50%;
                            margin-bottom: 20px;
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 25px;
                            color: #41456b;
                        }
                    }
                }
                .description{
                    margin-top: 60px;
                    h3{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        line-height: 159%;
                        color: #606276;
                    }
                    .text{
                        margin-top: 20px;
                        p{
                            margin: 0;
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 180%;
                            /* or 29px */

                            letter-spacing: 0.02em;

                            /* Secondary / Text */

                            color: #606276;
                        }
                    }
                }
                .btn{
                    margin-top: 40px;
                    max-width: 280px;
                }
            }
        }
        @media(max-width: 1100px){
            &__content{
                flex-direction: column;
                &-left{
                    max-width: 600px;
                    margin: 0 auto;
                }
                &-right{
                    max-width: 600px;
                    margin: 0 auto;
                }
            }
        }
        @media(max-width: 660px){
            &__content{
                &-left{
                    max-width: 100%;
                    width: 100%;
                    .swiper-container.one-content{
                       height: unset;
                        .swiper-wrapper{
                            .swiper-slide{
                                img{
                                    width: 100%;
                                    aspect-ratio: 1/.56;
                                }
                            }
                        }
                    }
                    .swiper-container.two-content{
                        max-height: 111px;
                        .swiper-wrapper{
                            height: 100%;
                            .swiper-slide{
                               
                                img{
                                    width: 100%;
                                    aspect-ratio: 1/.56;
                                }
                            }
                        }
                    }
                }
                &-right{
                    width: 100%;
                    max-width: 100%;
                    .price{
                        h4{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 159%;
                        }
                        p{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 20px;
                            line-height: 140%;
                        }
                    }
                    .info-1{
                        justify-content: space-between;
                        .block{
                            max-width: 100%;
                            width: 100%;
                            h4{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 500;
                                font-size: 16px;
                                line-height: 159%;
                            }
                            p{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 20px;
                                line-height: 140%;
                            }
                        }
                    }
                    .info{
                        h3{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 159%;
                        }
                        .flex{
                            flex-wrap: nowrap;
                            flex-direction: column;
                            p{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 18px;
                                line-height: 25px;
                            }
                        }
                    }
                }
            }
        }
    }
    .calc{
        margin-top: 220px;
    }
    @media(max-width: 1100px){
        .calc{
            margin-top: 160px;
        }
    }
    @media(max-width: 640px){
        .calc{
            margin-top: 80px;
        }
    }
}
</style>