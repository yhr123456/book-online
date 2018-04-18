<template>
  <div class="prompt-wrap">
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
                      <router-link tag="div" :to="{name: 'HomePage'}" class="detail">
                          <span>详情 &gt;</span>
                          
                      </router-link>
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
                          <span>1本</span>
                    </div>
                      <!-- <span class="price">{{"￥" + info.price}}</span>
                      <span class="number">3本</span> -->
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
export default {
  name:"Prompt",
  props:["info"],
  data(){
      return{
          closecolor:false,
          idx:0,
          btnInfo:["加入购物车","立即购买"]
      }
  },
  methods:{
      btnclick(index){
          this.idx = index;
      },
      closebtn(){
          this.$emit("close",this.mask)
          console.log(2)
        //   this.mask = false;
        //   this.closecolor = true;
      }
  }
}
</script>

<style lang="scss">
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
     background: rgba(94,94,94,.75);
     position: absolute;
     top: 0;
     left: 0;
     z-index: 5;
     & > .prompt-content{
         width: 90%;
         height: 90%;
         background: white;
         margin: 0 auto;
         position: absolute;
         bottom: 0;
         left: 50%;
         transform: translateX(-50%);
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
                     &> .detail{
                          >span{
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
                 border: 1px solid gray;
                 display: flex;
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

