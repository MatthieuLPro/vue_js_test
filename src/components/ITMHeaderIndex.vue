<template>
  <div>
    <b-row align-v="end">
      <b-col sm='12' md='4' lg='2'>
        <img src="../assets/logo_test.png" alt='marco_photo' />
      </b-col>
      <b-col sm='12' md='8' lg='10'>
        <b-row>
          <b-col sm='12' md='12' lg='7'>
            <SearchInputSecondary/>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm='12' md='12' lg='7'>
            <NavBarSecondary :selectedPage="currentPage"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr/>
  </div>
</template>

<script>
  import SearchInputSecondary from './SearchInputSecondary.vue'
  import NavBarSecondary      from './NavBarSecondary.vue'

  export default {
    name: 'ITMHeaderIndex',
    components: {
      SearchInputSecondary,
      NavBarSecondary
    },
    props: {
      currentPage: { 
        type: String,
        required: true
      }
    }
  }
</script>

