<template>
  <div id="example" class="flex overflow-x-scroll">
      <div  v-for="movie in movies" :key="movie.id">
           <div class="mr-6">

            <div>
                <router-link :to="'/detail/'+movie.id">
                  <img :src=" image_uri+movie.poster_path" class="flex-shrink-0 w-48 h-72 rounded-lg shadow-lg"  alt="">
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

<script>
const image_uri = 'https://image.tmdb.org/t/p/original/'
import axios from 'axios'
import { onMounted,  ref,} from 'vue'
export default {
    props:{
      title :String
    },
  name: 'Popular',


 setup(props){
   console.log(props)



    const movies=ref([])
          const getMovie= async()=>{
// https://api.themoviedb.org/3/tv/airing_today?api_key=0e5cd5c28b6625fc7ecdb31b1ed65f26
              let response = await axios.get(`https://api.themoviedb.org/3/${props.title}?api_key=0e5cd5c28b6625fc7ecdb31b1ed65f26`);
              console.log(response.data.results);
             movies.value= response.data.results;
        }


        onMounted(()=>{
            getMovie()
        })

        return {getMovie, movies, image_uri,}
}
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
#example::-webkit-scrollbar {
  display: none;
}

#example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

}
img:hover{
  transform: scale(1.1);
}
</style>
