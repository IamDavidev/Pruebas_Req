<template>
  <div class="prin">
    <!-- <Navbar /> -->
    <h1>
      API Rick and Morty
    </h1>
    <Filter-nombre />
    <Filter-status />
    <!-- <List /> -->
    <Prueab />
  </div>
</template>

<script>
import FilterNombre from "@/components/FilterNombre";
import Prueab from "@/components/Prueab";
// import List from "@/components/List";
import FilterStatus from "@/components/FilterStatus";
// import Navbar from './components/Navbar.vue';
export default {
  name: "App",
  components: {
    // List,
    FilterStatus,
    FilterNombre,
    Prueab,
    // Navbar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}
body {
  background: #000;
  color: #00ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
h1 {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin: 12px;
}
</style>
