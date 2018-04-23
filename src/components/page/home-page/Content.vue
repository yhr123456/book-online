<template>
   <div class="book-box" >
    <!-- 弹出框 -->
      <prompt
       :info = "detailInfo"
       v-show = "mask"
       :mask = "mask"
       @close = "closebtn"
       @detail = "detailclick"
       @allshopping = "shoppingcart"
      />
        <!--标题-->
        <div class="title-box">
            <h1>{{title}}</h1>
        </div>
      <!--内容-->
        <ul class="content-box">
            <li v-for="(val,index) in info " :key="val.id" @click="githomeclick(val,index)" >
                <!--图片-->
                <div class="img-box">
                    <img :src="val.cover" alt="">
                </div>
                <p class="title">{{val.name}}</p>
                <p class="price">
                    <span>￥</span>
                    {{val.price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import Prompt from '@/components/page/home-page/Prompt'
export default {
  name:"Content",
  props:["info","title"],
  components: {
        Prompt,
    },
  data(){
      return{
          detailInfo:{
              cover: '',
              author: '',
              describe: '',
              name: '',
              price: '',
          },
          mask:'',
          
      }
  },
  methods:{
      githomeclick(val,index){
        // this.$emit("gitinfo",val,index)
        console.log(1);
        this.detailInfo = val; 
        this.mask = true;
      },
      closebtn(){
          console.log(333);
          this.mask = false;
      },
      detailclick(flag){
          this.$emit("detailclick",flag);
      },
      shoppingcart(val){
            console.log("这是content")
            this.$emit('allshopping',val)
        },
  }
}
</script>

