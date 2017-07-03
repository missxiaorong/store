import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Detail from '../pages/goodsDetail'
import Msg from '../components/Message.vue'
import Cart from '../pages/shopCart'
import MyCenter from '../pages/myCenter'
import ConfirmOrder  from '../pages/confirmOrder'
import AddressList from '../components/addressList'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: App
  
  },
   {
    path: '/index',
    component: App
  
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
          path:'msg',
          component: Msg
      }
    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path:'/myCenter',
    component: MyCenter
  },
  {
    path: '/confirmOrder',
    component:ConfirmOrder
  },
  {
    path: '/addressList',
    component:AddressList
  }
]
const router = new VueRouter({
  routes: routes      //注意是routes而不是routers,坑就在这里
});

export default router;