<template>
  <preloader :loading="isLoading"/>
  <the-header></the-header>
  <div class="page">
    <div class="main menu-container">
      <RouterView  />
    </div>
  </div>
  <the-footer v-if="showFooter"></the-footer>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import "./assets/style/style.scss";

// импорт хедера
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

// preloader
import PreloaderVue from "./components/Preloader.vue";

export default {
  data() {
    return {
      isLoading: false,
      showFooter: true,
    };
  },
  components: {
    "the-header": Header,
    "the-footer": Footer,
    RouterView,
    preloader: PreloaderVue,
  },
  mounted() {
  // document.body.style.overflow = "hidden";
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      this.isLoading = true;
      // document.body.style.overflowY = "auto";
    } 
  }
},
watch: {
    '$route': function() {
      if (this.$route.name === 'quiz' || this.$route.name === 'quizId') {
        this.showFooter = false;
      } else {
        this.showFooter = true;
      }
    }
  }
}
</script>


<style >
@import url('@/assets/fonts/fonts.css');
body{
      font-family: Gilroy, sans-serif;
      overflow-y: overlay;
      overflow-x: hidden;
      width: 100%;
      
}
body.lock{
  overflow: hidden;
}
.page{
  flex: 1 1 auto;
}




.main{
  margin-top: 80px;
  
}




</style>
