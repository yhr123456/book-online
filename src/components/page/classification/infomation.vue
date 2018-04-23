<template>
    <div>       
    <!-- 遮罩 -->
        <div v-if="showMask" class="mask">
            <div>{{maskname}}</div>
        </div>

        <div id="header">
                <h2 @click="haveftooer">
                    <router-link :to="{name: 'HomePage',params:showflag}" tag="span" style="float:left">&lt;</router-link>
                    图书详情
                    <span></span>
                </h2>
        </div>
        <div id='book-info' style="width:100%;overflow-y:auto">
            <div id='top'>
                <img :src=info.cover >
                <div>
                   <p>作者
                        <span>{{info.author}}</span>
                    </p>
                    <p>页数
                        <span>450</span>
                    </p>
                     <p>书号
                        <span>BSKZ-25465131</span>
                    </p>
                     <p>出版日期
                        <span>2018-4-12</span>
                    </p>
                     <p>售价
                        <span>{{info.price}}</span>
                    </p>
                </div>
            </div>
            <h3>{{info.name}}</h3>
            <button class="add" @click='addcar' :class="{btncolor:addflag}">加入购物车</button>
            <router-link :to="{name: 'shoppingCart'}">
                <button class="pay" @click="payclick" :class="{btncolor:shoppingflag}">立即购买</button>
            </router-link>
            
            <div id="bottom">
                <fieldset>
                     <legend>内容概要</legend>
                    <span>{{info.describe}}</span>
                </fieldset>
            </div>
            
        </div>
    </div> 
</template>
<script>
export default {
  name:'infomation',
  props:['fo'],
  data(){
      let a = this.info;
      return{
          showMask:false,
          maskname:"商品添加成功，客官可前往购物车查看！",
          //用来存储对应的数据
          localInfo:{},
          shoppingflag:true,
          addflag:false,
          mask:false,
          showflag:{
              show:true,
          },
          
      }
  },
  computed:{
     info(){
          if(this.fo == undefined){
              return this.$route.params.info
          }else{
              return this.fo
          }
      }
  },
  created(){
      this.getinfo();
  },
  methods:{
      getinfo(){
          this.localInfo = this.info;
      },
      /*加入购物车的点击事件*/
      addcar(){
             //加入购物车
            this.showMask = !this.showMask;
            this.localInfo = this.info;
            //判断本地是否有数据
          if(!localStorage.getItem("newinfo")){
              //这是本地没有
              let  data = null;
              if(localStorage.getItem("newinfo")){
                  data = JSON.parse(localStorage.getItem("newinfo"))
              }else{
                  data = [];
              }
              data.push(this.localInfo);
              localStorage.setItem(`newinfo`,JSON.stringify(data));
          }else{
              let name = this.localInfo.name;
              //获取本地数据
              let getlocalInfo = JSON.parse(localStorage.getItem("newinfo")),
                  getlocalInfoLen = getlocalInfo.length;
                //循环判断本地是否已经存在这个数据了
                console.log(getlocalInfo);
                if(getlocalInfoLen == 0){
                    getlocalInfo.push(this.localInfo);
                    localStorage.setItem("newinfo",JSON.stringify(getlocalInfo));        
                }
                for(let i = 0;i<getlocalInfoLen;i++){
                    if(name === getlocalInfo[i].name){
                        setTimeout( () =>{
                            this.maskname = "该商品已经添加购物车，客官不可以重复添加哦!";
                            return;
                        });
                        break;
                    }else if(i === getlocalInfoLen-1){
                        //添加到本地
                       let newdata = JSON.parse(localStorage.getItem("newinfo"))
                        newdata.push(this.localInfo);
                        localStorage.setItem(`newinfo`,JSON.stringify(newdata));
                        }
                }

          }
          setTimeout( () =>{
            this.showMask = !this.showMask;
          },2000)
      },
      payclick(){
          this.addflag = false;
          this.shoppingflag = true;
      },
        /*判断 */
      haveftooer(){
          this.$emit('haveftooer',this.showflag)
      },
      cancelTips(){
          this.mask = false;
      }
  }
}
</script>
<style lang="scss" scoped>
    .btncolor{
        background-color: green!important;
        color:white!important;
        border-color: transparent!important;
    }
    //遮罩
.mask {
    width: 100%;
    height: 100%;
        div {
            z-index: 1;
            width: 88%;
            height: 100px;
            font-size: 16px;
            border: 1px solid #eee;
            line-height: 100px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 7px;
            color: #0e49eb;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.9);
        }
    }
    #book-info{
        margin-top: 50px;
         width: 100%;
        height: 100%;
        padding: 20px;
        overflow-y: auto;
        #top{
            height: 145px;
            img{
                width: 28%;
                height: 100%;
            }
            div{
                display: inline-block;
                width: 70%;
                overflow: hidden;
                p{
                    margin: 10px 0 0 10px;
                    font-size: 14px;
                    color: gray;
                    position: relative;
                    span{
                        display: inline-block;
                        position: absolute;
                        left: 40%;
                    }
                }
            }
        }
       button{
           width: 40%;
           height: 40px;
           border-radius: 10px;
           box-shadow:none;
           outline:none; 
           font-size: 15px; 
       }
       .add{
           border: 1px solid black;
           background: white;
           
       }
       .pay{
           border: none;
           background:white;
           border: 1px solid gray;
           color:black;
       }
       #bottom{
           width: 100%;
           margin-bottom: 100px;
          fieldset{
              width: 80%;
              box-sizing: border-box;
              margin: 25px 0;
              font-size: 14px;  
            }
       }
       
    }
</style>

