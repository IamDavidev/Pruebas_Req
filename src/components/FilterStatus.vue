<template>
  <div class="filter">
    <div class="item" @click="filter('')"> ALL</div>
    <div class="item" @click="filter('Alive')">ALIVE</div>
    <div class="item" @click="filter('Dead')" >DEAD</div>
    <div class="item" @click="filter('unknow')" >UNKNOWN</div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const filter= ((status)=>{
        store.dispatch("FilterStatus", status )
    })
    return {filter }
  },
};
</script>

<style lang="scss">
.filter {
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 10px;
  overflow: hidden;
  .item {
    padding: 1rem 0.4rem;
    background-color: #262626;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: #ff0000;
    }
  }
}
</style>
