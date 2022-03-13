<template>
    <div class="cabinca" v-bind:style="{  bottom: getPost+'px' }">
    {{getPost}}
    </div>
</template>

<script>
    export default {
        name:"VCabinca",
        props:{ 
            positeon:{
                type:Number,
                default:0,
            }
        },
        computed:{
            getPost(){
                return this.$store.getters.getPos
            }
        },
    }
</script>

<style  scoped>
.cabinca{
    position: absolute;
    width: 45px;
    height: 65px;
    z-index: 1;
    background-color:#b65ba28e;
    left:121.5px   ;
    bottom: 1px;
}
</style>