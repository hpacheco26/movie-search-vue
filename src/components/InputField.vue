<template>
    <input class="input-field" v-model="value" :placeholder="placeholder" />
</template>
<script>

export default {
    name:"InputField",
    props: {
        placeholder: {
            type: String
        }
    },
    data(){
        return {
            value:''
        }
       
    },
    created(){
       
    }
    
}
</script>

<style>
    .input-field{
        height: 40px;
        width: 400px;
        background-color:#10161d;
        margin: 0 15px;
        box-sizing: border-box;
        color: #d5d5d5;
        font-family: Arial,sans-serif;
        font-size: 14px;
        outline: none;
        border-radius: 15px;
        text-indent: 10px;
    }
    p{
        color: antiquewhite;
    }
</style>