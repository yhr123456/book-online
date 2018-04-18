<template>     
  <div id="wrap" >
      <div v-show="detils">
        <div id="header">
        <h2>分类</h2>
        </div>
        <div class="content">
            <input type="text" v-model="search" placeholder="请输入图书名以进行查询" @keyup.enter="query">
            <ul>
                <li v-for="(books,index) in less" :key="index" @click="change(index)">
                    <img :src=books.cover >
                    <div>
                        <p class="name">{{books.name}}</p>
                        <p class="author">{{books.author}}</p>
                        <p class="price">￥{{books.price}}</p>
                        <span>&gt;</span>
                    </div>
                </li>
            </ul>
            <p @click="more">加载更多...↓</p>
        </div>    
     </div>
    <mey :info="transport" v-if="build"  @storage="storageinfo"/>
  </div>
</template>
<script src = "./classification.js"></script>
<style lang="scss" scoped>
    @import './classification.scss';
</style>
