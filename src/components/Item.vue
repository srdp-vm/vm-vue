<template>
  <div class="container">
    <img src="../assets/img/sprite.jpg" height="100px" width="100px" />
    <div class="detail">
      <span class="name">{{ item.name }}</span>
      <div class="tail">
        <span class="price">&yen;&nbsp;{{ item.price }}</span>
        <span class="num">{{ item.num }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.item {
  background: #fff;
  border-radius: 10px;
  min-height: 100px;
  padding: 10px;
  position: relative;
}

.item::before,
.item::after {
  content: "";
  display: block;
  clear: both;
}

.item img {
  float: left;
}

.item .detail {
  width: calc(100% - 100px);
  padding: 10px 0 0 10px;
  float: right;
  position: relative;
}

.item .detail .name {
  display: block;
}

.item .detail .tail {
  margin-top: 45px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
}

.item .detail .price {
  display: block;
  color: #ff8400;
}

.item .detail .num::before {
  content: "数量:";
  display: inline-block;
  width: 50px;
  position: absolute;
  right: 100%;
  text-align: center;
}

.item .detail .num {
  display: inline-block;
  position: relative;
  min-width: 10%;
  text-align: center;
  color: rgb(134, 134, 134);
  border: 1px solid rgb(221, 221, 221);
  border-radius: 2px;
}
</style>
