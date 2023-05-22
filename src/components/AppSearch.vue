<template>
    <div class="app-search">
        <InputField placeholder="Movie Title" ref="inputfield" @keyup.enter="getMovie"/> 
        <Button buttontext="Search" :buttonclick="getMovie" />
    </div>

</template>


<script>
import InputField from './InputField.vue'
import Button from './Button.vue'
import { fetchMovie } from '../api/OmdbService.js';
import { useMovifyStore } from '../store/movify.js'

export default {
    name: 'AppSearch',
    components:{
        InputField,
        Button
    },
    setup() {
        return {
            movifystore: useMovifyStore()
        }
    },
    data(){
        return {
            message:""
        }
    },    
    methods: {
        async getMovie(){
                const response = await fetchMovie(this.$refs.inputfield.value)
                this.movifystore.movielist = response.Search
                console.log(response)
            
        }
    }
}
</script>
<style>
    .app-search {   
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 50px;
        padding: 25px;
    }
    p{
        color: antiquewhite;
    }
</style>