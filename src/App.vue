<template>

  <div class="grid">
    <GridTile v-for="n in 80" :id="getCoordinate(n)" :key=n @click="rotateBoard180(...this.pieces)"></GridTile>
  </div>

  <Teleport :to="String(pieces[0].getCoord())">
    <PyramidPiece :ref="pieces[0].ref" color="red" :rotationAngle="pieces[0].angle"></PyramidPiece>
  </Teleport>

  <Teleport :to="pieces[1].getCoord()">
    <SphinxPiece :ref="pieces[1].ref" color="red" :rotationAngle="pieces[1].angle"></SphinxPiece>
  </Teleport>

</template>

<script>
import GridTile from "@/components/Tile"
import SphinxPiece from "@/components/Sphinx";
import PyramidPiece from "@/components/Pyramid";
import {Piece,rotateBoard180} from "@/composables/CommonUtil";

export default {
  name: 'App',
  components:{
    GridTile,
    SphinxPiece,
    PyramidPiece
  },
  data(){
    return {
      pieces:[new Piece("pyramid1",0,1,1,7,9), new Piece("sphinx1",0,0,9,7,9)]

    }
  },
  methods:{
    getCoordinate(n){
      return `c${Math.trunc((n-1)/10)}_${(n-1) % 10}`
    },
    rotateBoard180(...pieces){
      rotateBoard180(...pieces);
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
