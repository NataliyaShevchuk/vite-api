<script>
import TheMain from './components/TheMain.vue'

export default{
  components: { TheMain },
    data(){
      return{

      }
    }
}
</script>

<template>
    <TheMain/>
</template>

<style lang="scss">
@use "./style/general.scss" as *;

body{
  background-color: pink;
}
</style>
