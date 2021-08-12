<template>
  <div class="prin">
    <Nav />
    <h1>
      API Rick and Morty
    </h1>
    <Filter-nombre />
    <Filter-status />
    <Card-character />
  </div>
</template>

<script>
import FilterNombre from "@/components/FilterNombre";
import FilterStatus from "@/components/FilterStatus";
import CardCharacter from './components/CardCharacter';
import Nav from './components/Nav';
export default {
  name: "App",
  components: {
    FilterStatus,
    FilterNombre,
    CardCharacter,
    Nav,
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
