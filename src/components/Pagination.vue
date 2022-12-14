<script>
export default {
    props: {
        currentPage: {
            typeof: Number,
            default: 1
        }
    },
    data(){
        return {
            
        }
    },
    methods: {
        onPrevClick (){
            this.$emit("pageChange", this.currentPage - 1);
        },
        onNextClick (){
            this.$emit("pageChange", this.currentPage + 1);
        }
    }
}
</script>

<template>
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#"
                    @click="onPrevClick">Previous</a></li>
                <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                <li class="page-item"><a class="page-link" href="#"
                    @click="onNextClick">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
@use '../style/general.scss' as *;

</style>