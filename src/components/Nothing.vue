<template>
  <div id="nothing">
    <img src="../assets/img/gouwuche.png" height="100px" />
    <span>这里空空的，什么也没有~</span>
  </div>
</template>

<script>
export default {
  name: "Nothing",
};
</script>

<style scoped>
#nothing {
  width: 100%;
  padding-top: 100px;
  background: #f5f5f5;
}

#nothing img {
  display: block;
  margin: 0 auto;
}

#nothing span {
  display: block;
  margin: 20px auto;
  width: auto;
  text-align: center;
  color: #828282;
}
</style>
