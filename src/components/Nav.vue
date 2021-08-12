<template>
  <div class="nav">
      <div class="copy__git">
          <h3>
              &copy; David Lezama -- {{day}} . . . .  <a href="https://github.com" target="_blank">GIT_HUB</a>
          </h3>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    day() {
      const date = new Date().getFullYear();
      return date;
    },
  },
};
</script>

<style lang="scss">
.copy__git{
    text-align: center;
    background: #1c1a1a;
    color:#ffffff;
    height:30px;
    text-decoration:none;
}
</style>
