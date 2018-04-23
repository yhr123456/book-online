<template>
    <div id='shoopingcar'>
        <div  v-show="main">
             <div id="header">
                <h2>
                    购物车
                </h2>
             </div>
        <p class="state-wrap" v-show="havebook">
            <span class="edit" @click="state">编辑</span>
           <span class="del" v-show="delCheck" @click="delected">删除选中</span> 
        </p>
        <!-- 没有商品时 -->
         <div class="tips" v-if="hasNoBook">
                <div>
                    <img src="http://www.cnyigui.com/file/upload/201609/20/143638961.png" alt="">
                </div>
                <p>购物车暂时空了</p>
                <router-link :to="{name: 'HomePage'}" class="go-shopping">去逛逛？</router-link>
            </div>
        <div v-for="(msg,index) in commodity" :key='index' id='commodity'>
            <input v-show="delCheck" @click="delConfirm(index)" class="confirm" type="checkbox"  ref="confirm">
            <img :src=msg.cover alt="加载中">
            <div>
                <p id="name">{{ msg.name }}</p>
                <p id="author">{{ msg.author }}</p>
               <p id="price">￥ {{ msg.price }} <span @click="reduce(index)">-</span><input type="text"  value=1 class="amount"><span @click="add(index)">+</span></p>

            </div>
            
        </div>
        <button @click="check" v-show="havebook">前往支付</button>
        </div>
       <order v-show="orderpage" @havefooter="havefooter" :total="total" :addressinfo="addressinfo"/>
       <!--遮罩层-->
       <div class="mask-wrap" v-if="mask">
           <div class="tips">
               <h3>小可爱提醒您</h3>
               <p>客官您的资料不完善，是否前往填写</p>
               <div class="btn">
                 <button type="button" @click="no">否</button>
                 <router-link tag="button" :to="{name:'Address',params:display}">是</router-link>
                 <!-- <button type="button" @click="yes">是</button> -->
               </div>
              
           </div>
           
       </div>
       
    </div>
</template>
<script src = "./shopping-cart.js"></script>
<style lang="scss" scoped>
    @import './shopping-cart.scss';
</style>
