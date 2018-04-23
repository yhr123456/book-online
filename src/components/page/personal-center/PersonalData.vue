<template>
  <div class="personaldata-wrap">
       <!--遮罩层-->
    <div class="mask-layer" v-if="mask">
        <div class="tips">
            <i class="cancel" @click="cancelTips">×</i>
            <p>{{maskname}}</p>
        </div>
    </div>
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
                    <input type="text" placeholder="请输入昵称！" v-model="iptuser">
                </li>
                <li>
                    <label>E-mail</label>
                    <input type="text" placeholder="请填写您的安全邮箱" v-model="email">
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
                    <input type="text" placeholder="身份证号码为15位或者18位" v-model="idNumber">
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
                <button type="button" @click="modificationBtn">确认修改</button>
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
          maskname:'',
          mask:false,
          idsure:false,
          sure:false,
          email:'',
          idNumber:'',
          idx:0,
          iptuser:'',
          username:this.$route.params.username,
          genderInfo:["男","女","保密"]
      }
   },
   computed:{
       inptuser(){
           this.iptuser = this.username;
           return this.iptuser;
       },
    
   },
   created(){
       this.getuser();
   },
   methods:{
       getuser(){
           this.iptuser = this.$route.params.username;
       },
       cutcolor(index){
           this.idx = index;
       },
       //个人中心确认修改按钮
       modificationBtn(){
         //邮箱的正则判断
         if(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.email)){
             this.sure = true;
         }else{
             this.sure = false;
         }
         //判断身份证号
         // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
        if(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ .test(this.idNumber)){
           this.idsure = true; 
        }else{
            this.idsure = false;
        }
        //判断是否有输入邮箱和身份证号码
        if(this.idNumber == "" && this.email == ""){
            this.mask = true;
            this.maskname = "身份证和邮箱不能为空！"
        }else if(this.idNumber == ""){
            this.mask = true;
            this.maskname = "身份证不能为空！"
        }else if(this.email == ""){
            this.mask = true;
            this.maskname = "邮箱不能为空！"
        }else if(!this.idsure && !this.sure){
            this.mask = true;
            this.maskname = "身份证和邮箱输入格式不合法！"
        }else  if(!this.idsure){
            this.mask = true;
            this.maskname = "身份证输入不合法！"
        }else if(!this.sure){
            this.mask = true;
            this.maskname = "请输入正确的邮箱名！"
        }else{
            this.mask = true;
            this.maskname = "修改成功";
        }
       },
       //遮罩关闭按钮的点击事件
       cancelTips(){
           this.mask = false;
           this.idNumber = "";
           this.email = "";
       }
   }
}
</script>
<style  lang="scss">
/*遮罩层*/
    .mask-layer{
        z-index:5;
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .mask-layer .tips{
        width: 300px;
        height: 150px;
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -75px;
        margin-left: -150px;
        border: 1px solid black;
        border-radius:5px;
    }
    .tips p{
        text-align: center;
        line-height: 150px;
        color: red;
    }
    /*关闭按钮*/
    .cancel{
        display: inline-block;
        width: 20px;
        height: 20px;
        color: black;
        font-style: normal;
        font-size: 20px;
        text-align: center;
        position: absolute;
        right: 0;
    }
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
              padding: 0px 3%;
              box-sizing: border-box;
              height: 60px;
              &> label{
                  line-height: 60px;
                  display: inline-block;
                  width: 20%;
                  height: 100%;
                  font-size: 18px;
                  color: gray;
              }
              &>input{
                  padding: 0;
                  border: 0;
                  font-size: 18px;
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
              padding: 10px 3%;
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
 

