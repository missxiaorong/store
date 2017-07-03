<template lang="html">
  <div class="containers">

    <home-header></home-header>
    <div class="content">
      <ul class="cont-ul">
        <list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></list>
      </ul>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import HomeHeader from './components/homeHeader'
import CommonFooter from './components/commonFooter'
import List from './components/list'
import CommonAside from './components/aside'
export default {
  data () {
      return {
          items: []
      }
  },

  components: {
    HomeHeader,
    CommonFooter,
    List,
    CommonAside
  },
  created () {
    this.$http.get('/api/goods').then((success) => {
      this.items = success.body.data
      console.log(111)
    }, (error) => {
      console.log(error)
    })
  }
}
</script>

<style  scoped>
  .containers {
    width: 100%;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    padding-top: 0.2rem;
    background-color: #F3F3F3;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
