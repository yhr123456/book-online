<template>
  <div id="app">

    <div>
      <router-view @allshopping="addshopping" @noftooer="no" @hasfooter="hasfooter"/>
    </div>
    <div id="footer" v-show="ti">   
      <ul>
          <router-link tag="li" :to="{name: 'HomePage'}" exact >
             <i  class="fa fa-home fa-2x"></i>
             <p>首页</p>
          </router-link>
          <router-link tag="li" :to="{name: 'Class'}">
             <i class="fa fa-share-alt fa-2x"></i>
            <p>分类</p>
          </router-link>
           <router-link tag="li" :to="{name: 'shoppingCart'}">
              <i class="fa fa-shopping-cart fa-2x"></i>
            <p>购物车</p>
          </router-link>
          <router-link tag="li" :to="{name: 'PersonalCenter'}">
             <i class="fa fa-user fa-2x"></i>
            <p>我</p>
          </router-link>
      </ul>
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      allCommodity:[],
      ti:true
    }
  },
  beforeCreate(){
    this.ti=true
  },
  methods:{
    addshopping(val){
      this.allCommodity.push(val)
      localStorage.setItem(`info`,JSON.stringify(this.allCommodity))
    },
    no(val){
          this.ti=val
    },
    hasfooter(val){
          this.ti = val
    }
  }
}
</script>

<style lang="scss">
body,html{
  margin: 0;
  width: 100%; 
}
#header{
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  text-align: center;
  background: black;
  h2{
    color: white;
    font-size: 22px;
    margin: 0;

  }
}
#footer{
      padding: 10px 0;
      position: fixed;
      bottom: 0px;
      box-sizing: border-box;
      padding: 15px;
      width: 100%;
      border-top: 1px solid lightgray;
      z-index: 1;
      background: white
    }
    ul{
      width: 100%;
      padding:0px;
      margin:0px;
      display: flex;
      justify-content: center;
      align-items: center;
      li{
        text-align: center;
        width: 25%;
        list-style: none;
        p{
          margin: 0;
        }
      }
      
    }
    ul .active{
        color:rgb(40, 224, 40);
      }
</style>
