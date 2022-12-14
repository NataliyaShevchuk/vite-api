<script>
import { store, fetchCharacters }  from "../store.js";


export default {
    data(){
        return{
            store,
            filter: {
                gender: "",
            }
        }
    },
    emits: ["search"],
    methods: {
        onSearchClick(){
            this.$emit("search", {...this.filter});
        }
    },
}
</script>

<template>
    <div class="container mt-3">
        <p class="d-flex justify-content-center">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                Cosa cerchi?
            </button>
        </p>
        <div style="min-height: 20px;">
            <div class="collapse collapse-horizontal" id="collapseWidthExample">
                <div class="card card-body" style="width: 100%;">
                    <input class="form-control" @submit.prevent="onSearchClick" type="text" placeholder="Scrivi qui.." name="gender" 
                    v-model="filter.gender">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../style/general.scss' as *;

</style>