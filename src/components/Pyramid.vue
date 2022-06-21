<template>
  <p>⊿</p>
</template>

<script>
export default {
  name: "pyramid-piece",

  props: {
    color:{
      type:String,
      required:true
    },

    rotationAngle:{
      type:String,
      default:"0deg"
    }
  },
  watch: {
    rotationAngle: {
      immediate: true,
      handler() {
        if(!["0deg","90deg","180deg","270deg"].includes(this.$props.rotationAngle)){
          throw new Error("Improper angle set to pyramid, either 0deg,90deg,180deg,270deg")
        }
      }
    }
  }
}
</script>

<style scoped>
  p {
    color:v-bind(color);
    font-size: 4vh;
    transform:translate(0%,-50%) rotate(v-bind(rotationAngle));
  }
</style>