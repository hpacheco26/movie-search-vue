import { defineStore } from 'pinia'

export const useMovifyStore = defineStore('movify', {
    state: () => ({
        searchtext:'',
        movielist: [],
        infodetail: {},
        popuptrigger: false
    }),
    getters: {
        
    },
    actions: {
        triggerPopup(){
            this.popuptrigger = !this.popuptrigger
        }
    }
  })