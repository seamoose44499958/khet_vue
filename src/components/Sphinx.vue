<template>
  <p>𓁵</p>
</template>

<script>
export default {
  name: "sphinx-piece",
  data(){
    return{
      transform:""
    }
  },

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
        this.transform = "translate(0%,-50%) "
        if(["0deg","90deg","270deg"].includes(this.$props.rotationAngle)){
          this.transform += `rotate(${this.$props.rotationAngle})`;
        }
        else if(this.$props.rotationAngle === "180deg"){
          this.transform += "scale(-1,1)";
        }
        else{
          throw new Error("Improper angle set to Sphinx, either 0deg,90deg,180deg,270deg");
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
    transform: v-bind(transform);
  }
</style>