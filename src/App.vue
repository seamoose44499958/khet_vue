<template>
  <div class="grid">
    <GridTile v-for="n in 80" :id="getCoordinate(n)" :key=n ></GridTile>
  </div>

  <Teleport :to="String(Zid)">
    Z
  </Teleport>

</template>

<script>
import GridTile from "@/components/Tile"
import {Coord} from "@/composables/CommonUtil";

export default {
  name: 'App',
  components:{
    GridTile
  },
  data(){
    return {
      Zid:new Coord(1,1),
    }
  },
  methods:{
    getCoordinate(n){
      return `c${Math.trunc((n-1)/10)}_${(n-1) % 10}`
    }
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
