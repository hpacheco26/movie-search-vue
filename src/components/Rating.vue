<template>
    <div class="ratings">
        <div class="rating">
            <img class="icon" src="@/assets/icons/imdb-logo.png" />
            <div class="rating-value">{{ movifystore.infodetail.Ratings[0].Value }}</div>
        </div>
        <div class="rating">
            <img class="icon" src="@/assets/icons/rt-logo.png" />
            <div class="rating-value">{{ movifystore.infodetail.Ratings[1].Value }}</div>
        </div>
        <div class="rating">
            <img class="icon" src="@/assets/icons/metacritic-logo.png" />
            <div class="rating-value">{{ movifystore.infodetail.Ratings[2].Value }}</div>
        </div>
    </div>
</template>
<script>

import { useMovifyStore } from '../store/movify.js'

export default {
    name: "Rating",
    setup() {
        return {
            movifystore: useMovifyStore()
        }
    },
}
</script>
<style lang="scss" scoped>
.icon {
    height: 80px;
    width: 80px;
}

.ratings {
    display: flex;
    justify-content: space-evenly;
    background-color: #A7BEAE;
    padding: 10px;
    border-radius: 10px;
    .rating {
        display: flex;
        align-items: center;
        gap: 15px;
        
        .rating-value {
            font-size: 30px;
            font-weight: bold;
        }
    }
}

</style>