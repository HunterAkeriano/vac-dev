<template>
    <div class="inventory">
        <div class="container">
            <div class="inventory__content">
                
                <div class="inventory__content-left" :class="{'active': menuBlock}">
                    <div class="menu">
                        <div class="menu-close" @click="menuBlockClose">
                            <img src="../assets/images/inventory/icons/closet.svg" alt="">
                        </div>
                        
                         <h3 class="media-h3">Detailed search</h3>
                         <p class="media-p" v-if="type1 || type2 || type3 || type4 || type5 || type6 || type7 || korobTrue || korobFalse || priceChange[0] > 1000 || priceChange[1] < 100000 || yearChange[0] > 1990 || yearChange[1] < 2023 || kmChange < 500000 || oneCarInput || twoCarInput || threeCarInput|| fourCarInput || fiveCarInput || sixCarInput ||  findCar" @click="clearFilters">Clear filters</p>
                    </div>
                    
                    <div class="accordeons">
                        <div class="accordeon-item" ref="accordionOne">
                            <div class="flex"   @click="oneTabMenu">
                                <h4 class="title">Make, Model</h4>
                                <img :class="{'active': oneTab}" src="../assets/images/inventory/strelka.svg" alt="">
                            </div>
                            <div class="accordeon-content" :class="{'active': oneTab}">
                              <div class="search-input" @click="openTabOne = true" >
                                <h3>Make</h3>
                                <div class="input">
                                    <input v-model="searchTerm"    type="text" placeholder="Search Make...">
                                    <div class="input-search-one" :class="{'active': openTabOne}">
                                       <p v-for="(car, idx) in filtredName" :key="idx" @click="handleClickOne(car)">{{car}}</p>
                                       <p v-if="filtredName.length == 0">Nothing found</p>
                                    </div>
                                   
                                </div>
                              </div>
                              <div class="search-input">
                                <h3>Model</h3>
                                <div class="input">
                                    <input v-model="searchModel" @click="openTwoTab = true"   :disabled="!selectedCar" type="text" placeholder="Search Model...">
                                    <div class="input-search-one" :class="{'active': openTwoTab}" v-if="selectedCar">
                                        <p v-for="(car, idx) in filtredModel" :key="idx" @click="handleClickTwo(car)"> {{ getModel(car) }}</p>
                                        <p v-if="filtredModel.length == 0">Nothing found</p>
                                    </div>
                                   
                                </div>
                              </div>
                            </div>
                            <div class="label-cars" v-if="oneCarInput || twoCarInput || threeCarInput || fourCarInput || fiveCarInput || sixCarInput">
                                <div class="label" v-if="oneCarInput">
                                    <img @click="closePorshe" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Porsche</p>
                                </div>
                                <div class="label" v-if="oneModelInput">
                                    <img @click="oneModelInput = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Panamera II Turbo S E-Hybrid</p>
                                </div>
                                <div class="label" v-if="twoCarInput">
                                    <img @click="closeMitsubishi" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Mitsubishi</p>
                                </div>
                                <div class="label" v-if="twoModelInput">
                                    <img @click="twoModelInput = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Outlander III Restyling 3</p>
                                </div>
                                <div class="label" v-if="threeCarInput">
                                    <img @click="closeMers" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Mercedes-Benz</p>
                                </div>
                                <div class="label" v-if="threeModelInput">
                                    <img @click="threeModelInput = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>CLA I (C117, X117) 200</p>
                                </div>
                                <div class="label" v-if="fourModelInput">
                                    <img @click="fourModelInput = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>W124 420</p>
                                </div>
                                <div class="label" v-if="fourCarInput">
                                    <img @click="closeVaz" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>ВАЗ</p>
                                </div>
                                <div class="label" v-if="fiveModelInput">
                                    <img @click="fiveModelInput = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>21011</p>
                                </div>
                                <div class="label" v-if="fiveCarInput">
                                    <img @click="closeZil" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>ЗИЛ</p>
                                </div>
                                <div class="label" v-if="sixModelInput">
                                    <img @click="sixModelInput = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>130</p>
                                </div>
                                <div class="label" v-if="sixCarInput">
                                    <img @click="closeGaz" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>ГАЗ</p>
                                </div>
                                <div class="label" v-if="sevenModelInput">
                                    <img @click="sevenModelInput = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>52</p>
                                </div>
                               
                            </div>
                        </div>
                        <div class="accordeon-item" ref="accordionTwo">
                            <div class="flex"   @click="twoTabMenu">
                                <h4 class="title">Body type</h4>
                                <img :class="{'active': twoTab}" src="../assets/images/inventory/strelka.svg" alt="">
                            </div>
                            <div class="accordeon-content" :class="{'active': twoTab}">
                              <div class="opros">
                                <div class="item">
                                    <input type="checkbox" id="oneCar" v-model="type1">
                                    <label for="oneCar"><img src="../assets/images/inventory/icons/Truck.svg" alt=""><span>Trucks</span> </label>
                                </div>
                                <div class="item">
                                    <input type="checkbox" id="twoCar" v-model="type2">
                                    <label for="twoCar"><img src="../assets/images/inventory/icons/SUV.svg" alt=""><span>SUV</span> </label>
                                </div>
                                <div class="item">
                                    <input type="checkbox" id="threeCar" v-model="type3">
                                    <label for="threeCar"><img src="../assets/images/inventory/icons/Car.svg" alt=""><span>Sedan</span> </label>
                                </div>
                                <div class="item">
                                    <input type="checkbox" id="fourCar" v-model="type4">
                                    <label for="fourCar"><img src="../assets/images/inventory/icons/SUV.svg" alt=""><span>Hatchback</span> </label>
                                </div>
                                <div class="item">
                                    <input type="checkbox" id="fiveCar" v-model="type5">
                                    <label for="fiveCar"><img src="../assets/images/inventory/icons/Car.svg" alt=""><span>Coupe</span> </label>
                                </div>
                                <div class="item">
                                    <input type="checkbox" id="sixCar" v-model="type6">
                                    <label for="sixCar"><img src="../assets/images/inventory/icons/last.svg" alt=""><span>Convertiable</span> </label>
                                </div>
                                <div class="item">
                                    <input type="checkbox" id="sevenCar" v-model="type7">
                                    <label for="sevenCar"><img src="../assets/images/inventory/icons/SUV.svg" alt=""><span>VAN</span> </label>
                                </div>
                                
                              </div>
                            </div>
                            <div class="flex-body" v-if="type1 || type2 || type3 || type4 || type5 || type6 || type7">
                                <div class="item" v-if="type1">
                                    <img @click="type1 = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Trucks</p>
                                </div>
                                <div class="item"  v-if="type2">
                                    <img @click="type2 = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>SUV</p>
                                </div>
                                <div class="item"  v-if="type3">
                                    <img @click="type3 = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Sedan</p>
                                </div>
                                <div class="item"  v-if="type4">
                                    <img @click="type4 = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Hatchback</p>
                                </div>
                                 <div class="item"  v-if="type5">
                                    <img @click="type5 = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Coupe</p>
                                </div>
                                <div class="item"  v-if="type6">
                                    <img @click="type6 = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Convertiable</p>
                                </div>
                                <div class="item"  v-if="type7">
                                    <img @click="type7 = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>VAN</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordeon-item" ref="accordionThree">
                            <div class="flex"   @click="threeTabMenu">
                                <h4 class="title">Transmission</h4>
                                <img :class="{'active': threeTab}" src="../assets/images/inventory/strelka.svg" alt="">
                            </div>
                            <div class="accordeon-content" :class="{'active': threeTab}">
                              <div class="opros">
                                <div class="item">
                                    <input v-model="korobTrue" type="checkbox" id="auto">
                                    <label for="auto"><span>Automatic</span> </label>
                                </div>
                                <div class="item">
                                    <input v-model="korobFalse" type="checkbox" id="manual">
                                    <label for="manual"><span>Manual</span> </label>
                                </div>
                                
                                
                              </div>
                            </div>
                            <div class="flex-korob" v-if="korobTrue || korobFalse">
                                <div class="label" v-if="korobTrue">
                                    <img @click="korobTrue = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Automatic</p>
                                </div>
                                <div class="label" v-if="korobFalse">
                                    <img @click="korobFalse = false" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>Manual</p>
                                </div>
                            </div>
                        </div>
                         <div class="accordeon-item" ref="accordionFour">
                            <div class="flex"   @click="fourTabMenu">
                                <h4 class="title">Price</h4>
                                <img :class="{'active': fourTab}" src="../assets/images/inventory/strelka.svg" alt="">
                            </div>
                            <div class="accordeon-content" :class="{'active': fourTab}">
                              <div class="price">
                                <div class="text">
                                    <h2>$ {{priceChange[0]}}</h2>
                                    <h2>$ {{priceChange[1]}}</h2>
                                </div>
                                <div class="input">
                                    <Slider 
                                    
                                    :min="1000"
                                    :max="100000"
                                    :step="1000"
                                    v-model="priceChange"
                                    
                                    />
                                     
                                </div>
                              </div>
                            </div>
                            <div class="label-flex">
                                <div class="label label-price" v-if="priceChange[0] > 1000 || priceChange[1] < 100000">
                                    <img @click="sbrosPrice" src="../assets/images/inventory/icons/closet.svg" alt="">
                                    <p>${{priceChange[0]}} - ${{priceChange[1]}} </p>
                                </div>
                            </div>
                           
                        </div>
                        <div class="accordeon-item" ref="accordionFive">
                            <div class="flex"   @click="fiveTabMenu">
                                <h4 class="title">Year</h4>
                                <img :class="{'active': fiveTab}" src="../assets/images/inventory/strelka.svg" alt="">
                            </div>
                            <div class="accordeon-content" :class="{'active': fiveTab}">
                              <div class="price">
                                <div class="text">
                                    <h2>{{yearChange[0]}}</h2>
                                    <h2>{{yearChange[1]}}</h2>
                                </div>
                                <div class="input">
                                    <Slider 
                                    :min="1990"
                                    :max="2023"
                                    :step="1"
                                    v-model="yearChange"
                                    />
                                </div>
                              </div>
                            </div>
                            <div class="label-flex">

                           
                            <div class="label label-km" v-if="yearChange[0] > 1990 || yearChange[1] < 2023">
                                <img @click="sbrosYear" src="../assets/images/inventory/icons/closet.svg" alt="">
                                <p>{{yearChange[0]}} - {{yearChange[1]}} </p>
                            </div>
                                </div>
                        </div>
                        <div class="accordeon-item" ref="accordionSix">
                            <div class="flex"   @click="sixTabMenu">
                                <h4 class="title">Kilometres</h4>
                                <img :class="{'active': sixTab}" src="../assets/images/inventory/strelka.svg" alt="">
                            </div>
                            <div class="accordeon-content" :class="{'active': sixTab}">
                              <div class="price">
                                <div class="text">
                                    <h2>{{kmChange}} or less</h2>
                                </div>
                                <div class="input">
                                    <Slider 
                                    :min="1000"
                                    :max="500000"
                                    :step="1000"
                                    v-model="kmChange"/>
                                </div>
                              </div>
                            </div>
                            <div class="label-flex">
                            <div class="label" v-if="kmChange < 500000">
                                <img @click="kmChange = 500000" src="../assets/images/inventory/icons/closet.svg" alt="">
                                <p>{{kmChange}}</p>
                            </div>
                            </div>
                           
                        </div>
                    </div>

                 
                </div>
                <div class="block" :class="{'active': menuBlock}" @click="menuBlockClose"></div>
                <div class="inventory__content-right">
                    <div class="searched">
                        <div class="flex-lock">
                            <div class="none-left" @click="menuBlockOpen">
                                <img src="../assets/images/inventory/icons/Filter.svg" alt="">
                                <h3>Search Filter</h3>
                            </div>
                            <div class="input">
                                <div class="flex">
                                    <input type="text" v-model="findCar" placeholder="Find a dream car...">
                                    
                                </div>
                                
                                <img src="../assets/images/inventory/share-icon.svg" alt="">
                            </div>
                        </div>
                       


                        <div class="sorted">
                            <h3>Sorted by </h3>
                                <div class="open-tab">
                                    <div class="tab" >
                                     <div class="select-tab" @click="openSorted">{{ menuElement }} <img :class="{'active': sortedMenu}" src="../assets/images/inventory/strelka.svg" alt=""></div>
                                     <div class="options" :class="{'active': sortedMenu}">
                                        <div class="text" @click="recomendationsSort">Recommendations</div>
                                        <div class="text" @click="newestSort">Newest inventory</div>
                                        <div class="text" @click="lowestSort">Lowest price</div>
                                        <div class="text" @click="highestSort">Highest price</div>
                                     </div>
                                    </div>
                               
                            </div>
                           
                        </div>
                    </div>
                    <div class="blocks" :class="{'active': paginatedCars.length == 0}">
                        <div class="card" v-for="item in paginatedCars" :key="item.id">
                            <div class="swiper-container" ref="swiper" >
                                <!-- <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="photo in item.photos" :key="photo.id">
                                        <img :src="photo.img" alt="">
                                    </div>
                                </div> -->
                                <!-- <div class="swiper-pagination"></div> -->
                                <Swiper
                                :modules="modules"
                                :slides-per-view="1"
                                
                                :pagination="{ clickable: true }"
                                :scrollbar="{ draggable: false, progress: true }"
                                
                              >
                              <swiper-slide  v-for="photo in item.photos" :key="photo.id"> <img :src="photo.img" alt=""> </swiper-slide>
                              </Swiper>
                            </div>
                            <router-link :to="{ path: `/carpage/${item.id}` }">
                            <div class="block-text">
                                <div class="title">
                                    <h3>{{item.name}}</h3>
                                </div>
                                <div class="price">
                                    <h4>{{item.price}}</h4>
                                </div>
                                <div class="info">
                                    <h5>{{item.year}} <span>|</span> {{item.type}}  <span>|</span> {{item.trans}}</h5>
                                </div>
                                <div class="km">
                                    <h4>{{item.km}}</h4>
                                </div>
                            </div>
                            </router-link>
                        </div>
                    </div>
                    <div  class="pagination" v-if="showPagination">
                        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ 'active': isActivePage(page) }"> <span>{{ page }} </span> </button>
                      </div>

                    <div class="nonblock" v-if="paginatedCars.length == 0">
                        <img src="../assets/images/inventory/icons/Sedan.svg" alt="">
                        <h3>Unfortunately there are no matches for your query.</h3>
                        <p>Try using other filter settings or request a car of your choice.</p>
                        <router-link to="/quiz">Request a car</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.scss"
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// фотки для слайдера
import panamera1 from '../assets/images/inventory/swipers/panamera.png'
import panamera2 from '../assets/images/inventory/swipers/panamera2.png'
import panamera3 from '../assets/images/inventory/swipers/panamera3.jpg'

