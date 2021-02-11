<template>

  <Search />

    <template >
      <Movies />
    </template>
    <template >
      <Loading />
    </template>

</template>

<script>
import Movies from "@/components/Movie"
import Loading from "@/components/Loading"
import Search from "@/components/layouts/Hero"
export default {
  name: 'App',
  components: {
   Movies,
    Loading,
    Search
  }
}
</script>