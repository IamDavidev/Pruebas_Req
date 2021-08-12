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

export default {
  components: {
    CardCharacters,
  },

};
</script>

<style></style>