import mits1 from '../assets/images/inventory/swipers/mits1.jpg'
import mits2 from '../assets/images/inventory/swipers/mits2.jpg'
import mits3 from '../assets/images/inventory/swipers/mits3.jpg'
import mits4 from '../assets/images/inventory/swipers/mits4.jpg'

import mers1 from '../assets/images/inventory/swipers/mers1.jpg'
import mers2 from '../assets/images/inventory/swipers/mers2.jpg'
import mers3 from '../assets/images/inventory/swipers/mers3.jpg'


import m1 from '../assets/images/inventory/swipers/m1.jpg'
import m2 from '../assets/images/inventory/swipers/m2.jpg'
import m3 from '../assets/images/inventory/swipers/m3.jpg'


import vaz1 from '../assets/images/inventory/swipers/vaz1.jpg'
import vaz2 from '../assets/images/inventory/swipers/vaz2.jpg'
import vaz3 from '../assets/images/inventory/swipers/vaz3.jpg'
import vaz4 from '../assets/images/inventory/swipers/vaz4.jpg'



import zil1 from '../assets/images/inventory/swipers/zil1.jpg'
import zil2 from '../assets/images/inventory/swipers/zil2.jpg'
import zil3 from '../assets/images/inventory/swipers/zil3.jpg'


