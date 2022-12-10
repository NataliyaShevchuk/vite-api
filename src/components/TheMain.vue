<script>
export default{
    data(){
        return{

        }
    },
    created(){
        axios.get("https://rickandmortyapi.com/api/character")
        .then( (resp) => {
            console.log(resp);
        })
    }
}
</script>

<template>
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;

</style>