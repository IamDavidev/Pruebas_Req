<template>
  <div class="character">
    <div class="character__card__info">
      {{ characters.name }} <br />
      {{ characters.image }}
      <span
        :class="
          characters.status == 'Alive'
            ? 'alive'
            : characters.status == 'Dead'
            ? 'dead'
            : 'default'
        "
      >
      </span>
      <span> {{ characters.status }} -- {{ characters.species }} </span>
      <hr />
    </div>
    <div class="origin">
        <span>
            Origin : {{characters.origin.name}} <br>
        </span>
        <span>
            Location : {{characters.location.name}} <br>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["characters"],
};
</script>

<style>

</style>
