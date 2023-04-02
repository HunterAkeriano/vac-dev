<template>
    <div class="news">
        <div class="news__bg" :style="{ backgroundImage: `url(${news[$route.params.id].img})` }"></div>
        <div class="container">
            <div class="news__content">
                <div class="top">
                    <router-link to="/blog">
                        <div class="links">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                        </router-link>
                    <h5>{{news[$route.params.id].date}}</h5>
                </div>
                    

                    
                    <h2>{{news[$route.params.id].title}}</h2>
                    <div class="text">
                        <p>Id dolore mollit excepteur magna consectetur et dolore mollit qui quis do ea consequat tempor.
                             Sunt eu excepteur cupidatat aliqua anim. 
                            Aliqua consectetur commodo magna ea proident aliquip. Minim ipsum irure ad irure sint cupidatat labore.</p>
                            <p>Et duis cupidatat occaecat anim fugiat qui nulla consequat ex. Incididunt in consequat dolore elit ut eiusmod ipsum eiusmod labore in consectetur nisi voluptate pariatur. Excepteur anim dolore ex irure voluptate minim in deserunt ad dolore reprehenderit. Pariatur laborum tempor irure nisi voluptate aliqua in aliquip anim commodo esse deserunt est commodo. Lorem nostrud incididunt commodo enim qui incididunt ipsum.
                                Nostrud veniam do nostrud commodo velit incididunt culpa. 
                                Adipisicing commodo amet ea qui id aliqua. Cupidatat veniam enim sunt
                                 elit elit aute adipisicing voluptate consequat esse et consectetur magna incididunt. 
                                Sunt sint reprehenderit esse reprehenderit dolor id anim cupidatat non.</p>
                                <p>Anim nulla cupidatat irure do aliqua laboris exercitation qui exercitation et aliquip pariatur.
                                     Et ullamco cupidatat fugiat ex ullamco aliquip minim nisi amet adipisicing velit. 
                                     Ex commodo ex anim amet commodo. 
                                    Tempor eu non culpa ea id ad eu aliquip dolor in aliqua nulla.</p>
                                    <p>Enim pariatur adipisicing reprehenderit eiusmod deserunt laborum veniam incididunt sit ullamco cillum aute sint. Qui ex Lorem deserunt velit elit. Occaecat pariatur fugiat eu cillum sit nulla excepteur incididunt. Incididunt excepteur aliquip voluptate ut deserunt est enim reprehenderit ullamco ut ullamco mollit incididunt aute.
                                        Adipisicing sunt sunt mollit proident consequat aliquip id adipisicing 
                                        labore sit non. Occaecat incididunt id est eu reprehenderit voluptate quis amet veniam.
                                         Ea nulla ipsum mollit reprehenderit ullamco eiusmod nostrud velit Lorem dolor fugiat. Occaecat incididunt nostrud occaecat cillum esse ex id exercitation tempor nisi elit enim. 
                                        Labore Lorem amet in reprehenderit officia sint minim ipsum non.</p>
                                        <p>Elit incididunt non nisi occaecat reprehenderit aute ipsum deserunt culpa aliquip officia minim. Adipisicing amet dolore veniam eiusmod tempor sit sint quis in sunt laboris dolore nulla. Id ut culpa pariatur in.
                                            Incididunt tempor ut dolore aute cupidatat qui enim est veniam.
                                             Irure deserunt adipisicing cillum nostrud occaecat cillum aute est sit. Id adipisicing aute esse sit aute. Cillum anim et Lorem quis ad quis duis ut ex eu deserunt. Irure ullamco adipisicing duis sint incididunt voluptate ipsum enim consectetur officia culpa elit adipisicing voluptate.
                                             Tempor anim deserunt ut duis qui eiusmod.</p>
                                             <p>Sunt reprehenderit fugiat magna sit reprehenderit pariatur reprehenderit non irure aliqua sit irure cupidatat. Sit occaecat aliqua elit qui ut commodo adipisicing fugiat aliqua dolore. Enim proident ipsum veniam enim elit officia officia tempor sint esse aliquip aliqua occaecat. Duis nostrud ex consectetur ad. Enim pariatur ex magna incididunt enim aute dolore id tempor anim irure enim cupidatat. Enim dolore dolore aute duis occaecat sint. Voluptate voluptate eiusmod elit irure nisi incididunt laborum fugiat proident quis aliquip excepteur ad ut.
                                                Veniam veniam irure Lorem dolore sint amet dolore.
                                                 Commodo esse occaecat consectetur do id velit tempor deserunt consectetur id ea. 
                                                 Do sunt tempor laboris sit ad. Fugiat eu est sit voluptate incididunt laborum et aliquip in ex cupidatat minim adipisicing. Occaecat dolor veniam 
                                                duis anim eu deserunt cupidatat incididunt elit commodo esse culpa culpa aliquip.</p>
                    <div class="info">
                        <p>Voluptate nulla amet ad commodo veniam consequat laborum tempor proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua culpa consequat et. Laborum tempor commodo et exercitation consectetur aute laborum aliquip tempor nostrud nulla nisi labore. Tempor tempor laboris officia consectetur sint esse sit ad nostrud et deserunt laborum sint eu. Cillum laboris et sint reprehenderit deserunt.
                            Laborum labore incididunt duis mollit est anim reprehenderit consectetur enim fugiat veniam deserunt eiusmod. Irure sunt aute cupidatat qui qui consequat amet tempor. In officia est velit veniam magna proident adipisicing eu non labore mollit ad anim ut. Sit cillum in ea qui minim commodo labore nisi irure duis. Ea do laborum id adipisicing et cillum occaecat est laborum eu consequat ad commodo.</p>
                    </div>


                    </div>

                    <div class="secret-info" v-if="$route.params.id == 1 || $route.params.id == 3 || $route.params.id == 5 || $route.params.id == 7">
                        <div class="images">
                            <img src="../assets/images/blog/photo-1.jpg" alt="">
                            <img src="../assets/images/blog/photo-2.jpg" alt="">
                        </div>
                        <div class="one-text">
                            <h3>Voluptate nulla amet ad commodo veniam consequat. </h3>
                            <p>Voluptate nulla amet ad commodo veniam consequat laborum tempor proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua culpa consequat et. Laborum tempor commodo et exercitation consectetur aute laborum aliquip tempor nostrud nulla nisi labore. Tempor tempor laboris officia consectetur sint esse sit ad nostrud et deserunt laborum sint eu. Cillum laboris et sint reprehenderit deserunt.
                                Laborum labore incididunt duis mollit est anim reprehenderit consectetur enim fugiat veniam deserunt eiusmod. Irure sunt aute cupidatat qui qui consequat amet tempor. In officia est velit veniam magna proident adipisicing eu non labore mollit ad anim ut. Sit cillum in ea qui minim commodo labore nisi irure duis. Ea do laborum id adipisicing et cillum occaecat est laborum eu consequat ad commodo. </p>
                        </div>
                        <div class="one-img">
                            <img src="../assets/images/blog/audi.png" alt="">
                        </div>
                        <div class="one-text">
                            <p>Voluptate nulla amet ad commodo veniam consequat laborum tempor proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua culpa consequat et. Laborum tempor commodo et exercitation consectetur aute laborum aliquip tempor nostrud nulla nisi labore. Tempor tempor laboris officia consectetur sint esse sit ad nostrud et deserunt laborum sint eu. Cillum laboris et sint reprehenderit deserunt.</p>
                            <p>Voluptate nulla amet ad commodo veniam consequat laborum tempor proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua culpa consequat et. Laborum tempor commodo et exercitation consectetur aute laborum aliquip tempor nostrud nulla nisi labore. Tempor tempor laboris officia consectetur sint esse sit ad nostrud et deserunt laborum sint eu. Cillum laboris et sint reprehenderit deserunt.</p>
                        </div>
                        <div class="one-text">
                            <h3>Voluptate nulla amet ad commodo veniam consequat.</h3>
                            <p>Voluptate nulla amet ad commodo veniam consequat laborum tempor proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua culpa consequat et. Laborum tempor commodo et exercitation consectetur aute laborum aliquip tempor nostrud nulla nisi labore. Tempor tempor laboris officia consectetur sint esse sit ad nostrud et deserunt laborum sint eu. Cillum laboris et sint reprehenderit deserunt.</p>
                            <p>Voluptate nulla amet ad commodo veniam consequat laborum tempor proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua culpa consequat et. Laborum tempor commodo et exercitation consectetur aute laborum aliquip tempor nostrud nulla nisi labore. Tempor tempor laboris officia consectetur sint esse sit ad nostrud et deserunt laborum sint eu. Cillum laboris et sint reprehenderit deserunt.</p>
                        </div>
                         <div class="one-img">
                            <img src="../assets/images/blog/folc.png" alt="">
                        </div>
                        <div class="one-text">
                            <p>Voluptate nulla amet ad commodo veniam consequat laborum tempor proident cupidatat aute nisi eiusmod laborum. Esse amet duis aliqua culpa consequat et. Laborum tempor commodo et exercitation consectetur aute laborum aliquip tempor nostrud nulla nisi labore. Tempor tempor laboris officia consectetur sint esse sit ad nostrud et deserunt laborum sint eu. Cillum laboris et sint reprehenderit deserunt.</p>
                        </div>
                    </div>
                </div>
            </div>
    <swiper-news/>  
