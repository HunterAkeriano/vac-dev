<template>
    <div class="raiting">
        <the-header>Loan rates</the-header>
        <section class="mission">
            <div class="container">
              <div class="mission__content">
                <div class="mission__content-left">
                  <h2>Our credit policy</h2>
                  <p>You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.</p>
                  <div class="btn">
                    <router-link to="/quiz">  <the-button :bg-color="'#7481FF'" :color-text="'white'">Request a Car</the-button></router-link> 
                  </div>
                </div>
                <div class="mission__content-right">
                  <img src="@/assets/images/raiting/chevrolet.png" alt="">
                </div>
              </div>
            </div>
          </section>
        
        <section class="interest">
            <div class="container">
                <div class="text">
                    <h2>Interest rates and loan terms</h2>
                </div>
               
                <div class="interest__content">
                    <div class="interest__content-item">
                        <div class="header">
                            <img src="@/assets/images/raiting/icon.svg" alt="">
                            <h5>What are my interest rate options?</h5>
                        </div>
                        <p>We work to secure customized auto loans from Canada’s largest lenders. 
                            Your interest rate is critical for determining the total cost of your auto financing. 
                            Interest rates are based on many factors including the loan amount, 
                            your credit score, and your budget. 
                            We help you find the lowest interest rates available for your auto loan.</p>
                    </div>
                    <div class="interest__content-item">
                        <div class="header">
                            <img src="@/assets/images/raiting/time.svg" alt="">
                            <h5>How long will my loan <br/> term be?</h5>
                        </div>
                        <p>Our goal is to find the right car and the right loan for you. 
                            Because we have relationships with so many different lenders, we can 
                            help you find the right term length for your budget. The longer the loan is, 
                            often the lower the monthly payments will be—but the more expensive the loan will be overall. 
                            Most of the loans we secure for our clients are between 36 and 72 months.</p>
                    </div>
                </div>
            </div>
        </section>  

        <section class="vac">
            <div class="container">
                <div class="vac__content">
                    <div class="vac__content-left">
                        <h3>Benefits of getting an auto loan with VAC</h3>
                        <p>For many people getting a reasonable auto loan is the best way for them to get a new car. 
                            However, the benefits of getting the right loan go beyond just being able to drive a nice vehicle.
                        </p>
                        <div class="info">
                            <p>When you work with VAC, there are never any hidden costs or fees! We lay out all 
                                the terms and conditions so that you know exactly what details of the loan are before you sign anything.</p>
                            <div class="btn">
                                <router-link to="/quiz">  <the-button :bg-color="'#7481FF'" :color-text="'white'">Request a Car</the-button></router-link> 
                            </div>    
                            </div>
                    </div>
                    <div class="vac__content-right">
                        <img src="@/assets/images/raiting/cars.png" alt="">
                    </div>
                </div>
            </div>
        </section>
          <calculator class="calculate"/>
    </div>
    
</template>

<script>
import BottomHeaderVue from '../components/BottomHeader.vue';
import ButtonVue from '../components/ui/Button.vue';
import CalculatorVue from '../components/Calculator.vue';
export default{
    components:{
        'the-header': BottomHeaderVue,
        'the-button': ButtonVue,
        'calculator': CalculatorVue
    }
}
</script>

<style lang="scss" scoped>
.mission{
    margin-top: 40px;
    padding-bottom: 100px;
    &__content{
      display: flex;
      justify-content: space-between;
      &-left{
        max-width: 570px;
        padding: 60px;
        background: #FFFFFF;
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
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
          font-weight: 400;
          font-size: 16px;
          line-height: 180%;
          letter-spacing: 0.02em;
          color: #606276;
          margin: 20px 0px;
         }
         .btn{
          max-width: 200px;
          margin-top: 40px;
         }
      }
      &-right{
        margin-top: 120px;
        img{
          max-width: 100%;
          width: 100%;
        }
      }
    }
    @media(max-width:1170px){
      &__content{
        flex-direction: column;
        align-items: center;
        &-left{
          padding: 40px;
          max-width: 80%;
        }
        &-right{
         max-width: 80%;
        }
      }
    }
    @media(max-width: 700px){
         &__content{
            &-left{
          padding: 20px;
          background: #FFFFFF;
        /* Shadow / Card / Default */
          max-width: 100%;
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
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
            font-weight: 400;
            font-size: 16px;
            line-height: 180%;
           }
           .btn{
            max-width: 100%;
            margin-top: 30px;
           }
            }
            &-right{
              max-width: 100%;
            }
         }
      
      
      
      }
    
  }
  @media(max-width: 1170px){
    .mission{
      padding-bottom: 0;
    }
  }

