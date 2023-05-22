<template>
    
    <button v-if="buttontype==='close'" 
    class="close" @click=buttonclick>{{ buttontext }}</button>
    <button v-else class="normal" @click=buttonclick> {{ buttontext }}</button>
</template>
<script>
    export default {
        name: "Button",
        props: {
            buttontext:String,
            buttonclick:Function,
            buttontype: {
                type: String,
                required: true
            }
        }
    }
</script>
<style lang="scss" scoped>
    .normal {
        height: 40px;
        width: 100px;
        background-color: #B85042;
        color: #E7E8D1;
        border-radius: 15px;
    }

    .close {
        font-weight: bold;
        background-color: transparent;
        border: none;
        align-self: flex-start;
        translate: 15px -15px;
        font-size: 20px
        
    }

    .close:hover {
        font-size: larger;
    }

    button:hover{
        cursor: pointer
    }


</style>