import gaz1 from '../assets/images/inventory/swipers/gaz1.jpg'
import gaz2 from '../assets/images/inventory/swipers/gaz2.jpg'
import gaz3 from '../assets/images/inventory/swipers/gaz3.jpg'
export default{
    components:{
         Slider,
         Swiper,
         SwiperSlide,
    },
    data(){
        return{
           nameCar: ['Porsche', 'Mitsubishi', 'Mercedes-Benz', 'ВАЗ', 'ЗИЛ', 'ГАЗ'],
        //    modelCar: ['Panamera II Turbo S E-Hybrid', 'Outlander III Restyling 3', 'CLA I (C117, X117) 200', 'W124 420', '130', '52'],
        // modelCar: {
        //     'Porsche': ['Panamera II Turbo S E-Hybrid'],
        //     'Mitsubishi': ['Outlander III Restyling 3'],
        //     'Mercedes-Benz': ['CLA I (C117, X117) 200', 'W124 420'],
        //     'ВАЗ': ['2101'],
        //     'ЗИЛ': ['130'],
        //     'ГАЗ': ['52'],
        // },
        modelCar: [
            {id: 0,
            name: 'Porsche',
            model: 'Panamera II Turbo S E-Hybrid',
            },
            {
            id: 1,
            name: 'Mitsubishi',
            model: 'Outlander III Restyling 3',
            },
            {
            id: 2,
            name: 'Mercedes-Benz',
            model: 'CLA I (C117, X117) 200',
            },
            {
            id: 3,
            name: 'Mercedes-Benz',
            model: 'W124 420',
            },
            {
            id: 4,
            name:    'ВАЗ',
            model: '2101', 
            },
            {
            id: 5,
            name:    'ЗИЛ',
            model: '130', 
            },
            {
            id: 6,
            name:    'ГАЗ',
            model: '52', 
            }
        ],
        oneCarInput: false,
        twoCarInput: false,
        threeCarInput: false,
        fourCarInput: false,
        fiveCarInput: false,
        sixCarInput: false,
        openTwoTab: false,
        oneModelInput: false,
        twoModelInput: false,
        threeModelInput: false,
        fourModelInput: false,
        fiveModelInput: false,
        sixModelInput: false,
        sevenModelInput: false,
        findCar: '',
            openTabOne: false,
            selectedModel: null,
           searchTerm: '',
           searchModel: '',
           selectedCar: null,
            itemsPerPage: 6,
            currentPage: 1,
            type1: false,
            type2: false,
            type3: false,
            type4: false,
            type5: false,
            type6: false,
            type7: false,
            modules: [Navigation, Pagination, Scrollbar],
            korobTrue: false,
            korobFalse: false,
            menuBlock: false,
            valueSlider: 20,
            // табы левого мнею
            oneTab: false,
            twoTab: false,
            threeTab: false,
            fourTab: false,
            fiveTab: false,
            sixTab: false,
            priceChange: [1000, 100000] ,
            sliderValue1: 25,
            sliderValue2: 75,
            yearChange: [1990, 2023],
            kmChange: 500000,
            sortedMenu: false,
            menuElement: 'Recommendations',
            itemArr: null,
            copyCars: [],
            swiper: null,

            yearsCars: null,
            // массив машин
            cars: [
                {
                    id: 0,
                    photos: [
                        {id: 0, img: panamera1},
                        {id: 1, img: panamera2},
                        {id: 2, img: panamera3}
                    ],
                    name: 'Porsche Panamera II Turbo S E-Hybrid',
                    make: 'Porsche',
                    model: 'Panamera II Turbo S E-Hybrid',
                    price: '$ 69 240',
                    sum: 69240,
                    year: '2020 year',
                    yearSum: 2020,
                    type: 'Sedan',
                    typed: 3,
                    modelType: 1,
                    makeType: 1,
                    trans: 'Auto',
                    korob: true,
                    km: '20 000',
                    kmSum: 20000,
                    


                },
                {
                    id: 1,
                    photos: [
                        {id: 0, img: mits1},
                        {id: 1, img: mits2},
                        {id: 2, img: mits3},
                        {id: 3, img: mits4}
                    ],
                    name: 'Mitsubishi Outlander III Restyling 3',
                    make: 'Mitsubishi',
                    model: 'Outlander III Restyling 3',
                    price: '$ 23 500',
                    sum: 23500,
                    year: '2004 year',
                    yearSum: 2004,
                    type: 'SUV',
                    typed: 2,
                    modelType: 2,
                    makeType: 2,
                    trans: 'Manual',
                    korob: false,
                    km: '20 000',
                    kmSum: 20000,

                },
                {
                    id: 2,
                    photos: [
                        {id: 0, img: mers1},
                        {id: 1, img: mers2},
                        {id: 2, img: mers3}
                    ],
                    name: 'Mercedes-Benz CLA I (C117, X117) 200',
                    make: 'Mercedes-Benz',
                    model: 'CLA I (C117, X117) 200',
                    price: '$ 21 400',
                    sum: 21400,
                    year: '2011 year',
                    yearSum: 2011,
                    type: 'Coupe',
                    typed: 5,
                    modelType: 3,
                    makeType: 3,
                    trans: 'Auto',
                    korob: true,
                    km: '20 000',
                    kmSum: 20000,

                },
                {
                    id: 3,
                    photos: [
                        {id: 0, img: m1},
                        {id: 1, img: m2},
                        {id: 2, img: m3}
                    ],
                    name: 'Mercedes-Benz W124 420',
                    make: 'Mercedes-Benz',
                    model: 'W124 420',
                    price: '$ 9 500',
                    sum: 9500,
                    year: '2012 year',
                    yearSum: 2012,
                    type: 'Sedan',
                    typed: 3,
                    modelType: 3,
                    makeType: 4,
                    trans: 'Manual',
                    korob: false,
                    km: '20 000',
                    kmSum: 20000,

                },
                {
                    id: 4,
                    photos: [
                        {id: 0, img: vaz1},
                        {id: 1, img: vaz2},
                        {id: 2, img: vaz3},
                        {id: 3, img: vaz4}
                    ],
                    name: 'ВАЗ 21011 Жигули',
                    price: '$ 1 000',
                    make: 'ВАЗ',
                    model: '2101',
                    sum: 1000,
                    year: '1990 year(69)',
                    yearSum: 1990,
                    type: 'Sedan',
                    typed: 3,
                    modelType: 4,
                    makeType: 5,
                    trans: 'Manual',
                    korob: false,
                    km: '360 000',
                    kmSum: 360000,

                },
                {
                    id: 5,
                    photos: [
                        {id: 0, img: zil1},
                        {id: 1, img: zil2},
                        {id: 2, img: zil3},
                    ],
                    name: 'ЗИЛ 130',
                    make: 'ЗИЛ',
                    model: '130',
                    price: '$ 4 000',
                    sum: 4000,
                    year: '1991 year',
                    yearSum: 1991,
                    type: 'Trucks',
                    typed: 1,
                    modelType: 5,
                    makeType: 6,
                    trans: 'Manual',
                    korob: false,
                    km: '120 000',
                    kmSum: 120000,

                },
                {
                    id: 6,
                    photos: [
                        {id: 0, img: gaz1},
                        {id: 1, img: gaz2},
                        {id: 2, img: gaz3},
                    ],
                    name: 'ГАЗ 52',
                    make: 'ГАЗ',
                    model: '52',
                    price: '$ 1 500',
                    sum: 1500,
                    year: '1998 year',
                    yearSum: 1998,
                    type: 'Trucks',
                    typed: 1,
                    modelType: 6,
                    makeType: 7,
                    trans: 'Manual',
                    korob: false,
                    km: '240 000',
                    kmSum: 240000,

                },
            ],
        }
    },
    methods:{
        closePorshe(){
            this.oneCarInput = false;
            this.oneModelInput = false;
            this.selectedModel = null;
            this.selectedCar = null;

        },
        closeMitsubishi(){
            this.twoCarInput = false;
            this.twoModelInput = false;
            this.selectedModel = null;
            this.selectedCar = null;
        },
        closeMers(){
            this.threeCarInput = false;
            this.threeModelInput = false;
            this.fourModelInput = false;
            this.selectedModel = null;
            this.selectedCar = null;
        },
        closeVaz(){
            this.fourCarInput = false;
            this.fiveModelInput = false;
            this.selectedModel = null;
            this.selectedCar = null;
        },
        closeZil(){
            this.fiveCarInput = false;
            this.sixModelInput = false;
            this.selectedModel = null;
            this.selectedCar = null;
        },
        closeGaz(){
            this.sixCarInput = false;
            this.sevenModelInput = false;
            this.selectedModel = null;
            this.selectedCar = null;
        },
        closeSorted(){
            this.selectedModel = null;
            this.selectedCar = null;
        },
        handleClickOne(car) {
            this.selectedCar = car;
            this.selectedModel = null;
            this.searchTerm = '';
            if(car == 'Porsche'){
                this.oneCarInput = 1;
            }
            if(car == 'Mitsubishi'){
                this.twoCarInput = 2;
            }
            if(car == 'Mercedes-Benz'){
                this.threeCarInput = 3;
            }
            if(car == 'ВАЗ'){
                this.fourCarInput = 4;
            }
            if(car == 'ЗИЛ'){
                this.fiveCarInput = 5;
            }
            if(car == 'ГАЗ'){
                this.sixCarInput = 6;
            }
           
            
        },
        handleClickTwo(car) {
            this.selectedModel = car;
            this.searchModel = '';
            if(car.id === 0){
                this.oneModelInput = 1;
            }
            if(car.id === 1){
                this.twoModelInput = 2;
            }
            if(car.id === 2){
                this.threeModelInput = 3;
            }
             if(car.id === 3){
                this.fourModelInput = 4;
            }
            if(car.id === 4){
                this.fiveModelInput = 5;
            }
            if(car.id === 5){
                this.sixModelInput = 6;
            }
            if(car.id === 6){
                this.sevenModelInput = 7;
            }
            
        },
  

        isActivePage(page) {
            return this.currentPage === page;
        },
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                window.scrollTo(0, 0);

            }
        },
        clearFilters(){
            this.priceChange[0] = 1000;
            this.priceChange[1] = 100000;
            this.yearChange[0] = 1990;
            this.yearChange[1] = 2023;
            this.kmChange = 500000;
            this.korobTrue = false;
            this.korobFalse = false;
            this.type1 = false;
            this.type2 = false;
            this.type3 = false;
            this.type4 = false;
            this.type5 = false;
            this.type6 = false;
            this.type7 = false;
            this.selectedCar = null;
            this.findCar = '';
            this.selectedModel = null;
            this.oneCarInput = false;
            this.twoCarInput = false;
            this.threeCarInput = false;
            this.fourCarInput = false;
            this.fiveCarInput = false;
            this.sixCarInput = false;
            this.oneModelInput = false;
            this.twoModelInput = false;
            this.threeModelInput = false;
            this.fourModelInput = false;
            this.fiveModelInput = false;
            this.sixModelInput = false;
            this.sevenModelInput = false;
        },
        sbrosPrice(){
            this.priceChange[0] = 1000;
            this.priceChange[1] = 100000;
        },
        sbrosYear(){
            this.yearChange[0] = 1990;
            this.yearChange[1] = 2023;
        },
        menuBlockOpen(){
            this.menuBlock = true;
            const body = document.querySelector('body');
            body.classList.add('lock');
                
        },
        menuBlockClose(){
            this.menuBlock = false;
            const body = document.querySelector('body');
            body.classList.remove('lock');
        },
        openSorted(){
            this.sortedMenu = !this.sortedMenu;
        },
        recomendationsSort(){
            this.menuElement = 'Recommendations';
            this.sortedMenu = false;
            this.paginatedCars.sort((a, b) => a.id - b.id)
        },
        newestSort(){
            this.sortedMenu = false;
            this.menuElement = 'Newest inventory';
            this.paginatedCars.sort((a, b) => a.yearSum - b.yearSum).reverse(); 
        },
        lowestSort(){
            this.sortedMenu = false;
            this.menuElement = 'Lowest price';
            this.paginatedCars.sort((a, b) => a.sum - b.sum); 
        },
        highestSort(){
            this.sortedMenu = false;
            this.menuElement = 'Highest price';
            this.paginatedCars = this.paginatedCars.sort((a, b) => a.sum - b.sum).reverse(); 
            
        },
        oneTabMenu(){
            this.oneTab = !this.oneTab;
            this.$refs.accordionOne.focus();
        },
        twoTabMenu(){
            this.twoTab = !this.twoTab;
            this.$refs.accordionTwo.focus();
        },
        threeTabMenu(){
            this.threeTab = !this.threeTab;
            this.$refs.accordionThree.focus();

        },
        fourTabMenu(){
            this.fourTab = !this.fourTab;
            this.$refs.accordionFour.focus();
        },
        fiveTabMenu(){
            this.fiveTab = !this.fiveTab;
            this.$refs.accordionFive.focus();

        },
        sixTabMenu(){
            this.sixTab = !this.sixTab;
            
            this.$refs.accordionSix.focus();
        },
        filterMenu(){
            let priceChen1 = this.priceChange[0];
            let priceChen2 = this.priceChange[1];
            this.itemArr =  this.cars.filter(function(item){
                return item.sum >= priceChen1 && item.sum <= priceChen2;
            })
            this.copyCars = this.itemArr;
        },


        // сортировка по ценам полузки
        setSum(){
            this.filterMenu();
        },
        setYear(){
            let year1 = this.yearChange[0];
            let year2 = this.yearChange[1];
            this.yearCars =  this.cars.filter(function(item){
                return item.yearSum >= year1 && item.yearSum <= year2;
            })
            this.copyCars =  this.yearCars ;
        },
        initSwiper() {
           
            this.swiper = new Swiper('.swiper-container', {
            modules: [Navigation, Pagination],
            observeParents: true,
            pagination: {
                el: '.swiper-pagination',
                type: "progressbar",
            },
            });
  },
  getModel(car) {
    console.log('model:', car.model1);
      return car.model || car.model1 ||   '';
    }
   

      
  },
  

    computed: {
    filteredCars() {
    
        return this.cars.filter(car => {
       
            return (this.priceChange.length === 0 || (car.sum >= this.priceChange[0] && car.sum <= this.priceChange[1])) &&
            (this.yearChange.length === 0 || (car.yearSum >= this.yearChange[0] && car.yearSum <= this.yearChange[1])) &&
            (this.kmChange === 500000 || car.kmSum <= this.kmChange) &&
            (this.korobTrue && car.korob || this.korobFalse && !car.korob || !this.korobTrue && !this.korobFalse) &&
            ((!this.type1 && !this.type2 && !this.type3 && !this.type4 && !this.type5 && !this.type6 && !this.type7) || (this.type1 && car.typed === 1) || (this.type2 && car.typed === 2) || (this.type3 && car.typed === 3) || (this.type4 && car.typed === 4) || (this.type5 && car.typed === 5) || (this.type6 && car.typed === 6) || (this.type7 && car.typed === 7))&&
            // (this.selectedCar === null || this.selectedCar.length === 0 || this.selectedCar.includes(car.make)) &&
            //  oneModelInput: false,
            // twoModelInput: false,
            // threeModelInput: false,
            // fourModelInput: false,
            // fiveModelInput: false,
            // sixModelInput: false,
            // sevenModelInput: false,
            ((!this.oneCarInput && !this.twoCarInput && !this.threeCarInput && !this.fourCarInput && !this.fiveCarInput && !this.sixCarInput ) || (this.oneCarInput && car.modelType === 1) || (this.twoCarInput && car.modelType === 2) || (this.threeCarInput && car.modelType === 3) || (this.fourCarInput && car.modelType === 4) || (this.fiveCarInput && car.modelType === 5) || (this.sixCarInput && car.modelType === 6))&&
            ((!this.oneModelInput && !this.twoModelInput && !this.threeModelInput && !this.fourModelInput && !this.fiveModelInput && !this.sixModelInput && !this.sevenModelInput ) 
            || (this.oneModelInput && car.makeType === 1) || (this.twoModelInput && car.makeType === 2) || (this.threeModelInput && car.makeType === 3) || (this.fourModelInput && car.makeType === 4) || (this.fiveModelInput && car.makeType === 5) || (this.sixModelInput && car.makeType === 6) || (this.sevenModelInput && car.makeType === 7))&&
            // (this.selectedModel === null || this.selectedModel.length === 0 || this.selectedModel.includes(car.model)) &&
            (this.findCar === null || this.findCar.length === 0 || car.name.toLowerCase().includes(this.findCar.toLowerCase()));;
        });
    },
   
   
        paginatedCars() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredCars.slice(startIndex, endIndex);
        },
        totalPages() {
            return Math.ceil((this.filteredCars.length + 1) / this.itemsPerPage);
        },
        showPagination() {
            return this.filteredCars.length >= 7;
        },
        filtredName(){
            return this.nameCar.filter(car => car.toLowerCase().includes(this.searchTerm.toLowerCase()));
        },
        // filtredModel(){
        //             if (this.searchModel) {
        //         const lowerCaseQuery = this.searchModel.toLowerCase();
        //         return this.modelCar.filter(car =>
        //         (car.model && car.model.toString().toLowerCase().includes(lowerCaseQuery)) ||
        //         (car.model1 && car.model1.toLowerCase().includes(lowerCaseQuery))
        //         );
        //     }
        //     return this.modelCar;
        //     },

        filtredModel(){
        if (this.searchModel) {
            const lowerCaseQuery = this.searchModel.toLowerCase();
            const selectedCar = this.nameCar.find(carName => carName === this.selectedCar);
            return this.modelCar.filter(car => car.name === selectedCar &&
            ((car.model && car.model.toString().toLowerCase().includes(lowerCaseQuery)) ||
            (car.model1 && car.model1.toLowerCase().includes(lowerCaseQuery)))
            );
        }
        const selectedCar = this.nameCar.find(carName => carName === this.selectedCar);
        return this.modelCar.filter(car => car.name === selectedCar);
        },

        },   
    watch: {
    priceChange: {
        handler() {
        this.filterMenu();
        },
        deep: true
    },
    yearChange: {
        handler(){
            this.setYear();
        },
        deep: true
    },
    kmChange: function() {
      this.filteredCars
    },
    korobTrue: function() {
      this.filteredCars
    },
    korobFalse: function() {
      this.filteredCars
    },
    type1: function(){
        this.filteredCars
    },
    type2: function(){
        this.filteredCars
    },
    type3: function(){
        this.filteredCars
    },
    type4: function(){
        this.filteredCars
    },
    type5: function(){
        this.filteredCars
    },
    type6: function(){
        this.filteredCars
    },
    type7: function(){
        this.filteredCars
    },
    filteredCars() {
      this.currentPage = 1;
      this.menuElement = 'Recommendations'
    }
    
   
},

}
</script>

