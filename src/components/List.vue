<template>
  <div class="section__list">
    <div class="characteres">
      <div class="characteres__list">
        <h1>
          List
        </h1>
        <div v-for="character in characters" :key="character.id">
          <CardCharacters :characters="character"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCharacters from "@/components/CardCharacters";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    CardCharacters,
  },
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

<style></style>
