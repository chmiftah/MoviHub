<template>
<div class="">
<Nav></Nav>

  <div class="pb-24 bg-black">
  <section class=" ">
    <router-view/>
  </section>
  </div>
<div class="hidden md:block">
<Footer></Footer>
</div>


<div class="bottom-0 fixed w-full -mb-1 md:hidden">
  <NavBottom></NavBottom>
</div>
</div>


</template>

<script>
// @ is an alias to /src
import NavBottom from './components/layouts/NavBottom.vue'
import Nav from './components/layouts/Nav.vue'
import Footer from './components/layouts/Footer.vue'
export default {
  components: {
  NavBottom,
  Nav,
  Footer

  },
  data(){
    return{

        toggle : true,


    }
  }



}
</script>
