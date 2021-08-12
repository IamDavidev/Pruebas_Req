<template>
  <section class="card__prueba">
    <div class="card" v-for="character in characters" :key="character.id">
      <div class="content__card">
        <h2>
          {{ character.name }}
        </h2>
        <h3>
          Origin:    
          <span>
            {{ character.origin.name }}
          </span>
        </h3>
        <h3>
          Location:   
          <span>
            {{ character.location.name }}
          </span>
        </h3>
        <h3>
          Status:    
          <span>
            {{ character.status }}
          </span>
        </h3>
        <h3>
          species:    
          <span>
            {{ character.species }}
          </span>
        </h3>
        <h4>{{ character.type }}</h4>
      </div>
      <picture>
        <img :src="character.image" alt="imagenes de rick and morty" />
      </picture>
      <div class="preuba">
        <h2>
          <!-- {{character.image}} -->
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });
    onMounted(() => {
      store.dispatch("getCharacter");
    });
    return {
      characters,
    };
  },
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 650px;
  height: 390px;
  margin: 20px;
  margin-bottom: 140px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  color: #121212;
  background: linear-gradient(180deg, rgb(17, 17, 17) 8%, rgb(15, 16, 19) 84%);
  border: 1px solid #00ffff;
  letter-spacing: 1px;
  img {
    border: 2.5px solid #ff0000;
    position: absolute;
    bottom:10%;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.9s;
  }
  h2 {
    color: #ff0000;
    font-size:2.5rem;
  }
  h3{
      color:rgb(255, 255, 255)
  }
  h4{
      color:#00ffff
  }
  span {
    color: #00bdbd;
  }
  .content__card {
    position: relative;
    width: 70%;
    left: 20%;
    margin: 3px;
    padding: 20px 20px 20px 40px;
    opacity: 0;
    visibility: hidden;
    transition: 0.9s;
  }
  &:hover {
    img {
      left: 95%;
      border:2.5px solid #00ffff
    }
    .content__card {
      left: 0%;
      opacity: 1;
      visibility:visible
    }
  }
}
</style>
