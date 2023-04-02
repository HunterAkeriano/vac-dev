<template>
    <header class="header">
        <div class="container">
            <div class="header__content" >
                <div class="header__content-logo" :class="{'is-open':  globalStore.isMenuOpen}">
                    <router-link to="/">
                        <img src="../assets/images/icons/logo.svg" alt="">
                        <span>VAC</span>
                    </router-link>
                    <h4 v-if="inventoryNone">Invenroty</h4>

                    
                </div>
                <div class="header__content-btn" >
                    <div class="item" v-if="inventory" :class="{'is-quiz': quized}">
                        <router-link to="/inventory">  <the-button  class="mb-none" :bg-color="'white'" :border="'1px solid #7481FF'">Inventory</the-button></router-link> 
                    </div>
                    <div class="item two-item" v-if="quiz">
                        <router-link to="/quiz"> <the-button class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Request a car</the-button></router-link>  
                    </div>
                    <div class="item carpage" v-if="carpage">
                        <router-link :to="{ path: `/quiz/${this.$route.params.id}` }"> <the-button class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">apply for this vehicle</the-button></router-link>  
                    </div>
                  <div class="burger" 
                  @click="openBurger"
                  :class="{'is-active':  globalStore.isMenuOpen, 
                  'menu-menu': globalStore.isOpenContact, 
                  'open-menu': openedTrue}" >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="header__content-block"
                 v-if="globalStore.isMenuOpen"
                 @click="blockMenu">
                </div>
                <div class="header__content-link"  :class="{'is-active': globalStore.isMenuOpen}">
                    <div class="one" v-if="globalStore.oneMenu">
                         <ul>
                            <li> <router-link to="/inventory"> Inventory</router-link> </li>
                            <li><a @click="openContact">Contact us</a> </li>
                            <li><router-link to="/about"> About VAC </router-link> </li>
                            <li><router-link to="/raiting">Loan Rates</router-link> </li>
                            <li><router-link to="/video">Video</router-link></li>
                            <li><router-link to="/blog">Blog</router-link> </li>
                             <li><router-link to="/calculate">  Calculate </router-link></li>
                        </ul>
                        <div class="links">
                            <a target="_blank" href="https://www.instagram.com/hunter_akeriano/">
                                <img src="../assets/images/icons/Instagram.svg" alt=""></a>
                            <a target="_blank" href="https://www.facebook.com/profile.php?id=100087370807837">
                                <img src="../assets/images/icons/Facebook.svg" alt=""></a>
                            <a target="_blank" href="https://www.youtube.com/watch?v=Ff-egBHVpd4&ab_channel=1nn234">
                                <img src="../assets/images/icons/YouTube.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="two" v-if="globalStore.isOpenContact">
                        <div class="closet" @click="reversedMenu">
                            <img src="../assets/images/icons/Close.svg" alt="">
                        </div>
                        <div class="title">
                            <h3>We can't wait to hear <span></span> from <span></span> you!</h3>
                        </div>
                        <div class="form">
                            <div class="input">
                                <input type="text" 
                                placeholder="Your Name" v-model="inputText"
                                :class="{ 'is-invalid': isEmpty }"                                
                                @keydown="validateInput">
                                <p v-if="isEmpty">Enter your name in English</p>
                            </div>
                            <div class="input">
                                <input type="tel" placeholder="Phone Number" 
                                v-model="phoneNumber" 
                                :class="{ 'is-invalid': !isValid }"
                                pattern="[0-9]*" 
                                @input="limitInput">
                                <p v-if="!isValid">Please enter more than 10 digits</p>
                            </div>
                            <div class="input">
                                <input type="email" 
                                placeholder="Email Address"
                                :class="{ 'is-invalid': !valid }"
                                v-model="email">
                                <p v-if="!valid">Enter correct email</p>
                            </div>
                            <div class="item">
                                <the-button @click="validationForms" class="form-btn" :bg-color="'#7481FF'" :color-text="'white'">contact me</the-button>
                            </div>
                            
                        </div>
                        <div class="links">
                            <h4>You can contact us yourself</h4>
                            <div class="link-item">
                                <a target="_blank" href="https://www.instagram.com/hunter_akeriano/">
                                    <img src="../assets/images/icons/Instagram.svg" alt=""></a>
                                <a target="_blank" href="https://www.facebook.com/profile.php?id=100087370807837">
                                    <img src="../assets/images/icons/Facebook.svg" alt=""></a>
                                <a target="_blank" href="https://www.youtube.com/watch?v=Ff-egBHVpd4&ab_channel=1nn234">
                                    <img src="../assets/images/icons/YouTube.svg" alt=""></a>
                                    <a target="_blank" href="#">
                                        <img src="../assets/images/icons/mail.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                    <div class="three" v-if="openedTrue">
                        <div class="closet" @click="blockMenu">
                            <img src="@/assets/images/icons/Close.svg" alt="">
                        </div>
                        <div class="img-yes">
                            <img src="@/assets/images/icons/yes.svg" alt="">
                        </div>
                        <div class="text">
                            <h3>Application Successful!</h3>
                            <p>Our manager will contact you in the nearest time.</p>
                        </div>
                    </div>   
                </div>
               
            </div>
        </div>
    </header>
