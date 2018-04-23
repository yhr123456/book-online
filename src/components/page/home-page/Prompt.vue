<template>
  <div class="prompt-wrap">
       <!-- 遮罩 -->
        <div v-if="showMask" class="mask">
            <div>{{maskname}}</div>
        </div>
      <!-- 图书详情 -->
    <infomation
        v-show="false"
        @storage="storageinfo"
        :fo = "transInfo"
    />
      <div class="prompt-content">
          <!-- 关闭按钮 -->
          <div class="prompt-close">
              <span @click="closebtn"  class="fa fa-close fa-2x"></span>
          </div>
          <!-- 内容 -->
          <div class="prompt-contail">
              <div class="prompt-introduce">
                  <!-- 图片 -->
                  <div class="introduce-img">
                      <img :src="info.cover" alt="">
                  </div>
                  <div class="introduce-author">
                      <div class="author">
                          <label>作者</label>
                          <span>{{info.author}}</span>
                      </div>
                      <div class="pages-number">
                          <label>页数</label>
                          <span>666</span>
                      </div>
                      <div class="book-number">
                          <label>书号</label>
                          <span>B00CBBJS5Y</span>
                      </div>
                       <div class="publication-data">
                          <label>出版日期</label>
                          <span>2012年3月1日</span>
                      </div>
                      <!-- 详情 -->
                      <div class="detail-wrap" @click="detailclick">
                          <router-link tag="div" :to="{name: 'infomation',params:{info}}" class="detail">
                          详情 &gt;
                         
                      </router-link>
                      </div>
                      
                  </div>
              </div>
               <!-- 书名 -->
                  <div class="prompt-bookname">
                      <h2>{{info.name}}</h2>
                  </div>
                  <!-- 书本介绍 -->
                  <div class="prompt-detal">
                      <p>{{info.describe}}</p>
                  </div>
                  <!-- 价格 -->
                  <div class="prompt-price">
                      <div class="price">
                          <span>{{"￥" + info.price}}</span>
                          </div>
                      <div class="number">
                          <select class="select">
                              <option value="1">1本</option>
                              <option value="2">2本</option>
                              <option value="3">3本</option>
                              <option value="4">4本</option>
                          </select>
                    </div>
                  </div>
                  <!-- 购物车 -->
                  <div class="prompt-shoppingcart">
                      <ul class="shoppingcart-btn">
                          <li v-for="(btnname,index) in btnInfo" :key="btnname.id" @click="btnclick(index)" :class="{btncolor: idx == index}">
                              <span>{{btnname}}</span>
                          </li>
                      </ul>
                  </div>
          </div>
      </div>
  </div>
</template>
<script>
import infomation from '@/components/page/classification/infomation'
export default {
  name:"Prompt",
  props:["info"],
  components:{
      infomation
  },
  data(){
      let a = this.info;
      return{
          maskname:"商品添加成功，客官可前往购物车查看！",
          showMask:false,
          display:false,
          closecolor:false,
          idx:0,
          localInfo:{},
          btnInfo:["加入购物车","立即购买"],
          transInfo:a
      }
  },
  created(){
  },
  methods:{
      //加入购物车和立即购买的点击事件
      btnclick(index){
          this.idx = index;
          //index为0则点击的是加入购物车
          //是1则点击的是立即购买
          if(index == 0){    
            //加入购物车
            this.showMask = !this.showMask;
            this.localInfo = this.$props.info;
            //判断本地是否有数据
          if(!localStorage.getItem("newinfo")){
              console.log(1)
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
              console.log(2)
              let name = this.localInfo.name;
              //获取本地数据
              let getlocalInfo = JSON.parse(localStorage.getItem("newinfo")),
                  getlocalInfoLen = getlocalInfo.length;
                //循环判断本地是否已经存在这个数据了
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
        //   this.maskname = "商品添加成功，客官可前往购物车查看！";



          }else{
            //立即购买
            this.$router.push({path:"shoppingCart"});
          }
      },
      closebtn(){
          this.maskname = "商品添加成功，客官可前往购物车查看！";
          this.$emit("close",this.mask)
      },
      detailclick(){
          this.$emit("detail",this.display);
      },
      storageinfo(val){
        
          this.$emit('allshopping',val)
        },
  }
}
</script>

<style lang="scss">
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

 .closecolor{
     color: red;
 }
 .btncolor{
     background: green;
     color: white;
 }
 .prompt-wrap{
     position: relative;
     width: 100%;
     height: 100%;
    //  background: rgba(94,94,94,.75);
     position: absolute;
     top: 0;
     left: 0;
     z-index: 5;
     & > .prompt-content{
        width: 90%;
        height: 90%;
        background: white;
        margin: 0 auto;
        position: fixed;
        bottom: 2%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        border: 1px solid gray;
         &>.prompt-close{
             height: 10%;
             padding: 10px 0;
             box-sizing: border-box;
             border-bottom: 1px solid gray;
           >span{
               display: block;
               text-align: right;
               padding-right: 10px;
               box-sizing: border-box;
               
           }
         }
         &> .prompt-contail{
             position: relative;
             height: 90%;
            //  margin-top: 30px;
             &> .prompt-introduce{
                 height: 35%;
                 display: flex;
                //  &> div{
                //      display: inline-block;
                //  }
                 &> .introduce-img{
                     width: 30%;
                     
                     >img{
                         width: 100%;
                         height: 100%;
                     }
                 }
                 &> .introduce-author{
                     width: 56%;
                     height: 100%;
                     margin-left: 4%;
                    >div{
                        padding: 2% 0;
                        box-sizing: border-box;
                        >label{
                           color: gray;
                           width: 25%;
                           display: inline-block
                        }  
                    }
                    .detail-wrap{
                        text-align: right;
                         &> .detail{
                            display: inline-block;
                            color: gray;
                            display: block;
                            text-align: right;
                            padding-right: 10px;
                            box-sizing: border-box
                        }  
                    }
                    
                    
                 }
             }
             &> .prompt-bookname{
                 height: 5%;
                 h2{
                     font-size: 18px;
                 }
             }
             &> .prompt-detal{
                 border-bottom: 1px solid gray;
                 padding: 0 10px;
                //  text-overflow: ellipsis;
                     overflow: hidden;
                //      white-space: nowrap;
                     height: 30%;
                 p{
                     height: 100%;
                    // margin: 0;
                 }

             }
             &> .prompt-price{
                 height: 10%;
                 margin: 3% 0;
                 border-bottom: 1px solid gray;
                 border-top: 1px solid gray;
                 display: flex;
                 .number{
                     .select{
                         padding: 5px 20px;
                         position: absolute;
                         top: 50%;
                         left: 50%;
                         transform: translateX(-50%)translateY(-50%);
                     }
                 }
                 >div{
                     text-align: center;
                     position: relative;
                   
                     width: 50%;
                    //  height: 100%;
                    span{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        font-size: 18px;
                        transform: translateY(-50%)translateX(-50%);
                    }
                 }
                 .price{
                     border-right: 1px solid gray;
                     
                 }
             }
             &> .prompt-shoppingcart{
                 height: 10%;
                 >ul{
                     background: white;
                     height: 90%;
                     width: 95%;
                     padding: 0px;
                     margin: 0px auto;
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     border: 1px solid gray;
                    >li{
                        height: 100%;
                        width: 50%;
                        text-align: center;
                        list-style: none;
                        position: relative;
                        span{
                            display: block;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            font-size: 16px;
                            transform: translateY(-50%)translateX(-50%);
                            
                            
                        }

                    }
                 }
             }
         }
     }
 }
</style>

