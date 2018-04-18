<template>
  <div class="personaldata-wrap">
       <!-- 头部 -->
       <div class="header-wrap">
          
        <div id="header">
           <router-link tag="span"  :to="{name: 'PersonalCenter'}" >
                        &lt;
            </router-link>
        <h2>个人中心</h2>
        </div>
       </div>
        <div class="main-box">
            <ul>
                <li>
                    <label>昵称</label>
                    <input type="text" placeholder="请输入昵称！">
                </li>
                <li>
                    <label>E-mail</label>
                    <input type="text" placeholder="请填写您的安全邮箱">
                </li>
                <li>
                     <label class="gender-name">性别</label>
                    <div class="gender">
                        <label v-for="(val,index) in genderInfo" :key="val.id" @click="cutcolor(index)" :class="{gendercolor: idx == index}">{{val}}
                           
                        </label>
                    </div>    
                </li>
                <li>
                    <label>生日</label>
                    <input type="date"  id="date">
                </li>
                <li>
                    <label>身份证号</label>
                    <input type="text" placeholder="请输入你的18位身份证号">
                </li>
                <li>
                    <label>
                        <span>个人描述</span>
                    </label>
                   <textarea  id="" cols="30" rows="10" placeholder="请谈谈对你自己的认识"></textarea>
                </li>
            </ul>
            <!-- 按钮 -->
            <div class="sure-btn">
                <button type="button">确认修改</button>
            </div>
        </div>
        <!-- 内容 -->
        
  </div>
</template>
<script>
export default {
   name:"PersonalData",
   data(){
      return{
          idx:0,
          genderInfo:["男","女","保密"]
      }
   },
   methods:{
       cutcolor(index){
           this.idx = index;
       }
   }
}
</script>
<style  lang="scss">
  .gendercolor{
      background: green;
      color: white!important;
  }
  .personaldata-wrap{
      height: 100%;
      .header-wrap{
          position: relative;
         #header{
              &> span{
              z-index: 7;
              color: white;
              font-size: 26px;
              display: block;
              position: absolute;
              left: 10px;
              top: 5px;
          }
         }
      }
      .main-box{
          height: 100%;
        ul{
          padding: 0px;
          margin: 0;
          margin-bottom: 10px;

          li:not(:last-child){
              position: relative;
              border-bottom: 1px solid gray;
              list-style: none;
              padding: 0px 5%;
              box-sizing: border-box;
              height: 60px;
              &> label{
                  line-height: 60px;
                  display: inline-block;
                  width: 20%;
                  font-size: 18px;
                  color: gray;
              }
              &>input{
                  padding: 0;
                  border: 0;
                  font-size: 18px;
                  padding: 12px 0px;
                //   height: 59px;
                  width: 70%;
              
                  outline: none;
                  display: inline-block;
              }
              .gender{
                  position: relative;
                  overflow:hidden;
                  width: 40%;
                  display: inline-block;
                  height: 40px;
                  border: 1px solid gray;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                   line-height: 40px;
                   border-radius: 20px;
                   &> label{
                       color: gray;
                       font-size: 18px;
                       text-align: center;
                       display: inline-block;
                       width: 32%;
                       height: 100%；
                    
                   }
                  &> label:nth-child(2){
                      position: absolute;
                      left: 50%;
                      transform: translateX(-50%)
                  }
                  &> label:last-child{
                      position: absolute;
                      right: 0;
                  }
              }
          }
          li:last-child{
              padding: 10px 5%;
              border-bottom: 1px solid gray;
              position: relative;
              width: 100%;
              height: 140px;
              &> label{ 
                display: inline-block;
                width: 20%;
                
              &>span{
                font-size: 18px;
                color: gray;
                display: inline-block;
                position: absolute;
                top: 10px;
              }
                 
              }
              &> textarea{
                  height: 100%;
                  font-size: 18px;
                  padding: 0px;
                  padding-left: 10px;
                  width: 60%;
                  outline: none;
                  border: 0px; 
              }
          }
      }
      .sure-btn{
          position: relative;
          width: 100%;
          height: 100px;
        &> button{
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translateY(-50%) translateX(-50%);
            transform: translateY(-50%) translateX(-50%);
            display: block;
            width: 70%;
            padding: 16px 0;
            border-radius: 8px;
            color: white;
            background: green;
            font-size: 18px;
        }
      }
      }
  }
</style>
 

