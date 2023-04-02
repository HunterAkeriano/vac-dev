<template>
   <div class="about">
    <bottom-header>About VAC </bottom-header>
    <section class="mission">
      <div class="container">
        <div class="mission__content">
          <div class="mission__content-left">
            <h2>Our mission</h2>
            <p>Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. 
              You can complete the entire process from home—we’ll even deliver the car to you!</p>
            <div class="btn">
              <router-link to="/quiz">  <the-button :bg-color="'#7481FF'" :color-text="'white'">Request a Car</the-button></router-link> 
            </div>
          </div>
          <div class="mission__content-right">
            <img src="@/assets/images/about/one.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="step">
      <div class="container">
        <div class="step__content">
          <div class="step__content-left">
            <h3>Get your dream car</h3>
            <p>We founded VAC because we hated how complicated it was to buy a car. 
              You only have so much free time in your life. You don’t want to waste 
              it going to different car dealerships every weekend for weeks and months 
              trying to track down the right car.</p>
              <p>We also hated how choosing a car and
                 figuring out the financing for the vehicle 
                 were treated as totally separate processes!
                  Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted 
                to create a way for people to buy a car and only deal with a single person for the entire process.</p>
          </div>
          <div class="step__content-right">
            <div class="steps">
              <div class="number"><span>1</span></div>
              <div class="text">
                <h5>Quickly</h5>
                <p>You do not spend a lot of your time going
                    to car dealerships</p>
              </div>
            </div>
            <div class="steps">
              <div class="number"><span>2</span></div>
              <div class="text">
                <h5>Simply</h5>
                <p>You can order your dream car just by talking to our specialist by phone</p>
              </div>
            </div>
            <div class="steps">
              <div class="number"><span>3</span></div>
              <div class="text">
                <h5>Conveniently</h5>
                <p>We will deliver the car directly to the doorstep of your home or office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="car">
      <div class="container">
        <div class="car__content">
          <div class="car__content-left">
            <img src="@/assets/images/about/Nissan.png" alt="">
          </div>
          <div class="car__content-right">
            <h3>VAC is convenience 
              and transparency</h3>
              <p>We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.
              </p>
              <p>
                Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.

              </p>
          </div>
        </div>
      </div>
    </section>
    <section class="get">
      <div class="container">
        <div class="get__content">
          <div class="get__content-left">
            <h3>Get a car at the best prices and conditions</h3>
            <p>
              Not only is buying a car with VAC easy, it’s also the best way to save money. We have partnerships with Canada’s largest lenders. That allows us to help you secure loans at the best interest rates available.
              Because convenience and transparency are our founding principles, we take the time to answer all of your questions about the vehicle and the auto loan. 
              We will send you pictures and videos of any part of the car you like before you request a test drive.
            </p>
            <p>Because convenience and transparency are our founding principles, we take the time to answer all of your questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car you like before you request a test drive.
            </p>
          </div>
          <div class="get__content-right">
            <h5>We think that VAC is the best way to buy 
              a car in Canada. Try it for yourself and see how much time and money you can save.</h5>
              <p>There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly and you have had a chance to read it.</p>
              <div class="btn">
                <router-link to="/quiz">  <the-button :bg-color="'#7481FF'" :color-text="'white'">Request a Car</the-button></router-link> 
              </div>
          </div>
        </div>
      </div>
    </section>
    <section class="our">
      <div class="container">
        <div class="our__content">
          <div class="our__content-left">
            <h4>Contact us today and speak with one of our qualified agents</h4>
            <div class="btn">
              <the-button @click="openMenu" :bg-color="'#7481FF'" :color-text="'white'">Contact Us Now</the-button>
            </div>
          </div>
          <div class="our__content-right">
            <h3>Our qualified agents</h3>
            <p>The true secret to success of VAC isn’t our streamlined purchasing
               and financing processes. 
              The real reason 
              VAC is the easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.</p>
              <p>Our team provides you with the best customer experience in the automotive industry.
                 You work with a dedicated representative throughout the process. They are able to answer any questions you have about any of our vehicles or the financing.
                 Are you interested in seeing pictures or videos of a car? Your qualified agent will send them to you.</p>
          </div>
        </div>
      </div>
    </section>
    <reviews/>
    <section class="dynamic">
      <div class="container">
        <div class="dynamic__content">
          <div class="dynamic__content-left">
            <h3>We're dynamic team of creative people with innovative mind</h3>
            <div class="text">
              <h5>Our History</h5>
              <p>We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</p>
            </div>
            <div class="text">
              <h5>Our Goal</h5>
              <p>Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours. </p>
            </div>
          </div>
          <div class="dynamic__content-right">
            <img src="@/assets/images/about/photo.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <div class="features__content">
          <div class="features__content-left">
            <img src="@/assets/images/about/people.png" alt="">
          </div>
          <div class="features__content-right">
            <div class="text">
              <h3>Main features</h3>
              <p>We are your one stop shop. We believe that vehicle shopping should
                 be a fun and painless process and with years of experience, we make it just that.</p>
            </div>
            <div class="block">
              <div class="item">
                <h3>7,988+</h3>
                <p>Sold Cars</p>
              </div>
              <div class="item">
                <h3>123</h3>
                <p>Working Experts</p>
              </div>
              <div class="item">
                <h3>1560+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <calulate class="calculator"></calulate>
   </div>
  </template>
  
  <script>
