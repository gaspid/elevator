<template>
  <vLift/>
</template>

<script>
import vLift from './components/vLift.vue'

export default {
  name: 'App',
  components: {
    vLift,
  }
}
</script>

<style>
html{
 width: 100%;
 height: 100%; 
}
body{
  padding:0;
  margin:0;
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items: center;
}
</style>
