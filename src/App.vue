<template>

  <div class="grid">
    <GridTile v-for="n in 80" :id="getCoordinate(n)" :key=n @click="rotateBoard180(...this.pieces)"></GridTile>
  </div>

  <Teleport :to="String(pieces[0].getCoord())">
    <PyramidPiece :ref="pieces[0].ref" :color="pieces[0].color" :rotationAngle="pieces[0].angle"></PyramidPiece>
  </Teleport>

  <Teleport :to="pieces[1].getCoord()">
    <SphinxPiece :ref="pieces[1].ref" :color="pieces[1].color" :rotationAngle="pieces[1].angle"></SphinxPiece>
  </Teleport>

  <Teleport :to="pieces[2].getCoord()">
    <AnubisPiece :ref="pieces[2].ref" :color="pieces[2].color" :rotationAngle="pieces[2].angle"></AnubisPiece>
  </Teleport>

  <Teleport :to="pieces[3].getCoord()">
    <ScarabPiece :ref="pieces[3].ref" :color="pieces[3].color" :rotationAngle="pieces[3].angle"></ScarabPiece>
  </Teleport>

  <Teleport to="#c6_1">
    <div id="line"></div>
  </Teleport>

</template>

<script>
import GridTile from "@/components/Tile"
import SphinxPiece from "@/components/Sphinx";
import PyramidPiece from "@/components/Pyramid";
import AnubisPiece from "@/components/Anubis";
import ScarabPiece from "@/components/Scarab";
import {Piece,rotateBoard180} from "@/composables/CommonUtil";

export default {
  name: 'App',
  components:{
    GridTile,
    SphinxPiece,
    PyramidPiece,
    AnubisPiece,
    ScarabPiece,
  },
  data(){
    return {
      pieces:[
        new Piece("pyramid1",0,"red",1,1,7,9),
        new Piece("sphinx1",0,"red",0,9,7,9),
        new Piece("anubis1",180,"red",2,3,7,9),
        new Piece("scarab1",90,"red",5,6,7,9),
      ]

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

  #line{
    width:1vh;
    height:10vh;
    background-color:darkred;
    transform: translate(350%,-10%) rotate(90deg);
  }
</style>
