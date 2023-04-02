<template>
   <div class="quiz">
    <div class="container">
        <div class="quiz__content">
            <div class="quiz__content-test">
                <div class="bar" v-if="completed">
                    <div class="result" :style="{ width: `${result}%`}"></div>
                </div>
                <!-- окна тестирвоания -->
                <div class="one-test testing" v-if="one">
                    <div class="text">
                        <h2>What's your budget?</h2>
                        <p>Find vehicle options that fit your budget.</p>
                    </div>
                    <div class="block">
                        <div class="btn">
                            <input 
                            type="radio" 
                            id="250" name="budget"
                            :value="selectedBudget"
                            @click="selectedBudget = true">
                            <label for="250">Under $250/Month</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="374" name="budget" :value="selectedBudget"
                            @click="selectedBudget = true">
                            <label for="374">$250-374/Month</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="500" name="budget" :value="selectedBudget"
                            @click="selectedBudget = true">
                            <label for="500">$374-500/Month</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="over" name="budget" :value="selectedBudget"
                            @click="selectedBudget = true">
                            <label for="over">Over $500/Month</label>
                        </div>
                    </div>
                    <div class="next">
                        <div class="btn one">
                            <the-button @click="openTwo" :disabled="twoMenu" class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                    </div>
                    
                </div>

                <!-- второе окно -->
                <div class="one-test testing" v-if="two">
                    <div class="text">
                        <h2>What's your employment status?</h2>
                        <p>Your employment status will help determine the best vehicle and financing options for you.</p>
                    </div>
                    <div class="block">
                        <div class="btn">
                            <input type="radio" id="employed" name="employed"
                            :value="selectWork"
                            @click="selectWork = 1">
                            <label for="employed">Employed</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="self" name="employed"
                            :value="selectWork"
                            @click="selectWork = 1">
                            <label for="self">Self-Employed</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="student" name="employed"
                            :value="selectWork"
                            @click="selectWork = 1">
                            <label for="student">Student</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="pension" name="employed"
                            :value="selectWork"
                            @click="selectWork = 2">
                            <label for="pension">Retired / Pension</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="other" name="employed"
                            :value="selectWork"
                            @click="selectWork = 2">
                            <label for="other">Other</label>
                        </div>
                    </div>
                    <div class="next">
                        <div class="btn">
                            <the-button :disabled="threeMenu" @click="openThree" class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backOne">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>

                <!-- третье окно -->
                <!-- окно с инпутом -->
                <div class="one-test testing" v-if="three">
                    <div class="text">
                        <h2>Enter your monthly income</h2>
                        <p>Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.</p>
                    </div>
                    <div class="inputs">
                        <div class="one">
                            <input type="tel" 
                            placeholder="Monthly income"
                            v-model="incomeMonth"
                            pattern="[0-9]*" 
                            @input="incomeInput"
                            :class="{'error': errorIncome}">
                            <p v-if="errorIncome">Enter the amount of income more than 2 characters</p>
                        </div>
                    </div>
                    <div class="next">
                        <div class="btn">
                            <the-button @click="openFourMenu"  class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backTwo">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>
                <!-- окно с инпутами -->
                <div class="one-test testing" v-if="fourInputs">
                    <div class="text">
                        <h2>Tell us about your employment</h2>
                        <p>We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible.</p>
                    </div>
                    <div class="inputs">
                        <div class="one">
                            <input type="text" 
                            :class="{'error': errorEmployer}"
                            v-model="inputEmployer"
                            placeholder="Employer">
                            <p v-if="errorEmployer">Enter a couple of words</p>
                        </div>
                        <div class="one">
                            <input type="text" 
                            placeholder="Title"
                            v-model="inputTitle"
                            :class="{'error': errorTitle}">
                            <p v-if="errorTitle">Enter a couple of word</p>
                        </div>
                    </div>
                    <div class="next">
                        <div class="btn">
                            <the-button @click="openNextMenu"  class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backThree">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>

                  <!-- окно с предпоследним шагом-->
                <div class="one-test testing" v-if="sixInputs">
                    <div class="text">
                        <h2>Where do you live?</h2>
                        <p>Providing your location helps find the best deals near you.</p>
                    </div>
                    
                    <div class="inputs">
                        <div class="one">
                            <input type="text" placeholder="Street address"
                            v-model="streetAdress"
                            :class="{'error': street}">
                            <p v-if="street">Enter address</p>
                        </div>
                        <div class="one">
                            <input type="text" placeholder="City"
                            v-model="cityAdress"
                            :class="{'error': сity}">
                            <p v-if="сity">Enter address</p>
                        </div>
                        <div class="flex-one">
                            <div class="one-input">
                                <input type="text" placeholder="Province"
                                v-model="provinceAdress"
                                :class="{'error': province}">
                                <p v-if="province">Enter address</p>
                            </div>
                            <div class="one-input">
                                <input type="text" placeholder="Postal code"
                                v-model="postalAdress"
                                @input="postalCode"
                                :class="{'error': code}">
                                <p v-if="code">Enter address</p>
                            </div>
                        </div>
                    </div>


                    <div class="next">
                        <div class="btn">
                            <the-button @click="lastStep"  class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backFive">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>

                <!-- окно с последним шагом -->
                <div class="one-test testing" v-if="lasting">
                    <div class="text">
                        <h2>Congratulations! Last step.</h2>
                        <p>Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </p>
                    </div>
                    <div class="inputs">
                        <div class="flex-one">
                            <div class="one-input">
                                <input type="text" placeholder="First name"
                                @keydown="validateInput"
                                v-model="oneNameStep"
                                :class="{'error': oneName}">
                                <p v-if="oneName">Enter your Name</p>
                            </div>
                            <div class="one-input">
                                <input type="text" placeholder="Last name"
                                @keydown="validateInput"
                                v-model="twoNameStep"
                                :class="{'error': twoName}">
                                <p v-if="twoName">Enter your Name</p>
                            </div>
                        </div>
                        <div class="one">
                            <input type="text" placeholder="Email"
                            :class="{'error': !emailValid}"
                            v-model="email">
                            <p v-if="!emailValid">Enter address</p>
                        </div>
                         <div class="one">
                            <input type="text" placeholder="Phone number"
                            v-model="numsPhone"
                            @input="reverPhone"
                            :class="{'error': nums}">
                            <p v-if="nums">Enter phone 10 nums</p>
                        </div>
                    </div>
                    


                    <div class="next">
                        <div class="btn">
                            <the-button @click="closeTest"   class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backLast">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>

                <!-- конец -->
                <div class="one-test testing" v-if="closeResult">
                    <div class="img">
                        <img src="../assets/images/icons/yes.svg" alt="">
                    </div>
                    <div class="text">
                        <h2>Application successful!</h2>
                        <p>Your response was successfully submitted. Thank you! 
                            Our team will reach out to you shortly. </p>
                    </div>
                    <div class="number">
                        <h5>Confirmation number:</h5>
                        <div class="number__text">
                            <span>{{randomNumber}}</span>
                        </div>
                    </div>
                    


                    <div class="next">
                        <div class="btn one">
                         <router-link to="/"> <the-button class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Go to main page</the-button></router-link> 
                        </div>
                    </div>
                    
                </div>





                <!-- четвертное окно -->
                <!-- окно с множеством кнопок -->
                <div class="one-test testing" v-if="four">
                    <div class="text">
                        <h2>How do you earn income?</h2>
                        <p>Your employment status will help determine the best vehicle and financing options for you.</p>
                    </div>
                    <div class="block">
                        <div class="btn">
                            <input type="radio" id="disability" name="disability"
                            :value="foutItem"
                            @click="foutItem= true">
                            <label for="disability">Long-term disability</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="support" name="disability"
                             :value="foutItem"
                             @click="foutItem= true">
                            <label for="support">Spousal support / Alimony</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="Child" name="disability"
                             :value="foutItem"
                             @click="foutItem= true">
                            <label for="Child">Child support</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="Welfare" name="disability"
                             :value="foutItem"
                             @click="foutItem= true">
                            <label for="Welfare">Social assistance / Welfare</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="leave" name="disability"
                             :value="foutItem"
                             @click="foutItem= true">
                            <label for="leave">Maternity leave</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="tax" name="disability"
                             :value="foutItem"
                             @click="foutItem= true">
                            <label for="tax">Baby bonus / Child tax</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="listed" name="disability"
                             :value="foutItem"
                             @click="foutItem= true">
                            <label for="listed">Other / Not listed</label>
                        </div>
                        <div class="btn">
                            <input type="radio" id="Unemployed" name="disability"
                             :value="foutItem"
                             @click="foutItem= true">
                            <label for="Unemployed">Unemployed / EI</label>
                        </div>
                    </div>
                    <div class="next">
                        <div class="btn">
                            <the-button @click="openFourInputs"  class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backFourMenu">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>
                <!-- окно с инпутом -->
                <div class="one-test testing" v-if="fiveInputs">
                    <div class="text">
                        <h2>Enter your monthly income</h2>
                        <p>Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.</p>
                    </div>
                    <div class="inputs">
                        <div class="one">
                            <input type="tel" 
                            placeholder="Monthly income"
                            v-model="incomsTwo"
                            pattern="[0-9]*" 
                            @input="incomsMoundet"
                            :class="{'error': errorIncomeTwo}">
                            <p v-if="errorIncomeTwo">Enter the amount of income more than 2 characters</p>
                        </div>
                    </div>
                    <div class="next">
                        <div class="btn">
                            <the-button @click="openNextIncom"  class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backFour">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>
                <!-- окно с инпутами -->
                <div class="one-test testing" v-if="employmentTwo">
                    <div class="text">
                        <h2>Tell us about your employment</h2>
                        <p>We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible.</p>
                    </div>
                    <div class="inputs">
                        <div class="one">
                            <input type="text" 
                            :class="{'error': errorEmployerTwo}"
                            v-model="inputEmployerTwo"
                            placeholder="Employer">
                            <p v-if="errorEmployerTwo">Enter a couple of words</p>
                        </div>
                        <div class="one">
                            <input type="text" 
                            placeholder="Title"
                            v-model="inputTitleTwo"
                            :class="{'error': errorTitleTwo}">
                            <p v-if="errorTitleTwo">Enter a couple of word</p>
                        </div>
                    </div>
                    <div class="next">
                        <div class="btn">
                            <the-button @click="openNewIncome"  class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backThreeIncome">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>

                <!-- предпоследний шаг -->
                <div class="one-test testing" v-if="bigInputs">
                    <div class="text">
                        <h2>Where do you live?</h2>
                        <p>Providing your location helps find the best deals near you.</p>
                    </div>
                    
                    <div class="inputs">
                        <div class="one">
                            <input type="text" placeholder="Street address"
                            v-model="streetAdressTwo"
                            :class="{'error': streetTwo}">
                            <p v-if="streetTwo">Enter address</p>
                        </div>
                        <div class="one">
                            <input type="text" placeholder="City"
                            v-model="cityAdressTwo"
                            :class="{'error': сityTwo}">
                            <p v-if="сityTwo">Enter address</p>
                        </div>
                        <div class="flex-one">
                            <div class="one-input">
                                <input type="text" placeholder="Province"
                                v-model="provinceAdressTwo"
                                :class="{'error': provinceTwo}">
                                <p v-if="provinceTwo">Enter address</p>
                            </div>
                            <div class="one-input">
                                <input type="text" placeholder="Postal code"
                                v-model="postalAdressTwo"
                                @input="postalCodeTwo"
                                :class="{'error': codeTwo}">
                                <p v-if="codeTwo">Enter address</p>
                            </div>
                        </div>
                    </div>


                    <div class="next">
                        <div class="btn">
                            <the-button @click="validationLastSttp"   class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backFiveTwo">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>
                <!-- последний шаг -->
                <div class="one-test testing" v-if="lastStepComleted">
                    <div class="text">
                        <h2>Congratulations! Last step.</h2>
                        <p>Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </p>
                    </div>
                    <div class="inputs">
                        <div class="flex-one">
                            <div class="one-input">
                                <input type="text" placeholder="First name"
                                @keydown="validateInput"
                                v-model="oneNameStep"
                                :class="{'error': oneName}">
                                <p v-if="oneName">Enter your Name</p>
                            </div>
                            <div class="one-input">
                                <input type="text" placeholder="Last name"
                                @keydown="validateInput"
                                v-model="twoNameStep"
                                :class="{'error': twoName}">
                                <p v-if="twoName">Enter your Name</p>
                            </div>
                        </div>
                        <div class="one">
                            <input type="text" placeholder="Email"
                            :class="{'error': !emailValid}"
                            v-model="email">
                            <p v-if="!emailValid">Enter address</p>
                        </div>
                         <div class="one">
                            <input type="text" placeholder="Phone number"
                            v-model="numsPhone"
                            @input="reverPhone"
                            :class="{'error': nums}">
                            <p v-if="nums">Enter phone 10 nums</p>
                        </div>
                    </div>
                    


                    <div class="next">
                        <div class="btn">
                            <the-button @click="closeTest"   class="mb-bm" :bg-color="'#7481FF'" :color-text="'white'">Сontinue</the-button>
                        </div>
                        <div class="back" @click="backLastTwo">
                            <img src="../assets/images/news/str.svg" alt="">
                            <span>Back</span>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
   </div>
