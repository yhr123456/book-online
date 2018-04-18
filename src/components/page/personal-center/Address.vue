<template>
  <div class="address-wrap">
      <!-- 头部 -->
       <div class="header-wrap">
          
        <div id="header">
           <router-link tag="span"  :to="{name: 'PersonalCenter'}" >
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
                   <input type="text" placeholder="请填写您的真实姓名">
               </li>
                <li>
                   <label>联系电话</label>
                   <input type="text" placeholder="请填写您的联系电话">
               </li>
                <li>
                   <label>邮政编码</label>
                   <input type="text" placeholder="请填写您所在地区邮编码">
               </li>
                <li class="select-wrap">
                    <div>
                    <select>
                        <option value="ads" v-for="(ads,index) in addressInfo" :key="ads.id" @click="cutaddress(index)">{{ads}}</option>
                    </select>
                    </div>
                    <div>
                    <select>
                        <option value="city" v-for="(city,index) in cityInfo" :key="city.id" @click="cutcity(index)">{{city}}</option>
                    </select>
                    </div>
                    <div>
                    <select>
                        <option value="val" v-for="(val,index) in regionInfo" :key="val.id" @click="cutregion(index)">{{val}}</option>
                    </select>
                    </div>
                    
               </li>
               <li>
                   <label>详细地址</label>
                   <input type="text" placeholder="请填写详细的街道、楼栋、门牌号">
               </li>
           </ul>
           <!-- 按钮 -->
            <div class="sure-btn">
                <button type="button">确认地址</button>
            </div>
       </div>
  </div> 
</template>
<script>
export default {
  name:"Address",
  data(){
      return{
          addressInfo:["四川省","广东省","广西","湖北省","...."],
          cityInfo:["成都市","绵阳市","攀枝花市","泸州市","...."],
          regionInfo:["武侯区","金牛区","高新区","锦江区","...."]
      }
  }
}
</script>
<style lang="scss">
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
            padding: 0px 5%;
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
                padding: 12px 0px;
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


