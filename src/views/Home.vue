<template>
    <div class="main-container">
        <AppHeader />
        <Search />
        <Grid />
        <AppFooter />
        <CardPopup v-if="this.movifystore.popuptrigger" />
    </div>
</template>
<script>
import AppHeader from '../components/AppHeader.vue';
import Search from '../components/AppSearch.vue';
import Grid from '../components/Grid.vue';
import AppFooter from '../components/AppFooter.vue';
import CardPopup from '../components/CardPopup.vue';

import { useMovifyStore } from '../store/movify.js'

export default {
    name: "Home",
    components: {
        AppHeader,
        Search,
        Grid,
        AppFooter,
        CardPopup
    },
    setup() {
        return {
            movifystore: useMovifyStore()
        }
    },
}
</script>

<style>
.main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
}

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #B85042; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e66c5c; 
}
</style>