</template>

<script>
import ButtonVue from '../components/ui/Button.vue';
export default{
    components:{
        'the-button': ButtonVue,
    },
    data(){
        return{
            // вторая ветка
            incomsTwo: '',
            errorIncomeTwo: false,

            employmentTwo: false,
            errorEmployerTwo: false,
            errorTitleTwo: false,
            inputEmployerTwo: '',
            inputTitleTwo: '',
            bigInputs: false,
            streetAdressTwo: '',
            streetTwo: false,
            сityTwo: false,
            cityAdressTwo: '',
            provinceTwo: false,
            provinceAdressTwo: '',
            codeTwo: false,
            postalAdressTwo: '',

            lastStepComleted: false,

            completed: true,
            result: 10,
            // первое окно
            one: true,
            selectedBudget: null,


            // второе окно
            two: false,
            selectWork: null,

            // третьe
            three: false,
            // валидация инпута
            incomeMonth: '',
            errorIncome: false,
            // два инпута
            errorEmployer: false,
            errorTitle: false,
            inputEmployer: '',
            inputTitle: '',

            // четвертый инпут
            fourInputs: false,
            sixInputs: false,


            // предпоследний шаг
            code: false,
            province: false,
            сity: false,
            street: false,
            streetAdress: '',
            cityAdress: '',
            provinceAdress: '',
            postalAdress: '',

            // предпоследний шаг:
            lasting: false,
            oneName: false,
            twoName: false,
            oneNameStep: '',
            twoNameStep: '',
            email: '',
            emailValid: true,
            nums: false,
            numsPhone: '',

            closeResult: false,

            randomNumber: null,
            array: ['0002466-1vwrh0', 
            '0002sadwrh0', 
            'dasdasdaasdas',
            '3211231231-asda',
            '1231dsad-dsd',
            'wqeqw213=211',
            'dsadas',],


            // четвертрое
            // множество кнопок
            four: false,
            foutItem: null,

            // пятый инпут
            fiveInputs: false,
            fiveIncoms: '',
            
        }
    },
    methods:{
        // вторая ветка
        incomsMoundet(){
             this.incomsTwo = this.incomsTwo.replace(/[^0-9]/g, "");
            if (this.incomsTwo.length > 10) {
                this.incomsTwo = this.incomsTwo.substr(0, 10);
            }
        },
        openNextIncom(){
            if(this.incomsTwo.length < 2){
                this.errorIncomeTwo = true;
            }else{
                this.errorIncomeTwo = false;
                this.employmentTwo = true;
                this.fiveInputs = false;
                this.result = 60;
            }
        },
        backThreeIncome(){
            this.employmentTwo = false;
            this.fiveInputs = true;
            this.result = 50;
        },
        openNewIncome(){
            if(this.inputEmployerTwo.length < 2){
                this.errorEmployerTwo = true;
            }else{
                this.errorEmployerTwo = false;
            }
            if(this.inputTitleTwo.length < 2){
                this.errorTitleTwo = true;
            }else{
                this.errorTitleTwo = false;
                // bigInputs
            }
            if(this.inputEmployerTwo.length > 2 && this.inputTitleTwo.length > 2){
                this.bigInputs = true;
                this.result = 70;
                this.employmentTwo = false;

            }
        },
        backFiveTwo(){
            this.bigInputs = false;
            this.result = 60;
            this.employmentTwo = true;
        },
        postalCodeTwo(){
            this.postalAdressTwo = this.postalAdressTwo.replace(/[^0-9]/g, "");
            if (this.postalAdressTwo.length > 5) {
                this.postalAdressTwo = this.postalAdressTwo.substr(0, 5);
            }
        },
        validationLastSttp(){
            if(this.streetAdressTwo.length < 2){
                this.streetTwo = true;
            }else{
                this.streetTwo = false;
            }
            if(this.cityAdressTwo.length < 2){
                this.сityTwo = true;
            }else{
                this.сityTwo = false;
            }
            if(this.provinceAdressTwo.length < 2){
                this.provinceTwo = true;
            }else{
                this.provinceTwo = false;
            }
            if(this.postalAdressTwo.length < 5){
                this.codeTwo = true;
            }else{
                this.codeTwo = false;
            }
            if(this.postalAdressTwo.length  == 5 && this.provinceAdressTwo.length > 2 && this.cityAdressTwo.length > 2 && this.streetAdressTwo.length > 2){
                this.lastStepComleted = true;
                this.result = 80;
                this.bigInputs = false;
            } 

        },
        backLastTwo(){
            this.lastStepComleted = false;
            this.result = 70;
            this.bigInputs = true;
        },



        openTwo(){
            this.one = false;
            this.two = true;
            this.result = 20;
            console.log(this.selectedBudget)
        },
        backOne(){
            this.two = false;
            this.one = true;
            this.result = 10;
            this.selectedBudget = null;
        },

        openThree(){
            if(this.selectWork == 1){
                this.three = true;
                this.two = false;
                this.result = 30;
                console.log('третье')
                // открытие меню с множеством кнопок
            }else if(this.selectWork == 2){
                this.four = true;
                this.two = false;
                this.result = 30;
                console.log('ноль')
            }
        },
        backTwo(){
            this.three = false;
            this.two = true;
            this.result = 20;
            this.errorIncome = false;
            this.selectWork = null;
        },
        backFourMenu(){
            this.four = false;
            this.two = true;
            this.result = 20;
            this.selectWork = null;
        },
        incomeInput(){
            this.incomeMonth = this.incomeMonth.replace(/[^0-9]/g, "");
            if (this.incomeMonth.length > 10) {
                this.incomeMonth = this.incomeMonth.substr(0, 10);
            }
        },
        openFourMenu(){
            if(this.incomeMonth.length < 2){
                this.errorIncome = true;
            }else{
                this.errorIncome = false;
                this.three = false;
                this.fourInputs = true;
                this.result = 40;

            }
        },
        openFourInputs(){
            if(this.foutItem){
                this.four = false;
                this.result = 50;
                this.fiveInputs = true;
            }
        },
        backFour(){
                this.four = true;
                this.result = 40;
                this.fiveInputs = false;
                this.foutItem = null;
        },
        backThree(){
            this.three = true;
            this.fourInputs = false;
            this.result = 30;
            this.errorTitle = false;
            this.errorEmployer = false;

        },
        lastStep(){
            if(this.streetAdress.length < 1){
                this.street = true;
            }else{
                this.street = false;
            }
            if(this.cityAdress.length < 1){
                this.сity = true;
            }else{
                this.сity = false;
            }
            if(this.provinceAdress.length < 1){
                this.province = true;
            } else{
                this.province = false;
            }
            if(this.postalAdress.length < 1){
                this.code = true;
            }else{
                this.code = false;
            }
            if(this.postalAdress.length > 4 && this.provinceAdress.length > 2 && this.cityAdress.length > 2 && this.streetAdress.length > 2 ){
                this.lasting = true;
                this.sixInputs = false;
                this.result = 80;
            }

        },
        validateInput(event){
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
        reverPhone(){
            this.numsPhone = this.numsPhone.replace(/[^0-9]/g, "");
            if (this.numsPhone.length > 12) {
                this.numsPhone = this.numsPhone.substr(0, 12);
            }
        },

        closeTest(){
            if(this.oneNameStep.length < 2){
                this.oneName = true;
            }else{
                this.oneName = false;
            }
            if(this.twoNameStep.length < 2){
                this.twoName = true;
            }else{
                this.twoName = false;
            }
            if(this.numsPhone.length < 10){
                this.nums = true;
            }else{
                this.nums = false;
            }
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
             if (!emailRegex.test(this.email)) {
                this.emailValid = false;
            } else {
                this.emailValid = true;
            }

            if(this.emailValid && this.numsPhone.length  > 9 && this.twoNameStep.length > 2 && this.oneNameStep.length > 2 ){
                this.oneName = false;
                this.twoName = false;
                this.nums = false;
                this.emailValid = true;
                this.completed = false;
                this.closeResult = true;
                this.lasting = false;
                this.lastStepComleted = false;
                let randomArr = Math.floor(Math.random() * this.array.length);
                this.randomNumber = this.array[randomArr];


            }
        },

        backLast(){
            this.lasting = false;
            this.sixInputs = true;
            this.result = 50;
        },
        postalCode(){
            this.postalAdress = this.postalAdress.replace(/[^0-9]/g, "");
            if (this.postalAdress.length > 5) {
                this.postalAdress = this.postalAdress.substr(0, 5);
            }
        },


        // два инпута
        openNextMenu(){
            if(this.inputTitle.length < 1){
                this.errorTitle = true;
            } else{
                 this.errorTitle = false;
            }
            if(this.inputEmployer.length < 1){
                this.errorEmployer = true;
            }else{
                this.errorEmployer = false;
            }
            if(this.inputEmployer.length > 2 && this.inputTitle.length > 2){
                this.fourInputs = false;
                this.sixInputs = true;
                this.errorTitle = false;
                this.errorEmployer = false;
                this.result = 50;
            }
        },
        backFive(){
            this.fourInputs = true;
            this.sixInputs = false;
            this.result = 40;
            this.code = false;
            this.province = false;
            this.сity = false;
            this.street = false;

        },




        // пятый инпут
        fiveInputsReplace(){
            this.fiveIncoms = this.fiveIncoms.replace(/[^0-9]/g, "");
            if (this.fiveIncoms.length > 10) {
                this.fiveIncoms = this.fiveIncoms.substr(0, 10);
            }
        },
    },
    computed: {
        // открытие первого меню
        twoMenu() {
            return !this.selectedBudget;
        },
        threeMenu(){
            return !this.selectWork
        }

  }
}
</script>

<style lang="scss" scoped>
.quiz{
    margin-top: 150px;
    margin-bottom: 100px;
    &__content{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        &-test{
            max-width: 454px;
            width: 100%;
            .bar{
                height: 8px;
                background: #F1F1F1;
                border-radius: 20px;
                margin-bottom: 60px;
                width: 100%;
                transition: all .3s;
                .result{
                    transition: all .3s;
                    background: #7380FF;
                    height: 8px;
                    border-radius: 20px;
                }
            }
            .testing{
                .img{
                    margin-bottom: 20px;
                }
                .text{
                    h2{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 25px;
                        line-height: 140%;
                        color: #41456B;
                    }
                    p{
                        margin: 0;
                        margin-top: 5px;
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 159%;
                        color: #7C7A84;
                    }
                }
                .block{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 40px;
                    .btn{
                        width: calc(50% - 5px);
                        input{
                            -webkit-appearance: none;
                            appearance: none;
                            visibility: visible;
                        }
                        
                        label{
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 14px;
                            text-align: center;
                            color: #7c7a84;
                            border: 1px solid #f1f1f1;
                            border-radius: 2px;
                            padding: 15px 0;
                            cursor: pointer;
                            width: 100%;
                            display: inline-block;
                            transition: all .1s;
                        }
                        label:hover{
                            border: 1px solid #7481ff;
                            color: #7481ff;
                        }
                        input:checked + label{
                            border: 1px solid #7481ff;
                            color: #7481ff;
                        }
                    }
                }
                .inputs{
                    margin: 40px 0px;
                    .one{
                        margin-top: 10px;
                        input{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 159%;
                            padding: 10px 20px;
                            width: 100%;
                            border: 1px solid #ccc;
                            transition: all .3s;
                        }
                        p{
                            color: red;
                        }
                        input.error{
                            border: 1px solid red;
                        }
                        input:focus{
                            outline: 1px solid #828181;
                            border: 1px solid #828181;
                        }
                        input::placeholder{
                            color: #D7D7D7;
                        }
                    }
                    .flex-one{
                        display: flex;
                        justify-content: space-between;
                        margin: 10px 0px;
                        .one-input{
                            input{
                                font-family: 'Gilroy';
                                font-style: normal;
                                font-weight: 500;
                                font-size: 16px;
                                line-height: 159%;
                                padding: 10px 20px;
                                width: 100%;
                                border: 1px solid #ccc;
                                transition: all .3s;
                            }
                            p{
                                color: red;
                            }
                            input.error{
                                border: 1px solid red;
                            }
                            input:focus{
                                outline: 1px solid #828181;
                                border: 1px solid #828181;
                            }
                            input::placeholder{
                                color: #D7D7D7;
                            }
                        }
                    }
                    
                    @media(max-width: 500px){
                        .flex-one{
                            flex-direction: column;
                            .one-input:nth-child(2){
                                margin-top: 10px;
                            }
                        }
                    }
                }
                .number{
                    margin: 40px 0px;
                    h5{
                        font-family: 'Gilroy';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 34px;
                        color: #41456B;
                    }
                    .number__text{
                        background: #FFFFFF;
                        max-width: 222px;
                        padding: 10px 20px;
                        text-align: center;
                        border: 1px solid #D7D7D7;
                        border-radius: 2px;
                        span{
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 500;
                            font-size: 16px;
                            line-height: 159%;
                            color: #41456B;
                        }
                    }
                }
                .next{
                    margin-top: 40px;
                    display: flex;
                    align-items: center;
                    .btn.one{
                        max-width: 222px;
                        width: 100%;
                    }
                    .btn{
                        max-width: 222px;
                        width: 100%;
                    }
                    .back{
                        display: flex;
                        align-items: center;
                        margin-left: 66px;
                        cursor: pointer;
                        span{
                            margin-left: 10px;
                            font-family: 'Gilroy';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 16px;
                            line-height: 14px;
                            color: #606276;
                            text-transform: uppercase;
                        }
                    }
                }
            }
            @media(max-width: 500px){
                .testing{
                    margin-top: 30px;
                    .text{
                        h2{
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
                            line-height: 159%;
                        }
                    }
                    .block{
                        flex-direction: column;
                        margin-top: 0;
                        gap: 0;
                        .btn{
                            max-width: 100%;
                            width: 100%;
                        }
                        
                    }
                    .next{
                        flex-direction: row-reverse;
                        justify-content: space-between;
                        .btn.one{
                            max-width: 100%;
                            width: 100%;
                            flex-basis: 100%;
                        }
                        .back{
                            margin: 0;
                            margin-left: 20px;
                        }
                    }
                }
            }
        }

    }
}
</style>