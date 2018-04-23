<template>
  <div class="signin-up-wrap" >
      <!--个人中心-->
            <div class="personInfoPart" v-if="!logPartFlag">
                <PersonalCenter/>
            </div>
      <div id="wrap" v-if="signinflag">
     <!-- 头部 -->
      <div class="header-wrap">
        <div id="header">
        <h2>登录注册</h2>
        </div>
       </div>
       <!-- 内容 -->
         <div class="content">
            <!--登录部分-->
            <div class="logPart" v-if="logPartFlag">
                <!--登录-->
                <div class="login-btn">
                    <span @click="login" :class="loginCheckStatus">登录</span>
                    <span @click="register" :class="registerCheckStatus">注册</span>
                </div>
                <ul class="login" v-if="loginFlag">
                    <li>
                        <i class="fa fa-mobile-phone"></i>
                        <input type="number" placeholder="请输入您的手机号" v-model="phoneNumLogin">
                    </li>
                    <li>
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="请输入您的密码" v-model="passwordLogin">
                    </li>
                    <li>
                        <button type="button" class="green-btn" @click="loginPersInfo">登录</button>
                    </li>
                </ul>
                <!--注册-->
                <ul class="register" v-if="registerFlag">
                    <li>
                        <i class="fa fa-mobile-phone"></i>
                        <input type="number" placeholder="请输入您11位的手机号" v-model="phoneNum" @keyup="checkPhoneNum">
                    </li>
                    <li>
                        <i class="fa fa-user-o"></i>
                        <input type="text" placeholder="请输入您的昵称" v-model="name" @keyup="checkName">
                    </li>
                    <li>
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="请输入您的密码" v-model="password1" @keyup="checkPassword1">
                    </li>
                    <li>
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="请确认您的密码" v-model="password2" @keyup="checkPassword2">
                    </li>
                    <li>
                        <button type="button" class="green-btn" @click="saveRegister">确认注册</button>
                    </li>
                </ul>
            </div>
            
            <!--遮罩层-->
            <div class="mask-layer" v-if="mask">
                <div class="tips">
                    <i class="cancel" @click="cancelTips">×</i>
                    <p>{{maskname}}</p>
                </div>
                <div class="mask-btn-wrap">
                    <router-link v-if="maskbtn" tag="button" :to="{name: 'PersonalCenter'}" class="mask-btn" >注册成功</router-link>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>
