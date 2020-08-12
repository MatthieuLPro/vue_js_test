<template>
  <div>
    <b-table striped hover :items="updateItem" :fields="updateField"></b-table>
  </div>
</template>

<script>
  export default {
    name: 'ObjectTable',
    props: {
      currentField: { 
        type: Array,
        required: true
      },
      currentItems: { 
        type: Array,
        required: true
      }
    },
    computed: {
      updateField: function () {
        return this.currentField
      },
      updateItem: function () {
        return this.currentItems
      }
    }
  }
</script>

<style scoped>
  table {
    text-align: left;
  }
</style>
