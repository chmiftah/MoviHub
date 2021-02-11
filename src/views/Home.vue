<template class="">
  <div class="home bg-black">
   <Hero></Hero>
    <div class="p-12">
    <div class="text-4xl font-semibold mb-5 text-white">What's Popular</div>
    <MovieList title="trending/all/week"></MovieList>
    </div>
   <div class="px-12 ">
    <div class="text-4xl font-semibold mb-5 text-white">Top Rated Movie</div>
     <MovieList title="movie/top_rated"></MovieList>
    </div>
     <div class="px-12 ">
    <div class="text-4xl font-semibold mb-5 text-white">Coming Soon</div>
     <MovieList title="movie/upcoming"></MovieList>
    </div>


     </div>

</template>

<script>
// @ is an alias to /src
import  MovieList from '../components/MovieList.vue'
import Hero from '../components/layouts/Hero.vue'
export default {
  name: 'Home',
  components: {
  MovieList,
  Hero,


  }
}
</script>
