<template>
    <section class="calculator">
        <div class="container">
            <div class="calculator__text">
                <div class="calculator__text-left">
                    <h3>Let’s figure out how 
                        much you can afford</h3>
                </div>
                <div class="calculator__text-right">
                    <p>Before you start shopping, let’s figure out how much you can afford. 
                        Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.</p>
                </div>
            </div>
            <div class="calculator__content">
                <div class="calculator__content-left">
                    <div class="btn">
                        <button 
                        :class="{ 'is-active': isActive === 1 }"
                        @click="setActive(1)"
                          >Poor</button>
                        <button
                        :class="{ 'is-active': isActive === 2 }"
                        @click="setActive(2)"
                        >Average</button>
                        <button
                        :class="{ 'is-active': isActive === 3 }"
                        @click="setActive(3)"
                        >Good</button>
                    </div>
                    <div class="amount">
                        <div class="amount-text">
                            <h4>Loan Amount</h4>
                            <p>$ <span>{{dollars}}</span></p>
                        </div>
                        <div class="amount-input">
                            <input
                            v-model="dollars"
                            @input="updateValue"
                            type="range"
                            :min="minDollars" 
                            :max="maxDollars"
                            step="1000"
                            :style="{ backgroundSize: `${sizeDollars}%`  }">
                        </div>
                    </div>
                    <div class="amount">
                        <div class="amount-text">
                            <h4>Loan Duration</h4>
                            <p><span>{{month}} </span> month</p>
                        </div>
                        <div class="amount-input">
                            <input
                            v-model="month"
                            @input="updateMonths"
                            type="range"
                            :min="minMonth"
                            :max="maxMonth"
                            step="2"
                            :style="{ backgroundSize: `${sizeMonth}%`  }">
                        </div>
                    </div>
                </div>
                <div class="calculator__content-right">

                    <div class="info">
                        <div class="title">
                            <h5>Bi-Weekly Payment</h5>
                            <p>$ <span>{{money}}</span></p>
                        </div>
                        <div class="block">
                            <div class="item">
                                <h5>Monthly Payment</h5>
                                <p>$ {{monthly}}</p>
                            </div>
                            <div class="item">
                                <h5>Weekly Payment</h5>
                                <p>$ {{weekly}}</p>
                            </div>
                        </div>
    
                    </div>

                  

                    <div class="btn">
                        <router-link to="/quiz">   <the-button  :bg-color="'#7481FF'" :color-text="'white'">Request a car</the-button></router-link> 
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// кнопка
import ButtonVue from './ui/Button.vue';
export default{
    components:{
        'the-button': ButtonVue,
    },
    data(){
        return{
            isActive: 1,
            dollars: 20000,
            minDollars: 10000,
            maxDollars: 100000,
           
            value: 0,
            month: 10,
            minMonth: 6,
            maxMonth: 72,
        }
    },
    methods:{
        setActive(buttonNumber) {
            this.isActive = buttonNumber;
            if(buttonNumber == 1){
                this.dollars = 20000;
                this.month = 10;
            }else if(buttonNumber == 2){
                this.dollars = 50000;
                this.month = 20;
            }else{
                this.dollars = 90000;
                this.month = 50;
            }
        },
        openLol(){
            console.log('Вы дауны')
        },
        updateValue(event) {
             this.value = event.target.value;
        },
        updateMonths(event){
            this.value = event.target.value;
        }
    },
    computed:{
        sizeDollars() {
            return (this.dollars - this.minDollars) / (this.maxDollars - this.minDollars) * 100;
        },
        sizeMonth(){
            return (this.month - this.minMonth) / (this.maxMonth - this.minMonth) * 100;
        },


        money(){
            return Math.round(this.monthly / 2);
        },
        monthly(){
            return  Math.round(this.dollars / this.month);
        },
        weekly(){
            return Math.round(this.money / 2); 
        }
    }
}
</script>