.interest{
    margin-top: 200px;
    .text{
        h2{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 45px;
            line-height: 140.5%;
            color: #41456B;
        }
    }
    @media(max-width: 1200px){
        .text{
            max-width: 80%;
            margin: 0 auto;
            h2{
                font-size: 40px;
            }
        }
    }
    @media(max-width: 700px){
        .text{
            max-width: 100%;
            
            h2{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                line-height: 140.5%;
            }
        }
    }
    
    &__content{
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        &-item{
            max-width: 580px;
            background: #FFFFFF;
            box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding: 60px;
            .header{
                display: flex;
                align-items: center;
                h5{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 140%;
                    /* or 35px */
                    margin-left: 20px;
                    letter-spacing: 0.02em;
                    color: #41456B;
                }
            }
            p{
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 180%;
                letter-spacing: 0.02em;
                color: #606276;
                margin-bottom: 0;
            }
        }
    }
    @media(max-width: 1200px){
        &__content{
            flex-direction: column;
            max-width: 80%;
            margin: 0 auto;
            margin-top: 60px;
            &-item{
                max-width: 100%;
                padding: 40px;
            }
            &-item:nth-child(2){
                margin-top: 20px;
            }
        }
    }
    @media(max-width: 700px){
        &__content{
            max-width: 100%;
            margin-top: 30px;
            &-item{
               padding: 20px;
                .header{
                    h5{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 140%;
                    }
                }
                p{
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 180%;
                    margin-top: 12px;
                }
            }
        }
    }
}
@media(max-width: 1200px){
    .interest{
        margin-top: 160px;
    }
} 
@media(max-width: 700px){
    .interest{
        margin-top: 80px;
    }
} 
.vac{
    margin-top: 200px;
    &__content{
        display: flex;
        justify-content: space-between;
        &-left{
            max-width: 550px;
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
                color: #606276;
            }
            .info{
                p{
                    margin: 0;
                    font-family: 'Gilroy';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 25px;
                    color: #41456B;
                }
                .btn{
                    max-width: 200px;
                    margin-top: 40px;
                }
            }
        }
        &-right{
            max-width: 600px;
            img{
                display: block;
                width: 100%;
                max-width: 100%;
                margin-top: 140px;
            }
        }
    }
    @media(max-width: 1170px){
        &__content{
            flex-direction: column;
            align-items: center;
            max-width: 80%;
            margin: 0 auto;
            &-left{
                max-width: 100%;
            }
            &-right{
                max-width: 100%;
                img{
                    margin-top: 40px;
                }
            }
        }
    }
    @media(max-width: 700px){
        &__content{
            max-width: 100%;
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
                    margin-top: 10px;
                }
                .info{
                    p{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 18px;
                        line-height: 25px;
                    }
                    .btn{
                        max-width: 100%;
                    }
                }
            }
        }
    }
}
@media(max-width: 1170px){
    .vac{
        margin-top: 160px;
    }
}
@media(max-width: 700px){
    .vac{
        margin-top: 80px;
    }
}


.calculate{
    margin-top: 200px;
}
@media(max-width: 1170px){
    .calculate{
        margin-top: 160px;
    }
}
@media(max-width: 700px){
    .calculate{
        margin-top: 80px;
    }
}

</style>