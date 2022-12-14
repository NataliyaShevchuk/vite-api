<script>
import TheMain from './components/TheMain.vue';
import TheLoader from './components/TheLoader.vue';
import Pagination from './components/Pagination.vue';
import Filter from './components/Filter.vue';
import { store, fetchCharacters } from "./store";

export default{
  components: { TheMain, TheLoader, Pagination, Filter },
    data(){
      return{
        store,
        filter:{
          gender: "",
        }
      }
    },
    methods: {
      onSearch(filterActive){
        this.store.contenutoDiFilter = filterActive;
      }
    },
}
</script>

<template>
    <Filter/>
    <TheMain @search="OnSearch"/>
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
