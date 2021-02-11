<template>
   <div class="flex justify-items-center opacity-75 bg-black" >
          <div class="w-full h-1/4 md:h-1/2 bg-center bg-cover flex justify-center items-center" style='background-image: url("hero.jpg"); min-height:78vh;'>
              <input v-model="query" type="text" class="bg-white w-3/4 rounded-full p-5 text-black text-lg font-semibold focus:outline-none focus:ring-4 focus:bg-gray-300" placeholder="Cari sebuah film, serial tv, kru / aktor..." @keypress.enter="goToResult">
          </div>

    </div>
</template>

<script>

export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    goToResult() {
      this.$router.push({ name: 'Search', params: { query: this.query } })

    }
  },
}
</script>
