<script>
import axios from "axios";
import { store }  from "../store.js";

export default{
    data(){
        return{
            LocalHostError: "",
            store,
        }
    },
    created(){
        this.store.loading = true;

        axios.get("https://rickandmortyapi.com/api/character")
        .then( (resp) => {
            console.log(resp);
            console.log(resp.data.results);

            this.store.CharacterData = resp.data.results;
            store.pageInfo = resp.data.info;

            this.store.loading = false;
        })
        .catch(() => {
            this.LocalHostError = "A causa di un guasto l'operazione non è andata a buon fine. Riprova più tardi.";

            this.store.loading = false;
        });
    }
}
</script>

<template>
    <div class="container">
        <div class="alert alert-primary" v-if="LocalHostError">
            {{ LocalHostError }}
        </div>
        <div>
            <h5 class="text-white">Count pages</h5>
        </div>
        <div class="row row-cols-5 g-4 pt-3">
            <div class="col" 
            v-for="(character, index) in store.CharacterData" :key="index">
                <div class="card h-100">
                <img :src="character.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> {{ character.name }} </h5>
                    <p class="card-text"> {{ character.species}} </p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;

</style>