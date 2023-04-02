<template>
    <div class="news">
        <div class="container">
            <div class="news__text">
                <h2>Interesting to read</h2>
                
                <div class="btn">
                    <router-link to="/blog"><the-button  :bg-color="'white'" :border="'1px solid #7481FF'">all articles</the-button></router-link>
                </div>

            </div>
            <div class="news__swiper">
                <div class="swiper-container swiper-news">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in content" :key="item.id">
                            <router-link :to="{ path: `/blog/${item.id}` }">
                            <img :src="item.img" alt="">
                            <div class="text">
                                <h6>{{item.data}}</h6>
                                <h2>{{item.blog}}</h2>
                            </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            <div class="btn-link">
                <router-link to="/blog"><the-button  :bg-color="'white'" :border="'1px solid #7481FF'">all articles</the-button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './ui/Button.vue';

// photo
import OnePhoto from '../assets/images/blog/one.png'
import TwoPhoto from  '../assets/images/blog/two.png'
import ThreePgoto from '../assets/images/blog/three.png'
import FourPhoto from '../assets/images/blog/four.png'
import FivePhoto from '../assets/images/blog/five.png'
import SixPhoto from '../assets/images/blog/six.png'
import SevenPhoto from '../assets/images/blog/seven.png'
import EightPhoto from '../assets/images/blog/eight.png'
import NinePhoto from '../assets/images/blog/nine.png'





// свайпер
import Swiper, {Navigation, Pagination}  from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default{
    components:{
        'the-button': Button,
    },
    data(){
        return{
            content: [
            {
                id: 0,
                img: OnePhoto,
                data: '10 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
                article: '/news-1'
            },
            {
                id: 1,
                img: TwoPhoto,
                data: '11 May, 2020',
                blog: 'How fast can you order a car in Canada?',
                article: '/news-2'
            },
            {
                id: 2,
                img: ThreePgoto,
                data: '12 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
                article: '/news-1'
            },
            {
                id: 3,
                img: FourPhoto,
                data: '13 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
                article: '/news-2'
            },
            {
                id: 4,
                img: FivePhoto,
                data: '14 May, 2020',
                blog: 'How fast can you order a car in Canada?',
                article: '/news-1'
            },
            {
                id: 5,
                img: SixPhoto,
                data: '15 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
                article: '/news-2'
            },
            {
                id: 6,
                img: SevenPhoto,
                data: '16 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
                article: '/news-1'
            },
            {
                id: 7,
                img: EightPhoto,
                data: '17 May, 2020',
                blog: 'How fast can you order a car in Canada?',
                article: '/news-2'
            },
            {
                id: 8,
                img: NinePhoto,
                data: '18 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
                article: '/news-1'
            },
          ]
        }
    },
    methods:{
        toArticle(article){
            this.$router.push(article);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    },
    mounted(){
        this.swiper = new Swiper('.swiper-news', {
        spaceBetween: 20,
        modules: [Navigation],
        breakpoints: {
            1150:{
                slidesPerView: 3,
            },
            740: {
            slidesPerView: 2, // Количество слайдов на планшете
            },
            480: {
            slidesPerView: 1, // Количество слайдов на телефоне
            }
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
            }
        })
    },
}
</script>

<style lang="scss" scoped>
.news{
    margin-top: 220px;
    &__text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
        }
    }
    @media(max-width: 740px){
        &__text{
            h2{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 140.5%;
            }
            .btn{
                display: none;
            }
        } 
    }
    &__swiper{
        .swiper-news{
            overflow: hidden;
            padding-bottom: 40px;
            padding: 40px 5px;
            position: relative;
            .swiper-wrapper{
                .swiper-slide{
                    background: #FFFFFF;
                    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    cursor: pointer;
                    
                   
                    img{
                        width: 100%;
                        max-width: 100%;
                    }
                    .text{
                        padding: 30px 35px 30px 30px;
                        height: 130px;
                        h6{
                            margin: 0;
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 180%;
                            color: #606276;
                        }
                        h2{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 25px;
                            color: #41456B;
                        }
                    }
                }
                @media(max-width: 740px){
                    .swiper-slide{
                        .text{
                            padding: 20px;
                            height: auto;
                            h6{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 180%;
                            }
                            h2{
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
            .swiper-button-prev,
            .swiper-button-next{
                background: #7481ff;
                color: #fff;
                width: 53px; 
                height: 53px;
                border-radius: 50%;
                transition: opacity .4s ease-in;
                z-index: 10;
            }
            .swiper-button-next{
                right: 5px;
            }
            .swiper-button-next:after{
                font-size: 22px;
                transform: translateX(5%);
            }
            .swiper-button-prev:after{
                font-size: 22px;
                transform: translateX(-20%);
            }
        }
    }
    .btn-link{
        display: none;
    }
    @media(max-width: 740px){
        .btn-link{
            display: block;
            margin-bottom: 30px;
        }
    }
}
@media(max-width: 1170px){
    .news{
        margin-top: 160px;
    }
}
@media(max-width: 740px){
    .news{
        margin-top: 50px;
    }
}
</style>