<template>
    <button>{{name}}</button>
</template>

<script>
    export default {
        name:"VButton",
        props: {
            name:{
                type:Number,
            }
        }
        
    }
</script>

<style scoped>
    button{
    width: 40px;
    height: 40px;
    border-radius:100%;
    border:3px solid ;
    margin: 5px;
    font-size: 17px;
    }
</style>