</div>
</template>

<script>
// фотки
import mers from '../assets/images/blog/mers.jpg'
import bmw from '../assets/images/blog/bmw.jpg'
import lolcard from '../assets/images/blog/lolcard.jpg'
import defaultCar from '../assets/images/news/one-car.png'
import NewsSwiper from '../components/News-Swiper.vue';
export default{
    components:{
        'swiper-news': NewsSwiper
    },
    data(){
        return{
           news: [
            {id: 0,
            img: mers,
            date: '10 May, 2020',
            title: 'How to save on buying a car?  Why is it better to buy from us'},
            {id: 1,
            img: bmw,
            date: '11 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            id: 2,
            img: lolcard,
            date: '12 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {id: 3,
            img: defaultCar,
            date: '13 May, 2020',
            title: 'How fast can you order a car in Canada?'},
            {id: 4,
            img: bmw,
            date: '14 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'},
            {
            id: 5,
            img: lolcard,
            date: '15 May, 2020',
            title: 'How fast can you order a car in Canada?'
            }, 
            {id: 6,
            img: mers,
            date: '16 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'},
            {id: 7,
            img: defaultCar,
            date: '17 May, 2020',
            title: 'How fast can you order a car in Canada?'},
            {
            id: 8,
            img: lolcard,
            date: '18 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
        ]
        }
    }
}
</script>

<style lang="scss" scoped>
.news{
    &__bg{
        background: url('../assets/images/news/one-car.png')  no-repeat center;
        width: 100%;
        height: 200px;
        background-size: cover;
        transition: all .3s;
    }
    @media (max-width: 728px) {
        &__bg{
            background: url('../assets/images/news/cars-one.png')  no-repeat center;
         height: 140px;
         background-size: cover;
        }
        
    }
    
    &__content{
        position: relative;
        transition: all .3s;
        .links{
            position: absolute;
            left: -100px;
            transition: all .3s;
            display: flex;
            align-items: center;
            margin-top: 45px;
            span{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 14px;
                color: #606276;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                margin-left: 10px;
            }
        }
        
        @media(max-width: 1000px){
            .links{
                left: 10px;
                margin-top: 50px;
                span{
                    display: none;
                }
            }
        }
        @media(max-width: 728px){
            .links{
                position: static;
                margin-top: 0;
                span{
                    display: inline;
                }
            }
            .top{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
        margin: 0 100px;
        background: #FFFFFF;
        border-radius: 5px 5px 0px 0px;
        top: -80px;
        padding: 60px;
        h5{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
            color: #606276;
            transition: all .3s;
        }
        h2{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
            transition: all .3s;
            max-width: 640px;
        }
        @media(max-width: 728px){
            h2{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 140.5%;
                margin-top: 10px;
                max-width: 100%;
            }
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
                color: #7C7A84;
            }
            .info{
                margin-top: 50px;
            }
            @media(max-width: 728px){
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                }
                .info{
                    margin-top: 20px;
                }
            }
        }
        .secret-info{
            margin: 20px 0px;
            
            .images{
                width: 100%;
                display: flex;
                gap: 20px;
                img{
                    width: calc(50% - 10px);
                }
            }
            @media(max-width: 900px){
                .images{
                    flex-direction: column;
                    img{
                        width: 100%;
                    }
                }
            }
            .one-text{
                margin: 20px 0px;
                h3{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 140%;
                    /* identical to box height, or 35px */

                    letter-spacing: 0.02em;
                    color: #41456B;
                }
                @media(max-width: 500px){
                    h3{
                        font-size: 20px;
                    }
                }
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    /* or 29px */

                    letter-spacing: 0.02em;
                    color: #7C7A84;

                }
            }
            .one-img{
                margin: 20px 0px;
                img{
                    width: 100%;
                    max-width: 100%;
                }
            }
        }

    }
    @media(max-width: 1000px){
        &__content{
            margin: 0;
            padding: 40px;
        }
    }
    @media(max-width: 728px){
        &__content{
            top: 0;
            padding: 32px 0px;
        }
    }
}


</style>