<style lang="scss">



.inventory{
    margin-top: 120px;
    margin-bottom: 40px;
    &__content{
        display: flex;
        gap: 20px;
       
        .none-left{
            display: none;
            h3{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                color: #41456B;
                margin-top: 15px;
            }
            @media(max-width: 600px){
                h3{
                    display: none;
                }
            }
        }
        @media(max-width: 1020px){
            .none-left{
                display: flex;
                align-items: center;
                h3{
                    margin: 0;
                    margin-left: 10px;
                }
            }
        }
        &-left{
            width: 100%;
            max-width: 300px;
            .menu{
                display: flex;
                gap: 15px;

                .menu-close{
                    display: none;
                }
                .media-p{
                    margin: 0;
                    margin-top: 15px;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 159%;
                    color: #7481FF;
                    cursor: pointer;
                }
            }
            @media(max-width: 1020px){
                .menu{
                    max-width: 1400px;
                    padding: 0 15px;
                    margin: 0 auto;
                    position: relative;
                    h3{
                        margin: 0;
                    }
                    .menu-close{
                        display: block;
                        position: absolute;
                    }
                }
            }
           
            h3{
                margin-top: 15px;
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 25px;
                color: #41456B;
            }
            .accordeons{
                margin-top: 30px;
                .accordeon-item{
                    border: 1px solid #ccc;
                    cursor: default;
                    padding: 10px 20px;
                    margin-top: 10px;
                    .flex{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        cursor: pointer;
                        h4{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 159%;
                            color: #41456B;
                        }
                        img{
                            transition: all .3s
                        }
                        img.active{
                            transform: rotate(180deg);
                        }
                    }
                    .accordeon-content{
                        max-height: 0;
                        overflow: hidden;
                        transition: all 0.4s;
                        opacity: 0;
                        letter-spacing: 0.02em;
                        cursor: default;
                        .input-search-one{
                            opacity: 0;
                            visibility: hidden;
                        }
                        .search-input{
                            margin-top: 20px;
                            h3{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 16px;
                                line-height: 14px;
                            }
                            .input{
                                margin-top: 10px;
                                input{
                                    width: 100%;
                                     background: url('../assets/images/inventory/search.svg');
                                    background-position: right 20px center;
                                    background-repeat: no-repeat;
                                    padding: 10px 20px;
                                    padding-right: 50px;
                                     outline: none;
                                    border: 1px solid #d7d7d7;
                                      transition: all .4s;
                                    font-family: Gilroy,sans-serif;
                                    font-style: normal;
                                    font-weight: 500;
                                    font-size: 16px;
                                    line-height: 25px;
                                    color: #606276;
                                }
                                input:focus{
                                    outline: none;
                                    border: none;
                                    border: 1px solid black;
                                  }

                                  
                            }
                        }
                        .opros{
                            margin-top: 20px;
                            .item{
                                position: relative;
                                margin-top: 10px;
                                input{
                                    appearance: none;
                                    position: absolute;

                                }
                                label::after{
                                    content: '';
                                    display: block;
                                    width: 20px;
                                    height: 20px;
                                    background: url('../assets/images/inventory/check.svg') no-repeat;
                                    z-index: 2;
                                    position: absolute;
                                    left: 2px;
                                    top: 50%;
                                    margin-top: -7px;
                                    opacity: 0;
                                }
                                input:checked +  label::after{
                                    opacity: 1;
                                }
                                label{
                                    padding-left: 30px;
                                    display: flex;
                                    align-items: center;
                                    cursor: pointer;
                                    img{
                                        margin-left: 10px;
                                    }
                                    span{
                                        margin-left: 10px;
                                        font-family: 'Gilroy';
                                        font-style: normal;
                                        font-weight: 500;
                                        font-size: 16px;
                                        line-height: 159%;
                                        color: #41456B;
                                    }
                                }
                                label::before{
                                    content: '';
                                    width: 20px;
                                    height: 20px;
                                    border: 1px solid #D7D7D7;
                                    border-radius: 2px;
                                    background: white;
                                    position: absolute;
                                    left: 0px;
                                    top: 50%;
                                    margin-top: -10px;
                                    z-index: 1;
                                }
                            }
                        }
                        .price{
                            margin-top: 20px;
                            .text{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                h2{
                                    font-family: 'Gilroy';
                                    font-style: normal;
                                    font-weight: 600;
                                    font-size: 20px;
                                    line-height: 25px;
                                    color: #41456B;
                                }
                            }
                            .input{
                                margin-top: 20px;
                                padding: 0 10px;
                               

                               
                                  
                               
                                  
                                  
                            }
                        }
                    }
                    .accordeon-content.active{
                        max-height: 300px;
                        opacity: 1;
                        visibility: visible;
                        transition: all .3s;
                        opacity: 1;
                        padding-bottom: 10px;
                        .input-search-one{
                            padding: 10px 20px;
                            background: #FFFFFF;
                            /* Secondary / S color */
                            opacity: 1;
                            visibility: visible;
                            border: 1px solid #D7D7D7;
                            border-radius: 2px;
                            max-height: 0px;
                            height: 0;
                            overflow: hidden;
                            padding: 0;
                            transition: all .3s;
                            opacity: 0;
                            p{
                                margin: 0;
                                cursor: pointer;
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 16px;
                                line-height: 14px;
                                color: #41456B;
                                margin: 10px 0px;
                            }
                        }
                        .input-search-one.active{
                            max-height: 100px;
                            opacity: 1;
                            overflow: auto;
                            padding: 10px 20px;
                            height: auto;
                        }
                        .input-search-one::-webkit-scrollbar-thumb{
                            background-color: #ccc;
                            border-radius: 5px;
                        }
                        .input-search-one::-webkit-scrollbar{
                            width: 5px;
                            height: 5px;
                        }
                    }
                    .flex-korob{
                        display: flex;
                        align-items: center;
                        margin: 10px 0px;
                        gap: 10px;
                        .label{
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            background: rgba(116, 129, 255, 0.2);
                            border-radius: 2px;
                            padding: 10px;
                            img{
                                width: 10px;
                                height: 10px;
                                cursor: pointer;
                            }
                            p{
                                margin: 0;
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 14px;
                                color: #41456B;
                                text-transform: uppercase;
                            }
                        }
                    }
                    .label-flex{
                        display: flex;
                        .label{
                            display: flex;
                            align-items: center;
                            background: rgba(116, 129, 255, 0.2);
                            border-radius: 2px;
                           
                            margin-top: 20px;
                            padding: 10px;
                            gap: 10px;
                            img{
                                width: 10px;
                                height: 10px;
                                cursor: pointer;
                            }
                           
                            p{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 14px;
                                color: #41456B;
                                margin: 0;
                                
                                
                            }
                        }
                       
                    }
                    .flex-body{
                        display: flex;
                        flex-wrap: wrap;
                        gap: 15px;
                        margin: 10px 0px;
                        .item{
                            display: flex;
                            gap: 10px;
                            padding: 10px;
                            align-items: center;
                             background: rgba(116, 129, 255, 0.2);
                             border-radius: 2px;
                            img{
                                width: 10px;
                                height: 10px;
                                cursor: pointer;
                            }
                            p{
                                margin: 0;
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 14px;
                                color: #41456B;
                                text-transform: uppercase;
                            }
                        }
                    }
                    .label-cars{
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                        margin: 10px 0px;
                        .label{
                            display: flex;
                            align-items: center;
                            background: rgba(116, 129, 255, 0.2);
                            border-radius: 2px;
                            padding: 10px 10px;
                            gap: 10px;
                            img{
                                width: 10px;
                                height: 10px;
                                cursor: pointer;
                            }
                            p{
                                margin: 0;
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 14px;
                                color: #41456B;
                                text-transform: uppercase;
                            }
                        }
                    }
                   
                   
                }
                .accordeon-item:nth-child(1){
                    .accordeon-content.active{
                        max-height: 400px;
                        transition: all .3s;
                        opacity: 1;
                        padding-bottom: 10px;
                        
                    }
                }

            }
        }
        @media(max-width: 1020px){
            &-left{
                position: absolute;
                left: -100%;
                top: 115px;
                width: 100%;
                height: 50%;
                background: white;
                transition: all .3s;
                overflow: auto;
                z-index: 50;
                padding-bottom: 20px;
            }
            &-left.active{
                left: 0;
                width: 100%;
                max-width: 100%;
                height: 80%;
                z-index: 20;
                .menu{
                    justify-content: center;
                    gap: 70px;
                    .menu-close{
                        left: 15px;
                    }
                    p{
                        margin-top: 0;
                    }
                }
                .media-h3{
                    text-align: center;
                }
                .accordeons{
                    max-width: 300px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }

            }
            
        }
        @media(max-width: 600px){
            &-left.active{
                .menu{
                    gap: 20px;
                }
            }
        }
        @media(max-width: 640px){
            &-left.active{
                .accordeons{
                   margin-top: 40px;
                }

            }
            
        }
        .block.active{
            position: fixed;
            top: 200px;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.1);
        }
        &-right{
            display: flex;
            flex-direction: column;
            width: 100%;
            overflow: hidden;
            .searched{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                max-width: 100%;
                @media(max-width: 1020px){
                    .flex-lock{
                        display: flex;
                        .input{
                            margin-left: 40px;
                        }
                    }
                }
                .input{
                    display: flex;
                    align-items: center;
                    .flex{
                        position: relative;
                        input{
                            background: none;
                            outline: none;
                            border: 1px solid #d7d7d7;
                            border-radius: 2px;
                            padding: 10px 20px;
                            padding-right: 50px;
                            transition: all .4s;
                            font-family: Gilroy,sans-serif;
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 25px;
                            color: #606276;
                            max-width: 350px;
                            width: 100%;
                            background: url('../assets/images/inventory/search.svg');
                            background-position: right 20px center;
                            background-repeat: no-repeat;
                        }
                       
                    }
                    
                    img{
                        margin-left: 20px;
                    }
                }
                .sorted{
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    h3{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        /* identical to box height, or 29px */

                        letter-spacing: 0.02em;
                        color: #41456B;
                    }
                    @media(max-width: 1020px){
                        h3{
                            display: none
                        }
                    }
                        .open-tab{
                            z-index: 10;
                            position: relative;
                            height: 45px;
                            width: 240px;
                            .tab{
                                cursor: pointer;
                                width: 100%;
                                padding: 9px 20px;
                                border: 1px solid #d7d7d7;
                                position: absolute;
                                font-weight: 500;
                                font-size: 16px;
                                line-height: 25px;
                                color: #41456b;
                                background: #fff;
                                .select-tab{
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    img{
                                    transition: all .2s;
                                    }
                                    img.active{
                                        transform: rotate(180deg);
                                    }
                                }
                                .options{
                                    display: flex;
                                    flex-direction: column;
                                    gap: 5px;
                                    max-height: 0;
                                    overflow: hidden;
                                    transition: all .2s
                                    
                                }
                                .options.active{
                                    margin-top: 10px;
                                    max-height: 300px;
                                }
                            }
                        }
                }
                    

            }
            @media(max-width: 740px){
                .searched{
                    flex-direction: column;
                    .flex-lock{
                        width: 100%;
                        justify-content: space-between;
                        .input{
                            margin-left: 0;
                        }
                    }
                    .sorted{
                        margin-top: 10px;
                        max-width: 100%;
                        width: 100%;
                        .open-tab{
                            max-width: 100%;
                             width: 100%;
                        }
                    }
                }
            }
            .blocks{
                overflow: hidden;
                margin-top: 21px;
                display: flex;
                justify-content: space-between;
                gap: 20px;
                flex-wrap: wrap;
                padding: 0 10px;
                padding-bottom: 20px;
               
                .card{
                    overflow: hidden;
                    width: 48.5%;
                    margin-bottom: 20px;
                    background: #fff;
                    box-shadow: 0 20px 25px rgba(0,0,0,.1);
                    border-radius: 5px;
                    cursor: pointer;
                    overflow: hidden;
                    .swiper-container{
                        position: relative;
                        .swiper-wrapper{
                            .swiper-slide{
                                cursor: pointer;
                                img{
                                    width: 100%;
                                    aspect-ratio: 1/.515;
                                    -o-object-fit: cover;
                                    object-fit: cover;
                                }
                            }
                        }
                        .swiper-scrollbar-progress {
                            background-color: #007aff;
                            height: 3px;
                        }
                        .swiper-pagination-progressbar{
                            border-radius: 28px;
                        }
                        .swiper-scrollbar{
                           top: 93%;
                           height: 5px;
                           right: 1px;
                           left: 10px;
                           width: 95%;
                            border-radius: 50px;
                            background: rgba(0,0,0,.3);
                           .swiper-scrollbar-drag{
                            background: white;
                            border-radius: 50px;
                            opacity: .8;
                            
                           }
                        }
                        .swiper-pagination{
                            display: none;
                        }
                    }
                    .block-text{
                        padding: 20px;
                        .title{
                            h3{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 20px;
                                line-height: 25px;
                                color: #41456B;
                            }
                        }
                        .price{
                            margin: 10px 0px;
                            h4{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 20px;
                                line-height: 25px;
                                color: #7481FF;
                            }
                            
                        }
                        .info{
                            margin-top: 20px;
                            h5{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 180%;
                                color: #41456B;
                                span{
                                    margin: 0 20px;
                                    color: #D7D7D7;
                                }
                            }
                        }
                        .km{
                            margin-top: 10px;
                            h4{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 180%;
                                color: #41456B;
                            }
                        }
                    }
                }
                @media(max-width: 740px){
                    .card{
                        width: 100%;
                    }
                }
            }
            .blocks.active{
                padding: 0;
                margin: 0;
            }
            .pagination{
                display: flex;
                justify-content: center;
                gap: 10px;
                button{
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #606276;
                    opacity: 0.3;
                    transition: opacity .4s;
                    cursor: pointer;
                    border: 0;
                    outline: 0;
                    span{
                        opacity: 0;
                        visibility: visible;
                    }
                }
                button.active{
                    background: #606276;
                    opacity: 1;
                }
            }
            .nonblock{
                
                padding: 60px;
                background: #FFFFFF;
                /* Shadow / Card / Default */

                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                margin: 0 13px;
                margin-top: 21px;
                h3{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    color: #41456B;
                    margin-top: 20px;
                }
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    color: #41456B;
                }
                a{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 14px;
                    color: #7481FF;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                }
            }
            @media(max-width: 600px){
                .nonblock{
                    padding: 20px;
                    margin: 0;
                    margin-top: 20px;
                    background: #FFFFFF;
                    /* Shadow / Card / Default */

                    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    h3{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 25px;
                    }
                    p{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                    }
                    a{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 14px;
                    }
                }
            }
        }
        @media(max-width: 600px){
            &-right{
                padding-bottom: 50px;
            }
        }
    }
    @media(max-width: 1020px){
        &__content{
            gap: 0;
        }
    }
   
}


// -----slider------
.slider-tooltip {
    display: none;
}
.slider-horizontal {
  height: 8px;
}
.slider-horizontal .slider-handle {
  width: 18px;
  height: 18px;
  top: -5px;
  right: calc(18px / 2 * (-1));
}
.slider-base {
  background-color: #D7D7D7;
  border-radius: 2px;
}
.slider-connects {
  border-radius: 2px;
}
.slider-connect {
  background: #7481FF;
  cursor: pointer;
}
.slider-handle {
    overflow: visible;
    width: 18px;
    height: 18px;
    border: 1px solid #FFFFFF;
    border-radius: 2px;
    background: #7481FF;
    cursor: grab;
    box-shadow: none;
    &:focus {
        outline: none;
        box-shadow: none;
    }
}
</style>