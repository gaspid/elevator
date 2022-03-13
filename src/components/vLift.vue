<template>
    <div class="Lift-block">
        <div  class="Lift-btn">
            <VButton @click="mooves(n)" v-for="n in getBtn" :key="n" :name="n" />
        </div>
        <VTable />
    </div>
</template>

<script>
import VButton from "./ui/vButton.vue";
import VTable from "./ui/vTable.vue";
import {mapMutations} from "vuex"
    export default {
    name: "vLift",
    components: { VButton, VTable },
    computed: {
        getBtn() {
            return this.$store.getters.getNbtn
        }
    },
    methods:{
        ...mapMutations(['moove']),
        mooves(n){
            this.moove(n)
        },
    }
    
    
}
</script>

<style scoped>
  .Lift-block{
  display:flex;
  width: 200px;
  justify-content: space-around;
  position:relative;
  }  
  .Lift-btn{
  display:flex;
  flex-direction: column-reverse;
  justify-content: center;
  }
</style>