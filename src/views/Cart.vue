<template>
  <div>
    <div id="header-fixed" ref="header">购物车({{ items.length }})</div>
    <div id="header" @click="test">
      <!-- 购物车说明 -->
      <span class="title">购物车</span>
      <span class="count">共{{ items.length }}件商品</span>
    </div>
    <Nothing v-if="items.length == 0"></Nothing>
    <div class="content" v-else>
      <Item
        class="item"
        :item="item"
        v-for="(item, index) in items"
        :key="index"
      ></Item>
    </div>
    <div id="footer">
      <span id="totalprice">￥{{ totalprice }}</span>
      <button id="settleup" @click="settleup">结算</button>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import Nothing from "@/components/Nothing.vue";

export default {
  name: "Cart",
  components: {
    Item,
    Nothing,
  },
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    totalprice() {
      let total = 0;
      this.items.forEach((element) => {
        total += element.price * element.num;
      });
      return total;
    },
  },
  methods: {
    getDateNow() {
      var dateNow = new Date();
      var sNow = "";
      sNow += String(dateNow.getFullYear());
      sNow += String(dateNow.getMonth() + 1);
      sNow += String(dateNow.getDate());
      sNow += String(dateNow.getHours());
      sNow += String(dateNow.getMinutes());
      sNow += String(dateNow.getSeconds());
      sNow += String(dateNow.getMilliseconds());
      return sNow;
    },
    httpPost(url, params) {
      var form = document.createElement("form");
      form.action = url;
      form.method = "post";
      form.style.display = "none";
      for (var x in params) {
        var input = document.createElement("input");
        input.name = x;
        input.value = params[x];
        form.appendChild(input);
      }
      document.body.appendChild(form);
      //提交form
      form.submit();
    },
    settleup() {
      var price = this.totalprice;
      var trade = this.getDateNow();
      var params = {
        order_id: trade,
        subject: "自助售货机",
        total_amount: price,
        create_time: "balabala",
        items: this.items,
      };

      this.httpPost("http://localhost:8080/VM3.0/Pay", {
        jsondata: JSON.stringify(params),
      });
    },
    test() {
      this.wsSend(
        JSON.stringify({
          instruction: "test",
        })
      );
    },
  },
  mounted() {
    window.onscroll = (params) => {
      let scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let opacity = 1;
      if (scroll <= 100) {
        opacity = scroll / 100;
      }
      this.$refs.header.style.opacity = opacity;
    };
  },
};
</script>

<style scoped>
#header-fixed {
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 99;
  overflow: hidden;
  background: linear-gradient(to right, #00c3ff, #00bdff, #008fff);
  opacity: 0;
}

#header {
  height: 150px;
  padding: 10px;
  background: linear-gradient(to right, #00c3ff, #00bdff, #008fff);
  margin-bottom: -70px;
}

#header .title,
#header .count {
  display: block;
  color: #fff;
}

#header .title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.content {
  padding: 0 10px;
}

.content .item + .item {
  margin-top: 10px;
}

.content .item:last-child {
  margin-bottom: 60px;
}

#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 8px;
  width: 100%;
  z-index: 99;
  background: #fff;
  border-top: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#footer button {
  padding: 4px 10px;
  border: none;
  border-radius: 6px;
  outline: none;
  background: #00bdff;
  color: #fff;
  font-size: 16px;
  box-shadow: 1px 1px 5px rgb(110, 110, 110);
}

#footer button:active {
  background: #008fff;
}

/*在总价之前加上‘合计’两字*/
#footer #totalprice::before {
  content: "合计:";
  color: #000;
}

#footer #totalprice {
  color: #ff8400;
}
</style>
