
<template lang="html">
  <div class="head">
    <div class="title">
      <ul>
        <li @click="toggle()">
          <img src="../assets/images/nav.png">
        </li>
        <li><p class="title-name">潤源之</p></li>
      </ul>
    </div>
    <common-aside  v-on:getChild="showChild" v-bind:class="[clicked ? 'close-class' : 'open-class']"></common-aside>
    <mt-swipe :auto="5000">
      <mt-swipe-item>
        <img src="../assets/images/1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/3.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/4.jpg">
      </mt-swipe-item>
    </mt-swipe>
    <div>

    </div>
  </div>
</template>

<script>
  import { Swipe, SwipeItem} from 'mint-ui'
  import CommonAside from './aside'
  export default {

    data(){
      return{
        clicked:true
      }
      
    },
    components: {
      CommonAside
    },

    methods:{
      toggle(){
       if(this.clicked){
        this.clicked = false
      }else{
       this.clicked = true
     }
     this.state = this.clicked
   },
   showChild(data){
    if(!data){
      this.clicked = true
    }
   }
}
}


</script>

<style scoped>
  @import '../assets/css/style.css'
  
</style>
