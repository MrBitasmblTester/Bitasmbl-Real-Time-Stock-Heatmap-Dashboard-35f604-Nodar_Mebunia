<template><div id="app"><Filters @update="onFilter"/><Heatmap :filters="filters"/></div></template>
<script>
import Filters from './components/Filters.vue';
import Heatmap from './components/Heatmap.vue';
export default { components:{ Filters, Heatmap }, data(){return{filters:{}}}, methods:{ onFilter(f){this.filters = {...this.filters, ...f}} } }
</script>