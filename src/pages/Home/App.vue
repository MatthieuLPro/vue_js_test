<template>
  <div id="app">
    <b-container>
      <SearchInputMain/>
      <NavBar/>
    </b-container>
  </div>
</template>

<script>
  import SearchInputMain  from '../../components/SearchInputMain.vue'
  import NavBar           from '../../components/NavBar.vue'

  export default {
    name: 'Home',
    components: {
      SearchInputMain,
      NavBar
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