</template>

<script>

import { useGlobalStore } from '@/stores/store'
import Btn from './ui/Button.vue';



export default{
    components:{
        'the-button': Btn,
    },
    data(){
        return{
            // для роутера
            quiz: true,
            inventory: true,
            quized: false,
            inventoryNone: false,
            carpage: false,
            // isMenuOpen: false,
            // oneMenu: true,
            // isContactOpen: false,
            // валидация слов
            inputText: "",
            isEmpty: false,
            store: null,
            // валидация номера
            phoneNumber: '',
            isValid: true,
            email: '',
            valid: true,

            // открытия последнего окна
            openedTrue: false,
        }
    },
    methods:{
        openBurger(){
             this.globalStore.setIsMenuOpen(!this.globalStore.isMenuOpen);
             if (this.globalStore.isMenuOpen) {
                const body = document.querySelector('body');
                body.classList.add('lock');
        
            } else  {
                const body = document.querySelector('body');
                body.classList.remove('lock');
                this.isContactOpen = false;
            }
        },
        openContact(){
            this.globalStore.isOpenContact = true;
            this.globalStore.oneMenu = false;
        },
        reversedMenu(){
            this.globalStore.isOpenContact = false;
            this.globalStore.oneMenu = true;

            this.inputText = '';
            this.email = '';
            this.phoneNumber = '';
        },
        blockMenu(){
            this.globalStore.setIsMenuOpen(!this.globalStore.isMenuOpen);
            this.globalStore.isOpenContact = false;
            this.globalStore.oneMenu = true;
            this.inputText = '';
            this.email = '';
            this.phoneNumber = '';
            this.openedTrue = false;
            this.isContactOpen = false;
            this.openedTrue = false;
            if (!this.globalStore.isMenuOpen) {
                const body = document.querySelector('body');
                body.classList.remove('lock');
                this.isContactOpen = false;
        
            }

        },
        validateInput(event) {
            const allowedKeys = [
                "Backspace",
                "Delete",
                "ArrowLeft",
                "ArrowRight",
            ];
            if (
                /[а-яА-ЯЁёҐґІіЇї]/.test(event.key) && 
                !allowedKeys.includes(event.key) && 
                !/\d/.test(event.key)
            ) {
                event.preventDefault();
            }
        },
        limitInput() {
            // Удаляем все символы, кроме цифр
            this.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, "");
            
            // Ограничиваем количество цифр до 10
            if (this.phoneNumber.length > 12) {
                this.phoneNumber = this.phoneNumber.substr(0, 12);
            }
        },

        // общая валидация
        validationForms(){
            // валидируем номер телефона
            if (this.phoneNumber.length < 10) {
                this.isValid = false;
            } else {
                this.isValid = true;
            }
            // валидирую ввод имени
            if (this.inputText === "") {
                this.isEmpty = true;
            } else {
                this.isEmpty = false;
            }
            // валидация эмаила
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
             if (!emailRegex.test(this.email)) {
                this.valid = false;
            } else {
                this.valid = true;
            }

            // открываю если все идеально - завершающие меню:
            if(this.isValid && !this.isEmpty && this.valid){
            //    закрываю всю ерунду
            this.globalStore.isOpenContact = false;
            this.globalStore.oneMenu = false;
                //открываю менюшку   
                
                this.inputText = '';
                this.email = '';
                this.phoneNumber = '';
                this.openedTrue = true;

            }
        }

},
    created() {
    // слушаем событие afterEach
     this.$router.afterEach(() => {
        this.globalStore.isMenuOpen = false; // закрываем бургер меню
        if (!this.globalStore.isMenuOpen) {
                const body = document.querySelector('body');
                body.classList.remove('lock');
                this.isContactOpen = false;
        
            }
     });
    },
    computed: {
    globalStore() {
      return useGlobalStore()
    }
    },
    mounted() {
    this.globalStore = useGlobalStore()
     },
     watch: {
    '$route': function() {
      if (this.$route.name === 'quiz') {
        this.quiz = false;
        this.quized = true;
      } else {
        this.quiz = true;
        this.quized = false;
       
      }
      if(this.$route.name === 'inventory'){
        this.inventory = false;
        this.inventoryNone = true;
      }else{
        this.inventory = true;
        this.inventoryNone = false;
      }
      if(this.$route.name === 'carpage/'){
        this.quiz = false;
        this.carpage = true;
      }else{
        this.carpage = false;
      }
      if(this.$route.name === 'quizId'){
        this.quiz = false;
        this.quized = true;
      }
    }
  }
}

