<template>
    <nav class="bg-gray-800  items-center font-antiasliazed">
    <div class="flex items-center justify-between">
    <div class="flex items-center">
       <img src="/logo.png" class="flex-shrink-0 object-cover object-center w-36 mx-6">

    <div class="hidden md:block">

    <router-link to="/" class="text-white text-lg font-semibold hover:text-gray-200 mx-3">Home</router-link>
      <router-link to="/popular" class="text-white text-lg font-semibold hover:text-gray-200 mx-3">Popular</router-link>
        <router-link to="/tv" class="text-white text-lg font-semibold hover:text-gray-200 mx-3">Tv</router-link>
    </div>

    </div>
    <!-- <div class="">
      <button @click="toggle=true" class="bg-white px-1 lg:hidden ">||||</button>
    </div> -->
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>