
import { reactive, toRefs } from 'vue'

const state = reactive({
    error : null,
    movies : null,
    loaded : false,
    loading : false,
    temp : null,
});

export default function useMovies(){
    const load = async () => {
        if(!state.loaded){
            try{
                const moviesResponse = await fetch(
                    "https://api.themoviedb.org/3/tv/airing_today?api_key=0e5cd5c28b6625fc7ecdb31b1ed65f26"
                );
                state.movies = await moviesResponse.data.results
                console.log(state.movies)
                state.temp = state.movies;
            }
            catch(e)
            {
                state.error = e;
            }
        }
    }

    const search = (searchKey) =>{
        if(searchKey)
        {
            state.temp = [
                state.movies.find(function(item){
                    return item.Name == searchKey.toLowerCase();
                })
            ];
        }else{
            state.temp = state.movies;
        }
    }

    return { ...toRefs(state), load, search }
}