import { useGlobalStore } from '@/stores/store'
import BottomHeaderVue from '../components/BottomHeader.vue';
import ButtonVue from '../components/ui/Button.vue';
import CalculatorVue from '../components/Calculator.vue';
import Reviews from '../components/Reviews.vue';
export default {
    components:{
      'bottom-header' : BottomHeaderVue,
      'the-button': ButtonVue,
      'calulate': CalculatorVue,
      'reviews': Reviews,
    },
    data() {
    return {
      isOpen: false,
      store: null
    };
    },
    methods:{
      openMenu(){
        this.globalStore.setIsMenuOpen(!this.globalStore.isMenuOpen);
        this.globalStore.isOpenContact = true;
        this.globalStore.oneMenu = false;
        if (this.globalStore.isMenuOpen) {
                const body = document.querySelector('body');
                body.classList.add('lock');
        
            } else  {
                const body = document.querySelector('body');
                body.classList.remove('lock');
                this.isContactOpen = false;
            }
      }
  },
  computed: {
    globalStore() {
      return useGlobalStore()
    }
    },
    mounted() {
    const store = useGlobalStore()
    this.store = store
  },
  provide() {
    return {
      useGlobalStore
    }
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
        margin-top: 20px;
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

.step{
  margin-top: 120px;
  &__content{
    display: flex;
    justify-content: space-between;
    &-left{
      max-width: 580px;
      h3{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        /* or 63px */


        /* Primary / Content */

        color: #41456B;
      }
      p{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        /* or 29px */
        margin: 0;
        margin-top: 20px;
        letter-spacing: 0.02em;

        /* Secondary / Text */

        color: #606276;
      }
    }
    &-right{
      .steps{
        max-width: 510px;
        display: flex;
        margin-top: 40px;
        align-items: center;
        .number{
          background: url('@/assets/images/home/step/step-bg.svg') no-repeat;
          max-width: 75px;
          width: 100%;
          height: 67px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 10px;
          span{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 700;
            font-size: 25px;
            line-height: 140%;
            /* identical to box height, or 35px */

            text-align: center;
            letter-spacing: 0.02em;

            /* Primary / Content */

            color: #41456B;
          }
        }
        .text{
          margin-left: 20px;
          h5{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            /* or 125% */


            /* Primary / Content */

            color: #41456B;
          }
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
            margin: 0;
            margin-top: 5px;
          }
        }
      }
    }
  }
  @media(max-width: 1170px){
    &__content{
      flex-direction: column;
      max-width: 80%;
      margin: 0 auto;
      &-left{
        max-width: 100%;
      }
      &-right{
        max-width: 100%;
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
      }
      &-right{
        .steps{
          margin-top: 20px;
          max-width: 100%;
          .text{
            h5{
              font-family: 'Gilroy';
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 25px;
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
    }
  }
  
}
@media(max-width: 700px){
  .step{
    margin-top: 80px;
  }
}




.car{
  margin-top: 220px;
  &__content{
    display: flex;
    justify-content: space-between;
    &-left{
      max-width: 567px;
      margin-top: 110px;
      img{
        width: 100%;
        max-width: 100%;
      }
    }
    &-right{
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
        /* or 29px */

        letter-spacing: 0.02em;

        /* Secondary / Text */

        color: #606276;
      }
    }
  }
  @media(max-width: 1170px){
    &__content{
      flex-direction: column-reverse;
      align-items: center;
      &-left{
        max-width: 80%;
        margin-top: 40px;
      }
      &-right{
        max-width: 80%;
      }
    }
  }
  @media(max-width: 700px){
    &__content{
      &-left{
        max-width: 100%;
        margin-top: 30px;
      }
      &-right{
        max-width: 100%;
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
        }
      }
    }
  }
}
@media(max-width: 1170px){
  .car{
    margin-top: 160px;
  }
}
@media(max-width: 700px){
  .car{
    margin-top: 80px;
  }
}



.get{
  margin-top: 220px;
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
        /* or 29px */
        margin: 20px 0;
        letter-spacing: 0.02em;

        /* Secondary / Text */

        color: #606276;
      }
    }
    &-right{
      max-width: 550px;
      h5{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 140%;
        /* or 35px */

        letter-spacing: 0.02em;

        /* Primary / Content */

        color: #41456B;

      }
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
        margin-top: 20px;
      }
      .btn{
        max-width: 200px;
        margin-top: 40px;
      }
    }
  }
  @media(max-width: 1170px){
    &__content{
      flex-direction: column;
      align-items: center;
      &-left{
        max-width: 80%;
      }
      &-right{
        max-width: 80%;
        margin-top: 40px;
      }
    }
  }
  @media(max-width: 700px){
    &__content{
      margin-top: 80px;
      &-left{
        max-width: 100%;
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
          margin: 10px 0px;
        }
      }
      &-right{
        max-width: 100%;
        margin-top: 20px;
        h5{
          font-family: 'Gilroy';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 140%;
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
        }
      }
    }
    }
    
}
@media(max-width: 1170px){
  .get{
    margin-top: 160px;
  }
}
.our{
  margin-top: 200px;
  &__content{
    display: flex;
    justify-content: space-between;
    &-left{
      max-width: 580px;
      padding: 60px;
      background: #FFFFFF;
      max-height: 280px;
      /* Shadow / Card / Default */

      box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
      h4{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 140%;
        /* or 42px */


        /* Primary / Content */

        color: #41456B;
      }
      .btn{
        max-width: 200px;
        margin-top: 40px;
      }
    }
    &-right{
      max-width: 550px;
      h3{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        /* or 63px */


        /* Primary / Content */

        color: #41456B;
      }
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
        margin: 0;
        margin-top: 20px;
      }
    }
  }
  @media(max-width: 1170px){
    &__content{
      flex-direction: column-reverse;
      padding-bottom: 20px;
      margin: 0 auto;
      max-width: 80%;
      &-left{
        max-width: 100%;
        margin-top: 40px;
        max-height: unset;
       
      }
      &-right{
        max-width: 100%;
        
      }
    }
  }
  @media(max-width: 700px){
    &__content{
      max-width: 100%;
      &-right{
        h3{
          font-family: "Gilroy";
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 140.5%
        }
        p{
          font-family: "Gilroy";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 180%;
          margin: 10px 0px;
        }
      }
      &-left{
        padding: 20px;
        margin-top: 20px;
        h4{
          font-family: "Gilroy";
          font-style: normal;
          font-weight: 700;
          font-size: 25px;
          line-height: 140.5%;
        }
        .btn{
          max-width: 100%;
        }
      }
    }
  }
}
@media(max-width: 1180px){
  .our{
    margin-top: 160px;
  }
}
@media(max-width: 700px){
  .our{
    margin-top: 80px;
  }
}
.dynamic{
  &__content{
    display: flex;
    justify-content: space-between;
    &-left{
      max-width: 520px;
      h3{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        line-height: 140.5%;
        color: #41456B;
      }
      .text{
        margin-top: 20px;
        h5{
          font-family: 'Gilroy';
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
          color: #41456B;
        }
        p{
          margin: 0;
          margin-top: 5px;
          font-family: 'Gilroy';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 180%;
          letter-spacing: 0.02em;
          color: #606276;
        }
      }
    }
    &-right{
      max-width: 600px;
      img{
        display: block;
        max-width: 100%;
        width: 100%;
      }
    }
  }
  @media(max-width: 1170px){
    &__content{
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      max-width: 80%;
      &-left{
        max-width: 100%;
      }
      &-right{
        max-width: 100%;
        margin-top: 40px;
        img{
          object-fit: cover;
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
       .text{
        margin-top: 10px;
        h5{
          font-family: 'Gilroy';
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 25px;
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
  }
}
.features{
  margin-top: 200px;
  .features__content{
    display: flex;
    justify-content: space-between;
    &-left{
      max-width: 540px;
      img{
        display: block;
        max-width: 100%;
        width: 100%;
      }
    }
    &-right{
      max-width: 600px;
      .text{
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
      }
      @media(max-width: 750px){
        .text{
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
          }
        }
        .block{
          flex-wrap: nowrap;
          flex-direction: column;
          max-width: 100%;
        }
      }
      .block{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item{
          box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          background: #FFFFFF;
          padding: 25px;
          width: 280px;
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
            color: #41456B;
            margin: 5px 0px;
          }
        }
        .item:nth-child(3){
          margin-top: 40px;
        }
        @media(max-width: 750px){
          .item{
            width: 100%;
            max-width: 100%;
            margin-top: 10px;
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
            }
          }
          .item:nth-child(3){
            margin-top: 10px;
          }
        }
      }
    }
  }
  @media(max-width: 1170px){
    .features__content{
      flex-direction: column-reverse;
      max-width: 80%;
      margin: 0 auto;
      &-left{
        max-width: 100%;
        margin-top: 40px;
      }
      &-right{
        max-width: 100%;
        .block{
          max-width: 600px;
        }
      }
    }
  }
   @media(max-width: 700px){
    .features__content{
      width: 100%;
      max-width: 100%;
    }
   }
}
@media(max-width: 1170px){
  .features{
    margin-top: 160px;
  }
}
@media(max-width: 700px){
  .features{
    margin-top: 80px;
  }
}


.calculator{
  margin-top: 220px;
}
@media(max-width: 1170px){
  .calculator{
    margin-top: 160px;
  }
}
@media(max-width: 700px){
  .calculator{
    margin-top: 80px;
  }
}
</style>