<template>
  <div class="address-wrap">
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
           <router-link tag="span"  :to="{name: 'PersonalCenter',params:display}" >
                        &lt;
            </router-link>
        <h2>收货地址</h2>
        </div>
       </div> 
       <!-- 内容 -->
       <div class="main-box">
           <ul>
               <li>
                   <label>姓名</label>
                   <input type="text" placeholder="请填写您的真实姓名" v-model="receivAddress.name">
               </li>
                <li>
                   <label>联系电话</label>
                   <input type="text" placeholder="请填写您的联系电话" v-model="receivAddress.phoneNum">
               </li>
                <li>
                   <label>邮政编码</label>
                   <input type="text" placeholder="请填写您所在地区邮编码" v-model="receivAddress.postCodes">
               </li>
                <li class="select-wrap">
                    <div>
                    <select v-model="receivAddress.province" name="ads" >
                        <option  v-for="(ads,index) in addressInfo" :key="ads.id" @click="cutaddress(index)">{{ads}}</option>
                    </select>
                    </div>
                    <div>
                    <select v-model="receivAddress.city" name="city">
                        <option v-for="(city,index) in cityInfo" :key="city.id" @click="cutcity(index)">{{city}}</option>
                    </select>
                    </div>
                    <div>
                    <select v-model="receivAddress.district" name="val">
                        <option  v-for="(val,index) in regionInfo" :key="val.id" @click="cutregion(index)">{{val}}</option>
                    </select>
                    </div>
                    
               </li>
               <li>
                   <label>详细地址</label>
                   <input  type="text" placeholder="请填写详细的街道、楼栋、门牌号" v-model="receivAddress.detailed">
               </li>
           </ul>
           <!-- 按钮 -->
            <div class="sure-btn">
                <button type="button" @click="addsure">确认地址</button>
            </div>
       </div>
  </div> 
</template>
<script>
export default {
  name:"Address",
  data(){
      return{ 
          mask:false,
          sure:true,
          maskname:"",
          addressInfo:["四川省","广东省","广西","湖北省","...."],
          cityInfo:["成都市","绵阳市","攀枝花市","泸州市","...."],
          regionInfo:["武侯区","金牛区","高新区","锦江区","...."],
          addressinfo:this.$route.params.userinfo,
          receivAddress:{
                    name:'',
                    postCodes:'',
                    phoneNum:'',
                    province:'四川省',
                    city:'成都市',
                    district:'高新区',
                    detailed:''
                },
          display:{
              show:true
          }
      }
  },
  created(){
      this.getaddressinfo();
  },
  methods:{
      getaddressinfo(){
          if(!(this.$route.params.addressinfo == undefined)){
            //有数据传过来
            let data = this.$route.params.addressinfo;
            console.log(data)
            this.receivAddress.name = data.receivname;
            this.receivAddress.phoneNum = data.phoneNum;
            this.receivAddress.postCodes = data.postCodes;
            this.receivAddress.province = data.receivAddress.province;
            this.receivAddress.city = data.receivAddress.city;
            this.receivAddress.district = data.receivAddress.district;
            this.receivAddress.detailed = data.receivAddress.detailed;
          }
      },
      //确认地址按钮的点击事件，只是用于判断输入框是否输入了值
      addsure(){
          if(this.receivAddress.name == ""){
              this.sure = false;
          }else if(this.receivAddress.detailed == ""){
              this.sure = false;
          }else if(this.receivAddress.phoneNum == ""){
              this.sure = false;
          }else if(this.receivAddress.postCodes == ""){
              this.sure = false;
          }
          if( !this.sure){
              this.mask = true;
              this.maskname = "请完善个人信息！"
          }else{
          this.$router.push({name:"shoppingCart",params:this.receivAddress});
          }

      },
       //遮罩关闭按钮的点击事件
       cancelTips(){
          this.mask = false;
          this.name == "";
          this.phone == "";
          this.address == "";
          this.zipcode == ""
       }
  }
}
</script>
<style lang="scss">
/*遮罩层*/
    .mask-layer{
        z-index: 2;
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
   .address-wrap{
       width: 100%;
    .header-wrap{
        #header{
            position: relative;
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
        ul{
            margin: 0;
            padding: 0;
            margin-bottom: 30px;
          li{
            position: relative;
            border-bottom: 1px solid gray;
            list-style: none;
            padding: 0px 3%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            height: 70px;
              &> label{
                line-height: 70px;
                display: inline-block;
                width: 20%;
                font-size: 18px;
                color: gray;
              }
              &> input{
                border: 0;
                font-size: 18px;
                width: 70%;
                outline: none;
                display: inline-block;
              }
          }   
          .select-wrap{
              &> div{
                  line-height: 60px;
                  display: inline-block;
                  height: 70%;
                  width: 30%;
                   &> select{
                       width: 100%;
                       padding: 8px 0px 8px 10px;
                       box-sizing: border-box;
                      letter-spacing: 2px;
                      font-size: 18px;
                      color: #666;
                      display: inline-block;
                    &> option{
                        // width: 100%;
                    }
                  }
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


