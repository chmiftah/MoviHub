<template>
  <div class="home">
      <div class=" bg-black" >
        <div class="bg-black" style="min-height:30vh" >
          <div v-if="movie.backdrop_path" class="opacity-30 bg-cover">
               <img :src="image_uri+movie.backdrop_path" class="w-full " style="min-height:30vh"  alt="">
          </div>
           <div v-else>
               <img :src="image_uri+movie.poster_path" class="w-full " style="min-height:10vh"  alt="">
          </div>

            <!-- <img :src="image_uri+movie.poster_path" class="float-right w-1/4 absolute top-16 p-6 m-12"  alt=""> -->
            <div class="md:absolute  md:top-4 p-6 md:m-12 flex flex-col md:flex-row justify-center">
             <div class="w-full md:w-1/3 p-12 -mt-80 md:-mt-0 flex justify-center z-20">
               <img :src="image_uri+movie.poster_path" class="w-2/3 md:w-full"  alt="">
             </div>
              <div class=" w-full md:w-2/3 md:py-12 mb-16">
              <div class="">
                <div class="-mt-8">

                  <div class="text-center md:text-left md:mt-20">
                    <div class="text-2xl md:text-4xl  font-semibold text-gray-200 mb-3 ">
                      {{ movie.status }}
                    </div>
                      <div class="text-3xl md:text-6xl font-bold mb-5 text-white">{{movie.title}}</div>


                    <div class="text-lg font-semibold text-gray-300 mb-1">
                      {{ movie.release_date }} |  <span v-for="movie in movie.production_countries" :key="movie.id">{{ movie.name }} </span>
                      </div>
                      <span class="text-white" v-for="movie in movie.genres" :key="movie.id" >{{ movie.name }} | </span>{{ movie.original_language }}
                    <div class="text-3xl text-blue-200 mb-5 mt-3">
                      Rating : {{ movie.vote_average }}
                    </div>
                    <div class="flex justify-center md:justify-start">
                      <div class="mr-3">
                          <button class="bg-blue-600 rounded-lg px-3 py-2 hover:bg-blue-700 text-white font-semibold hover:outline-none ring-0">Watch Now</button>
                      </div>
                      <div>
                        <button class="bg-red-600 rounded-lg px-2 py-2 hover:bg-red-700 text-white font-semibold hover:outline-0 ring-0">Watch Trailer</button>
                      </div>
                    </div>

                  </div>
                  <div class="mt-4">
                   <div class="text-gray-200 text-2xl font-semibold mb-2">Overview</div> <div class="text-white text-1xl leading-5">{{ movie.overview }}</div>
                  </div>

                </div>

              </div>
             </div>
            </div>
        </div>
      </div>
      <div class="bg-black mt-14 md:-mt-40 absolute w-full" style="min-height:30vh" >
          <div class=" flex flex-col md:flex-row -mt-14  md:mt-6 bg-black">
                  <div class="w-full md:w-3/4 px-6 md:px-6">
                    <div class="text-4xl m-4 font-semibold text-white bg-black">Actor Cast</div>
                              <div id="example" class=" flex overflow-x-scroll">
                                  <div class="" v-for="artist in artists" :key="artist.id">
                                      <div class="mr-6 w-full">
                                        <div class="w-48">
                                          <img :src="pp+artist.profile_path" class="rounded-lg shadow-lg "  alt="">
                                        </div>
                                        <div class="text-lg font-semibold text-white"> {{ artist.name }}</div>
                                          <div class="font-light w-48 text-white"> {{ artist.character }}</div>
                                      </div>
                                  </div>
                              </div>

                    </div>
                      <div class="w-full md:w-1/4 px-12 mt-16">
                      <div class="mb-5">
                        <div class="text-lg font-semibold text-gray-100">Status</div>
                        <div class="text-gray-100">{{ movie.status }}</div>
                      </div>
                        <div class="mb-5">
                        <div class="text-lg font-semibold text-gray-100">Bahasa</div>
                        <div class="text-gray-100">{{ movie.original_language }}</div>
                      </div>
                        <div class="mb-5">
                        <div class="text-lg font-semibold text-gray-100">Anggaran</div>
                        <div class="text-gray-100">${{ movie.budget }}</div>
                      </div>
                        <div class="mb-5">
                        <div class="text-lg font-semibold text-gray-100">Pemasukan</div>
                        <div class="text-gray-100">${{ movie.revenue }}</div>
                      </div>
                      <div class="mb-5">
                        <div class="text-lg font-semibold text-gray-100">Tagline</div>
                        <div class="text-gray-100">{{ movie.tagline }}</div>
                      </div>




                      </div>
          </div>
            <div class="p-6 pb-24">
                                <div class="text-4xl font-semibold mb-5 text-white">What's Popular</div>
                                    <div>
                                      <MovieList></MovieList>
                                      </div>
                                </div>

      </div>
  </div>
</template>

<script>
const image_uri ='https://image.tmdb.org/t/p/original/'
const pp ='https://www.themoviedb.org/t/p/w276_and_h350_face/'
// @ is an alias to /src
import { onMounted, ref } from 'vue'
import axios from 'axios'
import {useRoute} from 'vue-router'
 import MovieList from '../components/MovieList.vue'
export default {
  name: 'Home',
  components: {
  MovieList

  },
  setup(){
    const route = useRoute()
    const movie = ref([])
      const artists = ref([])
    console.log(route.params.id)

    let id = route.params.id

    const getMovie = async()=>{
      let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0e5cd5c28b6625fc7ecdb31b1ed65f26`)
       console.log(response.data);
       movie.value= response.data;
    }
            const getArtist= async()=>{

              let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0e5cd5c28b6625fc7ecdb31b1ed65f26`);
              console.log(response.data.cast);
            artists.value= response.data.cast;
        }

    onMounted(()=>{
      getMovie(), getArtist()
    })

    return {movie, image_uri, artists,pp}
  }
}

</script>

<style >
#example::-webkit-scrollbar {
  display: none;
}

#example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

}
img:hover{
  transform: scale(1);
}
</style>