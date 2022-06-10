<template>
  <div class="cell">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "grid-tile",
}
</script>

<style scoped>
.cell {
  display: block;
  text-align: center;
  background: #8d8d62;
  padding-bottom: 100%;
  border-radius: 2vh;
  font-size: 4vh;
}

</style>