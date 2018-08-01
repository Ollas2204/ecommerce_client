<template>
  <div id="app">
    <Header/>
    <router-view/>
    <List/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header: Header,
    List: List,
    Footer: Footer
  }
}
</script>

<style>
</style>
