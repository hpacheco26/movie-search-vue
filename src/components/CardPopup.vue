<template>
    <div class="popup">
        <div class="popup-inner">
            <div class="top-section">
                <div class="poster-section">
                    <img :src="movifystore.infodetail.Poster" />
                </div>
                <div class="info-section">
                    <div class="title">{{ movifystore.infodetail.Title }}</div>
                    <div class="info">Release Date: {{ movifystore.infodetail.Released }}</div>
                    <div class="info">Cast: {{ movifystore.infodetail.Actors }}</div>
                    <div class="info">Director: {{ movifystore.infodetail.Director }}</div>
                    <div class="info">Genre: {{ movifystore.infodetail.Genre }}</div>
                    <div class="info">Boxoffice: {{ movifystore.infodetail.BoxOffice }}</div>
                    <div class="info">Awards: {{ movifystore.infodetail.Awards }}</div>

                </div>
                <Button buttontext="X" buttontype="close" @click="this.movifystore.triggerPopup()"></Button>
            </div>
            <div class="bottom-section">
                <div class="plot-section">
                    <div class="plot">Plot: {{ movifystore.infodetail.Plot }}</div>
                </div>
                <Rating />
            </div>

        </div>
    </div>
</template>
<script>
import Button from './Button.vue'
import { useMovifyStore } from '../store/movify.js'
import Rating from './Rating.vue'
export default {
    name: 'CardPopup',
    props: {
        title: String,
        poster: String,
        type: String
    },
    components: {
        Button,
        Rating
    },
    setup() {
        return {
            movifystore: useMovifyStore()
        }
    },
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;



    .popup-inner {
        background-color: #E7E8D1;
        // background-color: #A7BEAE;
        width: 800px;
        height: 50%;
        padding: 32px;

        display: flex;
        flex-direction: column;
        border-radius: 15px;

        .top-section {
            display: flex;
            flex-direction: row;

        }

        .poster-section {
            width: 165px;
            height: 250px;
        }

        .info-section {
            margin: 0px 20px;
            color: #282b47;
        }

        .bottom-section {
            display: flex;
            flex-direction: column;
            flex: 1;

            .plot-section {
                margin: 20px 0px;
                flex:1;
            }
        }


    }
}
</style>