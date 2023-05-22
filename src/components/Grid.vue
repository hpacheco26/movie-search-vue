<template>
    <div class="grid">
        <Card v-for="movie in this.movifystore.movielist" 
        :title="movie.Title" 
        :poster="movie.Poster"
        :type="movie.Type"
        :imdbId="movie.imdbID"
        :year="movie.Year"
        />
    </div>
</template>
<script>
import Card from './Card.vue'
import { useMovifyStore } from '../store/movify.js'
export default {
    name: 'Grid',
    components:{
        Card
    },
    setup() {
        return {
            movifystore: useMovifyStore()
        }
    },
    created(){
    }
}
</script>

<style>
    .grid {
       display:grid;
       grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
       gap: 50px;
       margin:50px;
       padding: 0px 30px;
    }


</style>