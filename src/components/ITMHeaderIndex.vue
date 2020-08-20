<template>
  <div>
    <div class='navbar-large'>
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
    <div class='navbar-medium'>
      <b-row>
        <b-col>
          <img src="../assets/logo_test.png" alt='marco_photo' />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm='12' md='12' lg='7'>
          <SearchInputSecondary/>
        </b-col>
        <b-col sm='12' md='12' lg='7'>
          <NavBarSecondary :selectedPage="currentPage"/>
        </b-col>
      </b-row>
      <hr/>
    </div>
    <div class='navbar-small'>
      <b-row>
        <b-col cols='2' class='my-auto'>
          <NavBarSecondary :selectedPage="currentPage"/>
        </b-col>
        <b-col cols='9' offset='1'>
          <img src="../assets/logo_test.png" alt='marco_photo' />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm='12'>
          <SearchInputSecondary/>
        </b-col>
      </b-row>
      <hr/>
    </div>
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

<style>
  .navbar-large {
    display: block !important;
  }
  .navbar-medium {
    display: none !important;
  }
  .navbar-small {
    display: none !important;
  }
  @media screen and (max-width: 768px)
  {
    .navbar-large {
      display: none !important;
    }
    .navbar-medium {
      display: block !important;
    }
    .navbar-small {
      display: none !important;
    }
  }
  @media screen and (max-width: 576px)
  {
    .navbar-large {
      display: none !important;
    }
    .navbar-medium {
      display: none !important;
    }
    .navbar-small {
      display: block !important;
    }
  }
</style>
