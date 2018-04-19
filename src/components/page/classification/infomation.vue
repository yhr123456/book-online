<template>
    <div>
        <div id="header">
                <h2 @click="haveftooer">
                    <router-link to="/" tag="span" style="float:left">&lt;</router-link>
                    分类 
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
            <button class="add" @click='addcar'>加入购物车</button>
            <button class="pay">立即购买</button>
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
  props:['info'],
  methods:{
      addcar(){
            this.$emit(`storage`,this.info)
      },
      haveftooer(){
          this.$emit('haveftooer',true)
      }
  }
}
</script>
<style lang="scss" scoped>
    #book-info{
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
           background:green;
           color:white;
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

