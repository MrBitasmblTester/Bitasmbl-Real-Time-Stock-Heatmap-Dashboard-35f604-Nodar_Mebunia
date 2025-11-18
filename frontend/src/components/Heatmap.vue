<template><canvas ref="canvas"></canvas></template>
<script>
import Chart from 'chart.js';
import client from '../graphql/client';
export default {
  props:['filters'], data(){return{chart:null}}, mounted(){
    const ctx = this.$refs.canvas.getContext('2d');
    this.chart = new Chart(ctx,{ type:'heatmap', data:{datasets:[]}, options:{animation:{duration:300}} });
    client.subscribe('stockUpdated', msg=>{ /* map msg to chart datasets and update smoothly */ this.chart.update(); });
  }
}
</script>