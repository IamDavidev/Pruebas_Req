<template>
  <div class="prin">
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
export default {
  name: "App",
  components: {
    // List,
    FilterStatus,
    FilterNombre,
    Prueab,
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
@media (max-width: 991px) {
  .card {
    position: relative;
    width: auto;
    max-width: 660px;
    transition: 0.9s;
    align-items: flex-start;
    &:hover {
      height: 450px;
      img {
        left: 80%;
      }
    }
    .content__card {
      // position: relative;
      width: 100%;
      left: 0;
      padding: 40px;
      // transition: 0.9s;
    }
  }
  @media (max-width: 420px) {
    .card{
      .content__card{
        width:100%;
        left:0;
        padding:30px
      }
      

    }
  }
}
</style>
