<template>
  <div id="app">
    <router-view />
    <Websocket></Websocket>
  </div>
</template>

<script>
import Websocket from "@/components/Websocket.vue";
export default {
  components: {
    Websocket,
  },
};
</script>
