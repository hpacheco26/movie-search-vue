<template>
    <div class="card" @click="this.infoClick(imdbId)">
        <div class="poster-section">
            <img :src="poster" />
        </div>
        <div class="info-section">
            <div class="title">{{ title }}</div>
            <div class="type">{{ type }}</div>
            <div class="year">{{ year }}</div>
            <!-- <div class="action">
                <Button class="Button" buttontext="+Info" 
                @click="this.infoClick(imdbId)"  />
            </div> -->
        </div>
    </div>
</template>
<script>
import Button from './Button.vue'
import { useMovifyStore } from '../store/movify.js'
import { fetchMovieDetail } from '../api/OmdbService'
export default {
    name: 'Card',
    props: {
        title: String,
        poster: String,
        type: String,
        imdbId: String,
        year: String,
    },
    setup() {
        return {
            movifystore: useMovifyStore()
        }
    },
    components: {
        Button,
    },
    methods: {
        async infoClick(imdbId) {
            const response = await fetchMovieDetail(imdbId)
            console.log(response)
            this.movifystore.infodetail = response
            this.movifystore.triggerPopup()
        }
    }

}
</script>

<style lang="scss" scoped>
.card {
    background-color: #A7BEAE;
    color: #282b47;
    height: 250px;
    display: flex;
    flex-direction: row;
    padding: 15px;
    gap: 10px;
    min-width: 300px;
    box-shadow: 2px 5px 4px 5px #888888;
    border-radius: 5px;

    transition: transform 0.3s;


    .poster-section img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .info-section {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .title {
            font-size: 2rem;
        }

        .type {
            font-size: 1.5rem;
        }

        .year {
            font-size: 3rem;
        }
    }
}

.card:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 2px 5px 4px 5px #c08880;
}

// .info-section .action {
//     display: flex;
//     flex-direction: row-reverse;
//     align-items: end;
//     flex: 1;
//     padding: 10px
// }
</style>