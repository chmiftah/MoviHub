<template>
<template>
  <div id="example" class="flex overflow-x-scroll">
      <div  v-for="movie in movies" :key="movie.id">
           <div class="mr-6">

            <div>
                <router-link :to="'/detail/'+movie.id">
                  <img :src="movie.poster_path" class="flex-shrink-0 w-48 h-72 rounded-lg shadow-lg"  alt="">
                </router-link>
            </div>
            <div class=" w-48 mt-3 ">
                {{ movie.id }}
                <div v-if=" movie.title" class="text-lg font-bold leading-6 text-white">
                    {{ movie.title}}
                </div>
                 <div v-else class="text-lg font-bold leading-6 text-white">
                    {{ movie.name}}
                </div>
                <div v-if="  movie.release_date" class=" text-gray-100 font-semibold leading-6 mt-1">
                 {{ movie.release_date }}
                </div>
                 <div else class=" text-gray-100 font-semibold leading-6 mt-1">
                 {{ movie.first_air_date }}
                </div>
            </div>

      </div>
      </div>
  </div>
</template>
</template>
<script>
import axios from 'axios'
import { onMounted,  ref,} from 'vue'
export default {

    setup(){
       const movies=ref([])
              const getMovie= async()=>{

              let response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=0e5cd5c28b6625fc7ecdb31b1ed65f26`);
              console.log(response.data.results);
             movies.value= response.data.results;
        }


        onMounted(()=>{
            getMovie()
        })

        return {getMovie, movies,}

}}
</script>