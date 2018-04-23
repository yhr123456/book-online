<template>
  <div id="app">
      <router-view 
      @singnup="singnupclick" 
      @storage="addshopping"
      @allshopping="addshopping" 
      @noftooer="no" 
      @hasfooter="hasfooter"
      @dtailclick="dtail"
      @del = "delLoca"
      />
    
    <div id="footer" v-show="ti" v-if="displayFunction">   
      <ul class="footer">
          <router-link tag="li" :to="{name: 'HomePage'}" exact class="logo" >

             <i  class="fa fa-home fa-2x"></i>
             <p>首页</p>
          </router-link>
          <router-link tag="li" :to="{name: 'Class'}" class="logo">
             <i class="fa fa-share-alt fa-2x"></i>
            <p>分类</p>
          </router-link >
           <router-link tag="li" :to="{name: 'shoppingCart'}" class="logo">
              <i class="fa fa-shopping-cart fa-2x"></i>
            <p>购物车</p>
          </router-link>
          <router-link tag="li" :to="{name: routerto,params:newdata}" class="logo">
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
    // let a = this.getstorageflag();
    return{
      localinfo:"",
      strogeflag:'',
      flag:0,
      userinfo:[],
      name:'',
      allCommodity:[],
      ti:true,
      routerto:"",
      newdata:'',
    }
  },
  created(){
    this.getinfo();
    let newdata = JSON.parse(localStorage.getItem(`newinfo`));
    if(newdata == null){
      // localStorage.clear();
    }
  },
  methods:{
    getinfo(){
     
       // 获取本地数据
      let data = JSON.parse(localStorage.getItem(`userinfo`));
      // let localdata = JSON.parse(localStorage.getItem("newinfo"));
      //  this.localinfo = localdata;
      
      // 判断本地是否有数据
      if(localStorage.getItem("userinfo")){
         this.flag = 1;
         console.log(data);
         this.newdata = data[0];
         this.routerto = "PersonalCenter";
      }else{ 
        this.routerto = "SigninAndSingnup";
      }
      //判断
    },
    // 删除商品
    delLoca(val){
      let data =JSON.parse(localStorage.getItem('newinfo'))
      localStorage.clear
      for(var i =0; i < val.length;i++){
          data.splice(i,1)
           localStorage.setItem(`newinfo`,JSON.stringify(data))
      }
      //如果本地的数据都被删除完了，就清空本地
      if(newdata.length == 0 ){
        //购物车空了后清空本地存储
        localStorage.clear();
      }

    },
    addshopping(val){
      this.allCommodity.push(val)
      localStorage.setItem(`info`,JSON.stringify(this.allCommodity))
    },
    no(val){
        this.ti=val
    },
    hasfooter(val){
        this.ti = val;
    },
    dtail(flag){
      // this.ti = false;
    },
    singnupclick(val,newname){

      console.log(val);
      this.name = newname;
      this.userinfo.push(val)
      // 本地存储
      localStorage.setItem(`userinfo`,JSON.stringify(this.userinfo))
    }
  },
  computed:{
    // 用于控制尾部的显示与隐藏
    displayFunction(){
      let dis ;
      if(this.$route.params.show || this.$route.params.show == undefined){
        this.ti = true;
        dis = true;
        this.display=true;
      }else{
        dis = this.$route.params.show;
        this.display = this.$route.params.show;
      }
      
      return dis;
    },
    // 用于判断本地是否有用户
    // getstorage(){
    //   // 获取本地数据
    //   let data = JSON.parse(localStorage.getItem(`userinfo`));
    //   console.log(data);
    //   //判断  
    //   return data[0];
    // },


  }
}
</script>

<style lang="scss" >
body,html{
  margin: 0;
  width: 100%; 
  height: 100%;
}
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-thumb{
  width: 10px;
  background: gray;
  border-radius: 3px;
}
#app{
  height: 100%;

}
#wrap{
  height: 100%;
}
.main-wrap{
  overflow: auto;
}
.main-wrap{
   height: calc(100% - 130px);
 }
.header-wrap{
  height: 50px;
}
.footer-wrap{
  height: 80px;
}
#header{
  height: 50px;
  position: fixed;
  top: 0px;
  z-index: 3;
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
      height: 80px;
      background: white;
      padding: 10px 0;

      position:fixed;

      bottom: 0px;
      box-sizing: border-box;
      padding: 15px;
      width: 100%;
      border-top: 1px solid lightgray;
      z-index: 1;
      background: white
    }
    .footer{
      width: 100%;
      padding:0px;
      margin:0px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > li{
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
