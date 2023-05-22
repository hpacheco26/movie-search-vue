<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <div class="poster-section">
                <img :src="movifystore.infodetail.Poster" />
            </div>
            <div class="info-section">
                <div class="title">{{ movifystore.infodetail.Title }}</div>
                <div class="info">{{ movifystore.infodetail.Type }}</div>
            </div>
            <Button buttontext="X" buttontype="close" 
            @click="this.movifystore.triggerPopup()"></Button>
        </div>
    </div>
</template>
<script>
import Button from './Button.vue'
import { useMovifyStore } from '../store/movify.js'

export default {
    name: 'CardPopup',
    props: {
        title: String,
        poster: String,
        type: String
    },
    components: {
        Button,
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
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    

    .popup-inner {
        background-color: antiquewhite;
        // background-color: #A7BEAE;
       width: 800px;
        height: 50%;
        padding: 32px;
        
        display: flex;
        border-radius: 15px;

        .poster-section {
            width: 150px;
            height: 250px;
        }

        .info-section {
            margin: 0px 20px;
            color: #282b47;
        }

        
    }
}
</style>