<template>
  <div>
    <b-table striped hover
      :items="updateItems"
      :fields="updateFields">
      <template v-slot:cell(filters)="row">
        {{row['item']['filter']['label']}}
      </template>
      <template v-slot:cell(types)="row">
        <b-button :href="'/photos/show?type=' + row['item']['type'] + '?info=' + row['item']['filter']['value']" size="sm" class="mr-1">Voir les photos</b-button>
      </template>
    </b-table>
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
      updateFields: function () {
        return this.currentField
      },
      updateItems: function () {
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
