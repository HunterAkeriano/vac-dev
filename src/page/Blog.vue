<template>
    <div class="blog">
        <bottom-header>Our blog</bottom-header>
        <section class="news">
            <div class="container">
                <div class="news__content">
                    <div class="card" 
                    v-for="news in blog" :key="news.id">
                    <router-link :to="{ path: `/blog/${news.id}` }">
                        <img :src="news.img" alt="">
                        <div class="text">
                            <h6>{{news.data}}</h6>
                            <h2>{{news.blog}}</h2>
                        </div>
                    </router-link>
                    </div>
                    
                </div>
                <div class="news__pagination">
                    <div class="pagination" 
                    :class="{ 'active': currentPagination === 'one'}"
                    @click="oneClick"></div>
                    <div class="pagination" :class="{ 'active': currentPagination === 'two'}"
                    @click="twoClick"></div>
                    <div class="pagination" :class="{ 'active': currentPagination === 'three'}"
                    @click="threeClick"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// фотки
import OnePhoto from '../assets/images/blog/one.png'
import TwoPhoto from  '../assets/images/blog/two.png'
import ThreePgoto from '../assets/images/blog/three.png'
import FourPhoto from '../assets/images/blog/four.png'
import FivePhoto from '../assets/images/blog/five.png'
import SixPhoto from '../assets/images/blog/six.png'
import SevenPhoto from '../assets/images/blog/seven.png'
import EightPhoto from '../assets/images/blog/eight.png'
import NinePhoto from '../assets/images/blog/nine.png'

import BottomHeader from '../components/BottomHeader.vue';


export default{
    components:{
        "bottom-header": BottomHeader,
    },
    data(){
        return{
            currentPagination: 'one',
            reversed: null,
            blog: null,
            three: null,
            content: [
            {
                id: 0,
                img: OnePhoto,
                data: '10 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
            },
            {
                id: 1,
                img: TwoPhoto,
                data: '11 May, 2020',
                blog: 'How fast can you order a car in Canada?',
            },
            {
                id: 2,
                img: ThreePgoto,
                data: '12 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
            },
            {
                id: 3,
                img: FourPhoto,
                data: '13 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
            },
            {
                id: 4,
                img: FivePhoto,
                data: '14 May, 2020',
                blog: 'How fast can you order a car in Canada?',
            },
            {
                id: 5,
                img: SixPhoto,
                data: '15 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
            },
            {
                id: 6,
                img: SevenPhoto,
                data: '16 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
            },
            {
                id: 7,
                img: EightPhoto,
                data: '17 May, 2020',
                blog: 'How fast can you order a car in Canada?',
            },
            {
                id: 8,
                img: NinePhoto,
                data: '18 May, 2020',
                blog: 'How to save on buying a car? Why is it better to buy from us',
            },
          ]
        }
    },
    methods:{
        oneClick(){
            this.blog = this.content;
            if (this.currentPagination !== 'one') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.currentPagination = 'one';
        }
        },
        twoClick(){
        if (!this.reversed) {
                this.reversed = [...this.content].reverse();
        };
        if (this.currentPagination !== 'two') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.currentPagination = 'two';
        }
        this.blog = this.reversed;
        },
        threeClick(){
            if(!this.three){
                this.three = [this.content[1], this.content[2], this.content[5]];
            }
            if (this.currentPagination !== 'three') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.currentPagination = 'three';
        }
            this.blog = this.three;
        },
        toArticle(article){
            this.$router.push(article);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    },
    
    mounted() {
        this.blog = this.content;
    },
}
</script>

<style lang="scss" scoped>
.news{
    margin: 40px 0px;
    &__content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        transition: all .3s;
        gap: 20px;
        .card{
            background: #FFFFFF;
            box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            width: 32%;
            cursor: pointer;
            transition: all .3s;
            img{
                width: 100%;
                max-width: 100%;
            }
            .text{
                padding: 30px 35px 30px 30px;
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
        @media(max-width: 1100px){
            .card{
                width: 48.5%;
            }
        }
        @media(max-width: 700px){
            .card{
                width: 100%;
                .text{
                    padding: 20px;
                    h6{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                    }
                    h5{
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
    @media(max-width: 700px){
        &__content{
            flex-direction: column;
        }
    }
    &__pagination{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        gap: 10px;
        .pagination{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #606276;
            opacity: 0.3;
            transition: opacity .4s;
            cursor: pointer;
        }
        .pagination.active{
            opacity: 1;
        }
    }
}
</style>