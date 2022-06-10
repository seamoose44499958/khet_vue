<template>
  <div class="grid">
    <GridTile v-for="n in 80" :key="n"></GridTile>
  </div>
</template>

<script>
import GridTile from "@/components/Tile"
export default {
  name: 'App',
  components:{
    GridTile
  }
}
</script>

<style>
.grid{
  display: grid;
  grid-template-columns: repeat(10, 8vh);
  grid-template-rows: repeat(8, 8vh);
  grid-gap: 1vh;
}
</style>
