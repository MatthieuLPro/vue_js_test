<template>
  <div>
    <b-table striped hover
      :items="updateItems"
      :fields="updateFields">
      <template v-slot:row-details="row">
        <!-- TODO: FIXMED -->
        <p>{{row.item}}</p>
        <!--<b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>-->
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
