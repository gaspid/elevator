<template>
    <div class="lift-etaj">
        <VCabinca/>
         <div v-for="n in 5" :key = "n" class="lift-column">
              <div class="etaj"></div>
              <span>{{n}}</span>
         </div>
    </div>
</template>

<script>
import VCabinca from "./vCabinca.vue";
    export default {
    name: "VTable",
    components: { VCabinca }
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