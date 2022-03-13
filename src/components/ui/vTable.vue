<template>
    <div class="lift-etaj">
         <div v-for="n in getEtag" :key="n" class="lift-column">
              <div class="etaj"></div>
              <span>{{n}}</span>
         </div> 
         <VCabinca/>
    </div>
</template>

<script>
import VCabinca from "./vCabinca.vue";
    export default {
    name: "VTable",
    components: { VCabinca },
    computed: {
        getEtag(){
            return this.$store.getters.getNbtn
        }
    },
}
</script>

<style scoped>
.lift-etaj{
    display:flex;
    flex-direction: column-reverse;
}
.etaj{
    width: 45px;
    height: 65px;
    background-color:#e1e1e1;
    border-left: 3px solid #463b3b;
    border-right: 3px solid #463b3b;
}
.lift-column{
    display:flex;
}
</style>