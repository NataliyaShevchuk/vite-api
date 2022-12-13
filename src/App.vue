<script>
import TheMain from './components/TheMain.vue';
import TheLoader from './components/TheLoader.vue'
import { store } from "./store";

export default{
  components: { TheMain, TheLoader },
    data(){
      return{
        store,
      }
    }
}
</script>

<template>
    <TheMain/>
    <Transition name="slide-fade">
      <TheLoader v-if="store.loading" />
    </Transition>
</template>

<style lang="scss">
@use "./style/general.scss" as *;

body{
  background-color: pink;
}
</style>
