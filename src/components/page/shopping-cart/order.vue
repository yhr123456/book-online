<template>
  <div id="totalpage">
      <div v-show="origen">
          <div id="header">
                <h2 @click="haveftooer">
                    <router-link to="/" tag="span" style="float:left">&lt;</router-link>
                    结算中心 
                    <span></span>
                </h2>
        </div>
        <div class="content">
            <h3>商品详情</h3>
            <div class="order">
                <h4>价格信息</h4>
                <p><span>商品总价：</span><span>￥{{total}}</span></p>
                <p><span>运送费：</span><span>￥10</span></p>
                <p class="specil"><span>商品总价：</span><span>￥{{allprice}}</span></p>
            </div>
            <div class="order info">
                <h4>价格信息</h4>
                <p><span>收货地址：</span><span>{{addressinfo.receivAddress.province + " " + addressinfo.receivAddress.city + " " +  addressinfo.receivAddress.district + " " +  addressinfo.receivAddress.detailed}}</span></p>
                <p><span>收货人：</span><span>{{addressinfo.receivname}}</span></p>
                <p ><span>电话：</span><span>{{addressinfo.phoneNum}}</span></p>
            </div>
            <div class="order addre">
               <router-link tag="p"  :to="{name: 'Address',params:display}" @click="change"><span>修改地址</span><span>&gt;</span></router-link>
            </div>
            <div class="order addre">
               <router-link tag="p" :to="{name: 'Address',params:display}"><span>新增地址</span><span>&gt;</span></router-link>
            </div>
        </div>
        <div class="content">
            <h3>选择支付方式</h3>
            <div class="order addre">
                <p>
                    <span class="img"></span>
                    <span>微信</span>
                    <span>&gt;</span>
                </p>
                 <p>
                    <span class="img img1"></span>
                    <span>支付宝</span>
                    <span>&gt;</span>
                </p>
                 <p>
                    <span class="img img2"></span>
                    <span>银行卡</span>
                    <span>&gt;</span>
                </p>
                 <p>
                    <span class="img img3"></span>
                    <span>信用卡</span>
                    <span>&gt;</span>
                </p>
                 <p>
                    <span class="img img4"></span>
                    <span>visa卡</span>
                    <span>&gt;</span>
                </p>
            </div>
        </div>
      </div>
        
    
  </div>
</template>
<script>
export default {
  name:'order',
  props:['total',"addressinfo"],
  data(){
      let addinfo = this.addressinfo;
      return{
          checked:false,
          origen:true,
          display:{
            show:false,
            addressinfo:addinfo,
        },
      }
  },
  methods:{
      
      haveftooer(){
          this.$emit(`havefooter`,true)
      },
      change(){
          this.checked=true
          this.origen =false
      },
      checkorigen(val,val2){
          this.origen=val
          this.checked=val2
      }
  },
  computed:{
      allprice:{
          get(){
             return this.total+10;    
          }
          
      }
  }
}
</script>
<style scoped lang="scss">
    #totalpage{
        background:lightgrey;
        width: 100%;
        .content{
            width: 90%;
            margin: 0 5%;
            h3{
            color: lightgary;

            }
            
            .order{
                width: 95%;
                margin: 2px auto;
                background: white;
                border: 1px solid gray;
                h4{
                    margin: 10px 10px;
                }
                p{
                    height: 25px;
                    display: block;
                    padding: 0 5%;
                    color: lightgray;
                    span:first-child{
                        float: left;
                    }
                    span:last-child{
                        display:inline-block;
                        width: 60%;
                        float: right;
                        color: #000;
                        font-size: 14px;
                    }
                }
                .specil{
                    font-size: 20px;
                    font-weight: bold;
                    span:first-child{
                        color: #000;
                    }
                    span:last-child{
                        color:orangered;
                    }
                }
            }
            .addre{
                font-size: 16px;
                p{
                    .img{
                        display: inline-block;
                        width: 25px;
                        height: 25px;
                        margin-right: 2px;
                        background: url(../../../../static/img/social_icon_24x24.png) 0% -1%
                    }
                    .img1{
                        background: url(../../../../static/img/pay.png) no-repeat;
                        background-size:cover;
                    }
                    .img2{
                        background: url(../../../../static/img/card.png) no-repeat;
                        background-size:cover;
                    }
                    .img3{
                        background: url(../../../../static/img/card-union.png) no-repeat;
                        background-size:cover;
                    }
                    .img4{
                        background: url(../../../../static/img/cc-visa.png) no-repeat;
                        background-size:cover;
                    }
                    span:nth-child(2){
                        color: #000;
                    }
                    span:last-child{
                        color: lightgray;
                        text-align: right;
                    }
                }
                
            }
            
        }
    }
</style>
