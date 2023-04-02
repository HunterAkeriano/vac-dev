<template>
    
   <section class="reviews">
    <div class="container">
        <h3>What our client say about us!</h3>
        <div class="swiper-container review">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="slide">
                        <div class="img">
                            <img src="../assets/images/review/Photo.jpg" alt="">
                        </div>
                        <div class="text">
                            <h6>Laura Chaisson</h6>
                            <p>In irure et ipsum eiusmod adipisicing id elit cillum proident.
                                 Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure 
                                 <span> Lorem proident veniam excepteur non irure Lorem.Lorem esse sint in nisi id esse.</span> </p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide">
                        <div class="img">
                            <img src="../assets/images/review/Photo.jpg" alt="">
                        </div>
                        <div class="text">
                            <h6>Laura Chaisson</h6>
                            <p>In irure et ipsum eiusmod adipisicing id elit cillum proident.
                                Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure 
                                <span>Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.</span> </p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="slide">
                        <div class="img">
                            <img src="../assets/images/review/Photo.jpg" alt="">
                        </div>
                        <div class="text">
                            <h6>Laura Chaisson</h6>
                            <p>In irure et ipsum eiusmod adipisicing id elit cillum proident.
                                Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure 
                                <span>Lorem proident veniam excepteur non irure Lorem.Lorem esse sint in nisi id esse.</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
   </section>

</template>

<script>
// свайпер
import Swiper, {Navigation, Pagination}  from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default{
    data(){
        return{
            swiper: null,
        }
    },
    mounted() {
     this.swiper = new Swiper('.review', {
    slidesPerView: 1,
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    loop: true,
    });
    },
   

}

</script>

<style lang="scss" scoped>
    .reviews{
        overflow: hidden;
        margin-top: 120px;
        padding-bottom: 40px;
        margin-bottom: 180px;
        h3{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
        }
        @media(max-width: 700px){
            h3{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 140.5%;
            }
        }

        .review{
            margin-top: 60px;
            overflow: hidden;
            box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            position: relative;
            .swiper-wrapper{
                .swiper-slide{
                    background: #FFFFFF;
                    cursor: default;
                    width: 100%;
                    .slide{
                        display: flex;
                        overflow: hidden;
                        width: 100%;
                        
                        .img{
                            min-width: 301px;
                            max-height: 340px;
                            img{
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                       
                       
                        .text{
                            padding: 40px;
                            padding-right: 70px;
                            width: 75%;
                            h6{
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
                            p{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 20px;
                                line-height: 25px;
                                /* or 125% */


                                /* Primary / Content */

                                color: #41456B;
                            }
                        }

                    }
                    @media(max-width: 1030px){
                        .slide{
                           .img{
                            max-height: inherit;
                           }
                           .text{
                            h6{
                                margin-top: 0;
                            }
                            p{
                                span{
                                    display: none;
                                }
                            }
                           }
                        }
                    }
                    @media(max-width: 700px){
                        .slide{
                            flex-direction: column;
                            .text{
                                width: 100%;
                                padding: 20px;
                                h6{
                                    font-family: 'Gilroy';
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 16px;
                                    line-height: 180%;
                                }
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
            .swiper-button-prev,
            .swiper-button-next{
                width: 53px;
                height: 53px;
                border-radius: 50%;
                background: #7481FF;
                color: white;
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
            @media(max-width: 700px){
                .swiper-button-prev,
                .swiper-button-next{
                    top: 25%;
                }
                .swiper-button-prev{
                    left: 0;
                }
                .swiper-button-next{
                    right: 0;
                }
                .swiper-button-next:after,
                    .swiper-button-prev:after{
                        font-size: 10px;
                    }
                    .swiper-button-next,
                    .swiper-button-prev{
                        width: 35px;
                        height: 35px;
                    }
            }
        }
    }
 @media(max-width: 1170px){
    .reviews{
        margin-bottom: 120px;
    }
 }   
 @media(max-width: 700px){
    .reviews{
        margin-top: 80px;
        margin-bottom: 40px;
    }
 }   
</style>