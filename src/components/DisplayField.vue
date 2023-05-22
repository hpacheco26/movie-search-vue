<template>
    <div class="label">
        {{ label }}
    </div>
</template>
<script>
 export default {
    name: "DisplayField",
    props: {
        label: {
            type: String,
            required: true,
        }
    }
 }
</script>

<style>
    .label {
        font-size: 20px;
    }
</style>