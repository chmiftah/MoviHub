<template>

  <div class="p-12">
    <div class="text-white font-bold text-5xl mb-6">Popular This Week</div>
   <div class="py-4">
    <div class="text-4xl font-semibold mb-5 text-white">Movies</div>
    <MovieList title="trending/movie/week"></MovieList>
   </div>

  <div class="py-4">
    <div class="text-4xl font-semibold mb-5 text-white">Tv</div>
    <MovieList title="trending/tv/week"></MovieList>
   </div>

  </div>


</template>

<script>
import MovieList from '../components/MovieList.vue'
export default {
components:{
MovieList
}
}
</script>

<style>

</style>