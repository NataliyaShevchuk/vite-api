<script>
import Pagination from './Pagination.vue';
import axios from "axios";

import { store, fetchCharacters }  from "../store.js";

export default{
    components: { Pagination },
    props:{
        /**
         * @property {string} gender,
         */
    },
    character: {
        type: Object,
        required: true,
    },
    data(){
        return{
            store,
            newPage: 1,
            
        }
    },
    computed: {
        // genderReveal(){
        //     let toReturn = " ";

        //     if(this.store.CharacterData.gender === "Male" ){
        //         toReturn = "Male";
        //     }else if(this.store.CharacterData.gender === "Female" ){
        //         toReturn = "Female";
        //     }

        //     return toReturn;
        // }
    },
    methods: {
        onPageChange(newPage){
            this.store.currentPage = newPage;

            fetchCharacters();
        }
    },
    created(){
        fetchCharacters();
    }
}
</script>

<template>

    <div class="container">
        <Pagination class="py-2"
        :currentPage="store.currentPage"
        @pageChange="onPageChange"></Pagination>
        <div class="alert alert-primary" v-if="store.LocalHostError">
            {{ store.LocalHostError }}
        </div>
        <div>
            <h5 class="text-white">Count pages {{store.pageInfo.count}} </h5>
        </div>
        <div class="row row-cols-5 g-4 pt-3">
            <div class="col" 
            v-for="(character, index) in store.CharacterData" :key="index">
                <div class="card h-100">
                <img :src="character.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> {{ character.name }} </h5>
                    <p class="card-text"> {{ character.species}} </p>
                    <!-- <p class="card-text" :class="genderReveal"> </p> -->
                </div>
                </div>
            </div>
        </div>
        <Pagination class="py-2"
        :currentPage="store.currentPage"
        @pageChange="onPageChange"></Pagination>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;

</style>