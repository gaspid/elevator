<template>
    <div class="Lift-block">
        <div  class="Lift-btn">
            <VButton v-for="n in 5" :key="n" :name="n" />
        </div>
        <VTable />
    </div>
</template>

<script>
import VButton from "./ui/vButton.vue";
import VTable from "./ui/vTable.vue";
    export default {
    name: "vLift",
    components: { VButton, VTable }
}
</script>

<style scoped>
  .Lift-block{
  display:flex;
  width: 200px;
  justify-content: space-around;
  }  
  .Lift-btn{
  display:flex;
  flex-direction: column-reverse;
  justify-content: center;
  }
</style>