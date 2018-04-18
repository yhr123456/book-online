<template>
  <div id="wrap" class="personal-wrap">
      <!-- <PersonalData/> -->
      <!-- 头部 -->
       <div class="header-wrap">
        <div id="header">
        <h2>个人中心</h2>
        </div>
       </div>
        <!-- 内容 -->
        <div class="main-wrap">
            <!-- logo -->
            <div class="logo-wrap">
                <div class="logo-content">
                    <div class="logo-img-wrap">
                        <div class="logo-img">
                        <img src="../../../assets/melogo.png" alt="">
                        </div>
                    <p>你是不是傻</p>
                    </div>
                   
                </div>
            </div>
            <!-- 选项 -->
            <div class="select">
                <div class="install-address">
                <ul>
                    <router-link tag="li"  :to="{name: 'PersonalData',params:display}" class="data">设置个人资料
                        <span>&gt;</span>
                    </router-link>
                    <router-link tag="li" :to="{name: 'Address',params:display}">收货地址管理
                         <span>&gt;</span>
                    </router-link>
                </ul>
            </div>
            <div class="order-evaluation">
                <ul>
                    <li >我的订单
                         <span>&gt;</span>
                    </li>
                    <li>我的评价
                         <span>&gt;</span>
                    </li>
                </ul>
            </div>
            <div class="collection">
                <ul>
                    <li >商品收藏
                         <span>&gt;</span>
                    </li>
                    <li>店铺收藏
                         <span>&gt;</span>
                    </li>
                    <li>浏览记录
                         <span>&gt;</span>
                    </li>
                </ul>
            </div>
            </div>
          <!-- 按钮 -->
        <div class="personal-btn">
            <button type="button">退出登录</button>
        </div>   
        </div>
      </div>
</template>
 <script src = "./personal-center.js"></script>
<style lang="scss" scoped>
    @import './personal-center.scss';
</style>
