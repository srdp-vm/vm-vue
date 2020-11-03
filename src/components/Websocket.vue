<template>
  <div id="websocket" hidden>
    {{ websocket.url }}
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Websocket",
  data() {
    return {
      websocket: null,
    };
  },
  methods: {
    init() {
      var url = "ws://localhost:8080/VM3.0/websocket/phone";
      // 判断当前浏览器是否支持WebSocket
      if ("WebSocket" in window) {
        this.websocket = new WebSocket(url);
      } else {
        alert("当前浏览器不支持websocket");
      }

      // 连接发生错误的回调方法
      this.websocket.onerror = this.onerror;

      // 连接成功建立的回调方法
      this.websocket.onopen = this.onopen;

      // 接收到消息的回调方法
      this.websocket.onmessage = this.onmessage;

      // 连接关闭的回调方法
      this.websocket.onclose = this.onclose;
    },
    onopen() {
      console.log("websocket连接成功");
    },
    onerror(event) {
      console.log("连接出错");
    },
    onmessage(event) {
      console.log("<< " + event.data);
      var message = JSON.parse(event.data);
      var ins = message.instruction;
      if (ins == "settleup") {
        this.$store.state.items = message.items;
      }
    },
    onclose() {
      console.log("websocket连接关闭");
    },
    sendMessage(msg) {
      this.websocket.send(msg);
      console.log(">> " + msg);
    },
  },
  created() {
    this.init();
    Vue.prototype.wsSend = this.sendMessage;
  },
  destroyed() {
    this.websocket.close();
  },
};
</script>