</script>

<style lang="scss" scoped>
    .header{
        padding: 15px 0px;
        position: fixed;
        width: 100%;
        z-index: 99;
        left: 0;
        top: 0;
        background: #FFFFFF;
        box-shadow: 0px 1px 0px #D7D7D7;
        &__content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-logo{
                display: flex;
                align-items: center;
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
                    color: #7380FF;
                    img{
                        margin-right: 5px;
                    }
                    
                }
                h4{
                        pointer-events: none;
                        cursor: default;
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 140%;
                        /* identical to box height, or 35px */

                        letter-spacing: 0.02em;
                        color: #41456B;
                        margin-left: 40px;
                    }
                @media(max-width: 650px){
                    h4{
                        display: none;
                    }
                }    
            }
            &-btn{
                display: flex;
                align-items: center;
                .item{
                    margin-right: 20px;
                }
                .item.is-quiz{
                    margin-right: 50px;
                }
                .item.two-item{
                    margin-right: 50px;
                }
                .item.carpage{
                    margin-right: 50px;
                }
                @media(max-width: 500px){
                    .item.carpage{
                        display: none;
                    }
                }
                .burger{
                    cursor: pointer;
                    z-index: 50;
                    min-width: 37px;
                    z-index: 60;
                    span{
                        display: block;
                        margin: 10px 0px;
                        height: 4px;
                        background: #41456B;
                        border-radius: 7px;
                        transition: all .3s;
                    }
                }
                .burger.is-active span:nth-child(1){
                    transform: translateY(16px) rotate(45deg);
                }
                .burger.is-active span:nth-child(2){
                  opacity: 0;
                }
                .burger.is-active span:nth-child(3){
                    transform: translateY(-11px) rotate(-45deg);
                }
                .burger.open-menu,
                .burger.menu-menu{
                    opacity: 0;
                    visibility: hidden;
                }
            }
            &-block{
                display: block;
                position: absolute;
                width: 100%;
                min-height: 100vh;
                height: 100vh;
                z-index: 10;
                left: 0;
                top: 0;
                transition: all .3s;
                background: rgba(0,0,0,.1);
              
            }
            &-link{
                position: absolute;
                top: 0px;
                right: -100%;
                width: 750px;
                height: 100vh;
                background: white;
                padding: 92px 0px 50px 60px;
                transition: all .3s;
                overflow: auto;
                z-index: 50;
                box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);
                .one{
                    z-index: 50;
                    ul{
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        li:nth-child(1){
                            display: none;
                        }
                        li{
                            a{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 25px;
                                line-height: 140%;
                                /* identical to box height, or 35px */
                                letter-spacing: 0.02em;
                                /* Primary / Content */
                                color: #41456B;
                            }
                        }
                        li{
                            margin: 10px 0px;
                        }
                        li:nth-child(1){
                            margin-top: 0;
                        }
                        li:nth-child(6){
                            margin-bottom: 0;
                        }
                    }
                    .links{
                        display: flex;
                        margin-top: 80px;
                        a:nth-child(2){
                            margin: 0 10px;

                        }
                    }   
                }
                .two{
                    max-width: 450px;
                    position: relative;
                    .closet{
                        cursor: pointer;
                        position: absolute;
                        top: -60px;
                        left: 0;
                    }
                    .title{
                        h3{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 30px;
                            line-height: 140%;
                            color: #41456B;
                            span:nth-child(2){
                                display: block;
                            }
                        }
                    }
                    .form{
                        margin-top: 60px;
                        .input{
                            position: relative;
                            margin-top: 10px;
                            input{
                                width: 100%;
                                padding: 10px 0px;
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 500;
                                font-size: 16px;
                                line-height: 159%;
                                border: 1px solid #D7D7D7;
                                border-radius: 2px;
                                transition: all .3s;
                                background-position: 10px 10px;
                                background-repeat: no-repeat;
                                padding-left: 40px;
                                background-image: url('@/assets/images/icons/icon/Name.svg');

                            }
                            input::placeholder{
                                color: #D7D7D7;
                            }
                            input:focus{
                                outline: none;
                                border: 1px solid #3c3a3a;
                            }
                            p{
                                font-size: 12px;
                                color: red;

                            }
                             input.is-invalid{
                                border: 1px solid red;
                            }
                        }
                        .input:nth-child(2){
                            input{
                                background-image: url('@/assets/images/icons/icon/phone.svg');
                            }
                            input.is-invalid{
                                border: 1px solid red;
                            }
                        }
                        .input:nth-child(3){
                             input{
                                background-image: url('@/assets/images/icons/icon/mail.svg');
                            }
                        }

                        .form-btn{
                            margin-top: 40px;
                        }
                    }
                    .links{
                        margin-top: 60px;
                        h4{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 25px;
                            color: #41456B;
                        }
                    }
                    .link-item{
                        margin-top: 20px;
                        max-width: 150px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                }
                .three{
                    position: relative;
                    .closet{
                        cursor: pointer;
                        position: absolute;
                        top: -60px;
                        left: 0;
                    }
                    .text{
                        margin-top: 40px;
                        h3{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 30px;
                            line-height: 140%;
                            /* identical to box height, or 42px */


                            /* Primary / Content */

                            color: #41456B;

                        }
                        p{
                            max-width: 230px;
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
                                 
            }
            &-link.is-active{
                right: 0;
            }
        }

    }




@media(max-width: 1578px){
    .header__content-link{
        width: 570px;
    }
}


@media(max-width:768px){
    .header__content-link{
        width: 504px;
        .two{
            max-width: 390px;
        }
    }
}
@media(max-width:650px){
    .mb-none{
        display: none;
    }
    .header__content-link{
        width: 100%;
        padding: 92px 20px 50px 20px;
        .one{
            width: 100%;
            max-width: 100%;
            ul{
                li{
                    margin: 12.5px 0px;
                    a{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 140%;
                      
                        letter-spacing: 0.02em;
                                              
                        color: #41456B;
                    }
                }
                li:nth-child(1){
                    display: block;
                }
            }
        }
        .two{
            width: 100%;
            max-width: 100%;
            .title{
                h3{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 140%;
                    span:nth-child(2){
                        display: inline;
                    }
                    span:nth-child(1){
                        display: block;
                    }
                }
                
            }
            
        }
        .three{
            width: 100%;
            max-width: 100%;
            .closet{
                top: -100px;
            }
            .img-yes{
                margin-top: 50px;
            }
            .text{
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
    .mb-bm{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
    }
    .header__content-logo{
        a{
            span{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 20.2955px;
                line-height: 108.5%;
            }
        }
    }
    .header__content-btn{
        .item.two-item{
            margin-right: 15px;
        }
        
    }
}
</style>