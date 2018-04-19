<template>
    <div id='shoopingcar'>
        <div  v-show="main">
             <div id="header">
                <h2>
                    购物车
                </h2>
             </div>
        <p>编辑</p>
        <div v-for="(msg,index) in commodity" :key='index' id='commodity'>
            <img :src=msg.cover alt="加载中">
            <div>
                <p id="name">{{ msg.name }}</p>
                <p id="author">{{ msg.author }}</p>
                <p id="price">￥ {{ msg.price }} <span @click="reduce(index)">-</span><input type="text"  value=1><span @click="add(index)">+</span></p>
            </div>
            
        </div>
        <button @click="check">前往支付</button>
        </div>
       <order v-show="orderpage" @havefooter="havefooter" :total="total"/>
    </div>
</template>
<script src = "./shopping-cart.js"></script>
<style lang="scss" scoped>
    @import './shopping-cart.scss';
</style>