<script>
 import PersonalCenter from '@/components/page/personal-center/PersonalCenter'
    export default {
        name: 'SigninAndSingnup',
        components: {
        PersonalCenter
    },
        data() {
            return {
                mask:false,
                maskbtn:false,
                maskname:'',
                userInfo:'',
                username:'',
                signinflag:true,
                loginFlag:true,
                registerFlag:false,
                loginCheckStatus:'login-checked',
                registerCheckStatus:'',
                phoneNum:'',
                name:'',
                password1:'',
                password2:'',
                phoneNumFlag:false,
                nameFlag:false,
                password1Flag:false,
                password2Flag:false,
                phoneNumLogin:'',
                passwordLogin:'',
                logPartFlag:true,
                mask:false,
                routername:'SigninAndSingnup'
            }
        },
        methods:{
            /*登录注册切换*/
            login(){
                this.loginFlag=!this.loginFlag;
                this.registerFlag=!this.registerFlag;
                this.loginCheckStatus='login-checked';
                this.registerCheckStatus='';
            },
            register(){
                this.loginFlag=!this.loginFlag;
                this.registerFlag=!this.registerFlag;
                this.registerCheckStatus='register-checked';
                this.loginCheckStatus='';
            },
            /*手机号验证格式*/
            checkPhoneNum(){
                if(/^1(3|4|5|7|8)\d{9}$/.test(this.phoneNum)){
                    document.getElementsByClassName('fa-mobile-phone')[0].style='color:#1cb43d';
                    this.phoneNumFlag=true;
                }else {
                    document.getElementsByClassName('fa-mobile-phone')[0].style='color:red';
                }
            },
            /*验证昵称是否为空*/
            checkName(){
                if(this.name !==''){
                    document.getElementsByClassName('fa-user-o')[0].style='color:#1cb43d';
                    this.nameFlag=true;
                }
                else {
                    document.getElementsByClassName('fa-user-o')[0].style='color:red';
                }
            },
            /*验证密码是否为空*/
            checkPassword1(){
                if(this.password1 !==''){
                    document.getElementsByClassName('register')[0].getElementsByTagName('li')[2].getElementsByClassName('fa-lock')[0].style='color:#1cb43d';
                    this.password1Flag=true;
                }else {
                    document.getElementsByClassName('register')[0].getElementsByTagName('li')[2].getElementsByClassName('fa-lock')[0].style='color:red';
                }
            },
            /*验证密码是否一样*/
            checkPassword2(){
                if(this.password2 ==this.password1){
                    document.getElementsByClassName('register')[0].getElementsByTagName('li')[3].getElementsByClassName('fa-lock')[0].style='color:#1cb43d';
                    this.password2Flag=true;
                }else {
                    document.getElementsByClassName('register')[0].getElementsByTagName('li')[3].getElementsByClassName('fa-lock')[0].style='color:red';

                }
            },
            /*注册成功后情况注册框值跳转到个人中心页面同时将数据存储到本地*/
            saveRegister(){
                this.username = this.name;
                //判断输入框是否有内容
                if(this.phoneNum == "" || this.name == "" || this.password1 == "" || this.password2 == ""){
                    this.mask = true;
                    this.maskname = "用户注册信息不完善！"
                }
                let info = {
                    user:this.username,
                    pass:this.password1,
                    phone:this.phoneNum
                }
                console.log(info)
                console.log(3333);
                if(this.phoneNumFlag&&this.nameFlag&&this.password1Flag&&this.password2Flag){
                    // alert('注册成功！');
                    // 将用户和用户密码上传到app.vue
                    this.userInfo = info;
                    this.$emit("singnup",this.userInfo,this.username);
                    this.signinflag = false;
                    // this.loginFlag=true;
                    this.registerFlag=false;
                    this.loginCheckStatus='login-checked';
                    this.registerCheckStatus='';
                    this.maskname = "注册成功！"
                    this.maskbtn = true;
                    this.mask = true;
                    this.$router.push('PersonalCenter');
                    this.phoneNum='';
                    this.name='';
                    this.password1='';
                    this.password2='';
                    this.logPartFlag=false;
                    
                    
                }
            },
            // saveRegister(){
            //     this.$emit("routername",this.routername);
            // },
            /*登录时获取输入框值判断是否与本地存储的值一样*/
            loginPersInfo(){
                //判断本地是否有用户名
                if(!localStorage.getItem("userinfo")){
                    //没有
                    
                }
                /*登录成功就跳转到个人中心*/
                if(this.passwordLogin == localStorage.getItem('password2')&&this.phoneNumLogin == localStorage.getItem('phoneNum')){
                    this.logPartFlag=false;
                    this.$router.replace('PersonalCenter');
                }
                else{
                      this.mask=true;
                      this.maskname = "输入的密码和账号不正确!"

                }
            },
            /*关闭提示框*/
            cancelTips(){
                this.mask=false;
            }
        }
    }
</script>
<style lang="scss">
    // 遮罩的按钮
    .mask-btn-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
        .mask-btn{
        background: rgb(51,153,51);
        color: white;
        padding: 15px;
        font-size: 16px;
        }
    }
    
    .content{
        ul{
            padding: 0;
        }
        li{
            list-style: none;
        }
         background: white;
    .login-btn{
        text-align: center;
        font-size: 18px;
        border-bottom: 1px solid rgba(174, 174, 174, 1);
        span{
        display: inline-block;
        padding: 10px 10px;
          }
        } 
    .login,.register{
        width: 100%;
    }
     /*登录注册选中效果*/
    .login-checked,.register-checked{
        color: #1cb43d;
        border-bottom: 1px solid  #1cb43d;
    }
    /*登录注册样式*/
    .register li,.login li{
        text-align: left;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(174, 174, 174, 1);
        padding: 5px 20px;
    }
     .fa-lock,.fa-mobile-phone,.fa-user-o{
        font-size: 26px;
        color:rgba(174, 174, 174, 1);
        display: inline-block;
        width: 24px;
    }
    .fa-mobile-phone{
        font-size: 42px;
    }
    .fa-user-o{
        font-size: 28px;
    }
    input{
        border: none;
        outline: none;
        padding-left: 10px;
        font-size: 16px;
    }
    .register li:nth-child(1),.login li:nth-child(1){
        margin-top: 30px;
    }
    .register li:last-child,.login li:last-child{
        text-align: center;
        padding-top: 30px;
        border-bottom: transparent;
    }
    /*绿色按钮样式*/
    .green-btn{
        border-radius: 5px;
        border: none;
        width:calc(100% - 10px);
        background: rgb(51,153,51);
        color: white;
        padding: 15px;
        font-size: 16px;
    }
    /*遮罩层*/
    .mask-layer{
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
    }

</style>

