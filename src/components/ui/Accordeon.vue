<template>
    <div class="accordion" ref="accordion">
        <div v-for="(item, index) in items" :key="index" class="accordion-item">
            <div class="flex" @click="toggleAccordion(index)">
                <div class="accordion-title">{{ item.title }}</div>
                <div class="flex-icon">
                    <img src="@/assets/images/strelka.svg" :style="{ transform: `rotate(${item.rotate}deg)` }" alt="">
                </div>
            </div>
          <div :class="{ 'accordion-content': true, 'active': activeIndex === index }">
            {{ item.content }}
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }, 
  data() {
    return {
      activeIndex: null,
      items: [
        { title: this.title, 
          content: this.text,
          rotate: 0 },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
      this.items[index].rotate = (this.items[index].rotate === 0) ? 180 : 0;
      this.$refs.accordion.focus();
    },
  },
};

</script>

<style  scoped>
.accordion {
    width: 100%;
  }
  
  .accordion-item {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    cursor: default;
    padding: 20px 30px;
  }
  .flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .accordion-title{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    /* or 125% */
    /* Primary / Content */

    color: #41456B;
    max-width: 90%;
    cursor: pointer;
  }
  .flex-icon img{
    transition: all 0.2s;
    cursor: pointer;
  }
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s;
    opacity: 0;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    /* or 29px */

    letter-spacing: 0.02em;
    cursor: default;

    /* Secondary / Text */

    color: #606276;
  }
  
  .accordion-content.active {
    max-height: 300px;
    transition: max-height 1s ease-out; /* добавлено плавное замедление */
    padding-top: 20px;
    opacity: 1;
  }


  @media(max-width:500px){
    .accordion-item{
        padding: 20px 20px;
    }
    .accordion-title{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        max-width: 85%;
        /* or 139% */


        /* Primary / Content */

        color: #41456B;
    }
    .accordion-content.active{
        padding-top: 10px;
    }
    .accordion-content{
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
</style>