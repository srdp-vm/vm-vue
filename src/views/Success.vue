<template>
  <div>
    <div class="main">
      <img class="image" src="../assets/img/success.png" alt="支付成功" />
      <div class="success">支付成功</div>
      <div class="price">27.8元</div>
    </div>
    <div class="box detail">
      <div class="container">
        <div class="title">订单编号</div>
        <div class="content" id="order_no">075229811669756</div>
      </div>
      <div class="container">
        <div class="title">交易时间</div>
        <div class="content" id="order_time">2020-07-16</div>
      </div>
      <div class="container">
        <div class="title">订单详情</div>
        <div class="content" id="order_content">
          <div class="item">
            <span class="name">可口可乐</span>
            <span class="num">*5</span>
            <span class="price">13.9元</span>
          </div>
          <div class="item">
            <span class="name">雪碧</span>
            <span class="num">*5</span>
            <span class="price">13.9元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {};
</script>

<style>
.main {
  padding: 20px 0;
}

.main .image {
  display: block;
  margin: 0 auto;
}

.main .success {
  padding: 5px 0;
  text-align: center;
  color: #008fff;
  font-size: 18px;
}

.main .price {
  padding: 5px 0;
  text-align: center;
  font-size: 24px;
}

.box {
  color: #333;
  padding: 10px 15px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.detail .container {
  margin-bottom: 5px;
}

.detail .container::before,
.detail .container::after {
  content: "";
  display: block;
  clear: both;
}

.container .title {
  width: 20%;
  float: left;
}

.container .content {
  width: 80%;
  padding-left: 10px;
  float: right;
}
</style>
