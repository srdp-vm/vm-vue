<template>
  <div id="open">
    <div class="btn-wrapper">
      <button class="btn-open" @click="open">打开</button>
      <div class="pulse delay-00"></div>
      <div class="pulse delay-03"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Open",
  methods: {
    open() {
      this.wsSend(
        JSON.stringify({
          instruction: "open",
        })
      );
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
#open {
  height: 100vh;
  width: 100vw;
  position: relative;
  /* background: url("../assets/img/bg.jpg"); */
  background-origin: content-box;
  background-size: cover;
}

.btn-wrapper {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 50px;
  margin: 0 auto;
  z-index: 0;
}

.btn-open {
  height: 100px;
  width: 100px;
  padding: 0;
  color: #fff;
  background: linear-gradient(to right, #00c3ff, #00bdff, #008fff);
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 1px 1px 4px rgba(110, 110, 110, 0.8);
}

.btn-open:active {
  background: linear-gradient(to right, #46d4ff, #55d2ff, #74c3ff);
}

.pulse {
  height: 100px;
  width: 100px;
  border: 1px solid #00c3ff;
  box-shadow: 0 0 4px #90ceff, 0 0 10px #90ceff inset;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: calc(50% - 50px);
  z-index: -1;
  animation: pulse 2s linear;
  animation-iteration-count: infinite;
}

.delay-00 {
  animation-delay: 0s;
}

.delay-03 {
  animation-delay: 0.3s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0;
  }

  50% {
    transform: scale(1.4);
    opacity: 1;
  }

  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