<style lang="scss" scoped>
    .calculator{
        padding-bottom: 40px;
        &__text{
            display: flex;
            justify-content: space-between;
            &-left{
                max-width: 500px;
                h3{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 45px;
                    line-height: 140.5%;
                    color: #41456B;
                }
            }
            @media(max-width: 1090px){
                &-left{
                    max-width: 360px;
                    h3{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 45px;
                        line-height: 140.5%;
                    }
                }
            }
            @media(max-width: 700px){
                &-left{
                    max-width: 100%;
                    h3{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 30px;
                        line-height: 140.5%;
                    }
                }
            }
            &-right{
                max-width: 600px;
                p{
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
            @media(max-width: 1090px){
                &-right{
                    max-width: 300px;
                    p{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                    }
                }
            }
            @media(max-width: 700px){
                &-right{
                    max-width: 100%;
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
        @media(max-width: 700px){
            &__text{
                flex-direction: column;
            }
        }
        &__content{
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
            &-left{
                padding: 60px;
                background: #FFFFFF;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                max-width: 800px;
                width: 100%;
                .btn{
                    display: flex;
                    align-items: center;
                    button{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 14px;
                        text-align: center;
                        letter-spacing: 0.02em;
                        text-transform: uppercase;
                        color: #7481FF;
                        padding: 17px 19px;
                        border: 1px solid #7481FF;
                        background: white;
                        border-radius: 1px;
                        transition: all .3s;
                    }
                    button.is-active{
                        background: #7481FF;
                        color: white;
                    }
                    button:hover{
                        background: #7481FF;
                        color: white;
                    }
                }
                .amount{
                    margin-top: 56px;
                    .amount-text{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        h4{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 600;
                            font-size: 20px;
                            line-height: 25px;
                            /* identical to box height, or 125% */


                            /* Primary / Content */

                            color: #41456B;
                        }
                        p{
                            font-family: 'Gilroy';
                            font-size: 16px;
                            line-height: 180%;
                            text-align: right;
                            letter-spacing: 0.02em;
                            color: #41456B;
                            margin: 0;
                            font-weight: 700;
                            font-size: 25px;
                        }
                    }
                    .amount-input{
                        margin-top: 20px;
                       input{
                        cursor: pointer;
                        -webkit-appearance: none;
                        width: 100%;
                        height: 8px;
                        background: #d7d7d7;
                        border-radius: 2px;
                        outline: none;
                        border: none;
                        background-image: linear-gradient(90deg,#7481ff 0,#7481ff);
                        background-repeat: no-repeat;
                       }
                       input[type="range"]::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 20px;
                        height: 20px;
                        border-radius: 0;
                        background: #7481FF;
                        cursor: pointer;
                        border: 1px solid white;
                      }
                      input[type="range"]::-moz-range-thumb {
                        width: 20px;
                        height: 20px;
                        border: 1px solid white;
                        border-radius: 0;
                        background: #7481FF;
                        cursor: pointer;
                      }
                    }
                }
            }
            &-right{
                background: #FFFFFF;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                max-width: 370px;
                width: 100%;
                padding: 60px;
                .title{
                    margin-bottom: 30px;
                    h5{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        letter-spacing: 0.02em;
                        color: #606276;
                    }
                    p{
                        margin: 0;
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 45px;
                        line-height: 140.5%;
                        color: #7481FF;

                    }
                }
                .item{
                    h5{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 180%;
                        letter-spacing: 0.02em;
                        color: #606276;
                    }
                    p{
                        font-family: 'Gilroy';
                        margin: 0;
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
                .item:nth-child(2){
                    margin-top: 20px;
                }
                .btn{
                    margin-top: 60px;
                }
            }
            @media(max-width: 1200px){
                &-left{
                    max-width: 100%;
                    padding: 40px;
                    box-shadow: 0px 0px 0px 0px;
                    .amount{
                        margin-top: 40px;
                    }
                }
                &-right{
                    max-width: 100%;
                    padding: 40px;
                    box-shadow: 0px 0px 0px 0px;
                    border-radius: 0px;
                    .info{
                        display: flex;
                        justify-content: space-between;
                        .block{
                            display: flex;
                            .item:nth-child(2){
                                margin: 0;
                                margin-left: 40px;
                            }
                        }
                       
                    }
                    .btn{
                        max-width: 240px;
                        margin-top: 40px;
                    }
                }
            }
            @media(max-width: 700px){
                &-left{
                    padding: 20px;
                    .amount{
                        .amount-text{
                            h4{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 600;
                                font-size: 18px;
                                line-height: 25px;
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
                    .btn{
                        button{
                            padding: 10px 15px;
                            border-radius: 0;
                        }
                        button.is-active{
                            border-radius: 0;
                        }
                    }
                }
                &-right{
                    .info{
                        flex-direction: column;
                        .title{
                            margin-bottom: 10px;
                            h5{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 180%;
                            }
                            p{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 700;
                                font-size: 35px;
                                line-height: 140.5%;
                            }
                        }
                        .block{
                            justify-content: space-between;
                            .item{
                                h5{
                                    font-family: 'Gilroy';
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 14px;
                                    line-height: 180%;
                                }
                                p{
                                    font-family: 'Gilroy';
                                    font-style: normal;
                                    font-weight: 700;
                                    font-size: 20px;
                                    line-height: 140%;
                                }
                            }
                            .item:nth-child(2){
                                margin: 0;
                            }
                        }
                       
                    }
                    .btn{
                        margin: 0 auto;
                        margin-top: 40px;
                    }
                }
            }
        }
        @media(max-width: 1200px){
            &__content{
                flex-direction: column;
                box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
                border-radius: 5px;
            }
          
        }
        @media(max-width: 700px){
            &__content{
                margin-top: 0;
            }
        }

    }

</style>