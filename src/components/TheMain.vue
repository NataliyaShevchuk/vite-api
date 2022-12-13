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
        axios.get("https://rickandmortyapi.com/api/character")
        .then( (resp) => {
            console.log(resp.data.results);

            this.store.CharacterData = resp.data.results;
        })
        .catch(() => {
            this.LocalHostError = "A causa di un guasto l'operazione non è andata a buon fine. Riprova più tardi.";
        });
    }
}
</script>

<template>
    <div class="container">
        <div class="alert alert-primary" v-if="LocalHostError">
            {{ LocalHostError }}
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