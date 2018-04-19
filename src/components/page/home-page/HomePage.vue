<template>
  <div id="wrap" class="home-wrap">
      <div class="header-wrap">
        <div id="header">
        <h2>掌上书城</h2>
        </div>
      </div>
      
      <!-- 内容 -->
  <div class="main-wrap">
    <div id="main">
          <!-- 轮播 -->
          <!-- Swiper -->

    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
             <img src="../../../assets/3.png" alt="">
            </div>
             <div class="swiper-slide">
                  <img src="../../../assets/2.png" alt="">
              </div>
            <div class="swiper-slide">
                <img src="../../../assets/1.png" alt="">
            </div>
        </div>
    <!-- Add Pagination -->
   <div class="swiper-pagination"></div>
   </div>
  <!-- 打折消息 -->
    <div class="discount">
        <span class="fa fa-bell-o fa-2x"></span>
        <div class="remove">
            <p>
            双12全场图书低至1折，更有隐藏神秘惊喜
           </p>
        </div>
        
    </div>
    <!-- content -->
    <div class="content-wrap">
        <Content
        :info = "newInfo"
        title = 新书上架
        />
        <Content
        title = 编辑推荐
        :info = "editorInfo"
      
        />
        <Content
        title = 热门新书
        :info = "populInfo"
        />
    </div>
  </div>
  </div>
  <div class="footer-wrap">
      
  </div>
</div>
</template>
<script src="./home-page.js"></script>

<style lang="scss" >
    @import './home-page.scss';
</style>


