<template>
    <div class="video">
        <bottom-header >Vehicle videos</bottom-header>
        <section class="video">
            <div class="container">
                <div class="video__content">
                    <div class="video__content-item">
                        <div class="card" v-for="item in currentVideo" 
                        :key="item.id" 
                         @click="selectVideo(item)"
                         >
                            <div class="card-img">
                                <img :src="item.img" alt="">
                                <div class="card-play">
                                    <img src="../assets/images/video/btn.svg" alt="">
                                </div>
                            </div>
                            <h3>{{item.title}}</h3>
                            
                        </div>

                        <!-- модалка -->
                        <div class="modal" v-if="selectedVideo" @click="closePopUp">
                            <div class="flex" >
                                <div class="close">
                                    <img src="../assets/images/video/close.svg" alt="">
                                </div>
                                <iframe style="width: 100%; height: 100%" :src="selectedVideo.videoUrl" frameborder="0" allowfullscreen></iframe>
                            </div>
                            
                          </div>
                    </div>
                    <div class="video__content-pagintation" >
                        <div class="pagination" 
                        :class="{ 'active': currentPagination === 'one'}"
                        @click.prevent="onePagination"></div>
                        <div class="pagination" 
                        :class="{ 'active': currentPagination === 'two'}"
                        @click.prevent="twoPagination"
                        ></div>
                        <div class="pagination"
                         :class="{'active': currentPagination === 'three'}"
                         @click.prevent="threePagintation"></div>
                    </div>  
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BottomHeader from '../components/BottomHeader.vue';

// импортирую картинки
import image1 from '@/assets/images/video/one.jpg'
import image2 from '@/assets/images/video/two.jpg'
import image3 from '@/assets/images/video/three.jpg'
import image4 from '@/assets/images/video/four.jpg'




export default{
    components:{
        'bottom-header': BottomHeader,
    },
    data(){
        return{
            // пагинация
            currentPagination: 'one',
            selectedVideo: null,
            currentVideo: null,
            reversedVideo: null,
            originalVideo: [],
            deleteVideo: null,

            selectedVideo: null,
            // видео
            video: [
            {id: 0, 
            img: image1, 
            title: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
            videoUrl: 'https://www.youtube.com/embed/Ff-egBHVpd4',
            },
            {id: 1, 
            img: image2, 
            title: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
            videoUrl: 'https://www.youtube.com/embed/8nZlrjasG5c',
            },
            {id: 2, 
            img: image3, 
            title: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
            videoUrl: 'https://www.youtube.com/embed/sW4BrJHZBmE',
            },
            {id: 3, 
            img: image4, 
            title: 'Some Vehicles VAC Offers!',
            videoUrl: 'https://www.youtube.com/embed/pwq5MQLKcwQ',
            },
             ],
            
        }
    },
    methods:{
        selectVideo(item){
            this.selectedVideo = item;
            const body = document.querySelector('body');
            body.classList.add('lock');
        },
        closePopUp(){
            this.selectedVideo = null
            const body = document.querySelector('body');
            body.classList.remove('lock');
        },
        onePagination(event){
            event.preventDefault();
            this.currentVideo = this.video;
            if (this.currentPagination !== 'one') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.currentPagination = 'one';
            }
            
        },
        twoPagination(event){
            event.preventDefault();
            if (!this.reversedVideo) {
                this.reversedVideo = [...this.video].reverse();
            };
            if (this.currentPagination !== 'two') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.currentPagination = 'two';
            }
            this.currentVideo = this.reversedVideo;
        },
        threePagintation(event){
            event.preventDefault();
            if(!this.deleteVideo){
                this.deleteVideo = [this.video[3]];  
            };
            if (this.currentPagination !== 'three') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.currentPagination = 'three';
            }
            
            this.currentVideo = this.deleteVideo;            
        },
    },
    mounted() {
        this.currentVideo = this.video;
    },
}
</script>

<style lang="scss" scoped>
.video{
    margin: 40px 0px;
    &__content{
      max-width: 100%;
      width: 100%;
        &-item{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 40px;
            .card{
                width: 47.5%;
                transition: all .3s;
                cursor: pointer;
                img{
                    display: block;
                    max-width: 100%;
                    width: 100%;
                }
                .card-img{
                    position: relative;
                    .card-play{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        margin-left: -25px;
                        margin-top: -25px;
                    }
                }
                h3{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 140%;
                    color: #41456B;
                    margin-top: 20px;
                }
                @media(max-width: 700px){
                    h3{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 140%;
                    }
                }
            }
            @media(max-width: 1000px){
                .card{
                    width: 100%;
                    margin-top: 40px;
                }
            }
             @media(max-width: 700px){
                .card{
                    margin-top: 20px;
                }
            }
            .modal {
                z-index: 100;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(8,8,8,.7);
                display: flex;
                width: 100%;
                transition: all .3s;
                cursor: default;
                .flex{
                    position: relative;
                    margin: auto;
                    max-width: 900px;
                    width: 90%;
                    aspect-ratio: 1/.625;
                    filter: drop-shadow(0 0 10px rgba(0,0,0,.25));
                    transition: all .3s;
                    padding-right: 34px;
                    .close{
                        cursor: pointer;
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }
                @media(max-width: 1000px){
                    .flex{
                        padding-right: 0;
                        padding-top: 30px;
                    }
                    
                }
              }
              
              
        }
        @media(max-width: 1000px){
            &-item{
                gap: 0;
            }
        }
        &-pagintation{
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
    @media(max-width: 700px){
        &__content{
            margin-top: 30px;
        }
    }
}
@media(max-width: 700px){
    .video{
        margin: 30px 0px;
    }
}
</style>