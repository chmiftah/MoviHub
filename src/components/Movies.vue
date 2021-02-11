<template>
    <div class="container">
        <AsyncMovies v-for="(pokemon,index) in temp" :key="index" :pokemon="pokemon" />
    </div>
</template>
<script>
import useMovies from "@/modules/movies"
import { defineAsyncComponent } from "vue"
import Loading from "@/components/Loading.vue"
const AsyncMovies = defineAsyncComponent({
    loader: () => import("@/components/Movie.vue"),
    loadingComponent : Loading,
    delay:200,
    suspensible: false,
})
export default {

    components: {
        AsyncMovies
    },
    async setup()
    {
        const { temp, error, load } = useMovies();
        await load();
        return { temp, error }
    }
}
</script>