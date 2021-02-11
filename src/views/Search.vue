<template>

  <div class="p-12">
    <div class="text-white font-bold text-5xl mb-6">Search Result for : {{query}}</div>
   <div class="py-4">
    <MovieSearch :query="query"></MovieSearch>
   </div>
  </div>


</template>

<script>
import MovieSearch from '../components/MovieSearch.vue'
import {useRoute} from 'vue-router'
export default {
components:{
MovieSearch
},
setup(){
     const route = useRoute()
    console.log(route.params.query)
      const query=route.params.query

return {query}
},

}
</script>

<style>

</style>