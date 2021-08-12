<template>
  <div class="filter">
    <input
      type="text"
      placeholder="search by name"
      @keyup="Search()"
      v-model="name"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const name = ref("");
    const Search = () => {
      store.dispatch("filterName", name.value);
    };
    return {
      name,
      Search,
    };
  },
};
</script>

<style scoped lang="scss">
.filter {
  width: 400px;
  margin: 3rem auto 0;
  input {
    height: 53px;
    width: 400px;
    border: none;
    border-radius: 10px;
    padding: 0 0.5rem;
    color:#00ffff;
    background:#262525;
  }
}
</style>
