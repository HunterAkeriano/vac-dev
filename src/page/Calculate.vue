<template>
    <section class="calculating">
        <bottom-header>Use our free calculator!</bottom-header>
        <calculatod class="calculator"></calculatod>
    </section>
</template>
<script>
import BottomHeaderVue from '../components/BottomHeader.vue';
import CalculatorVue from '../components/Calculator.vue';


export default{
    components:{
        'bottom-header': BottomHeaderVue,
        'calculatod': CalculatorVue,
    }
}
</script>
<style scoped>
.calculator{
    margin-top: 80px;
}
@media(max-width: 710px){
    .calculator{
        margin-top: 30px;
    }
}
</style>