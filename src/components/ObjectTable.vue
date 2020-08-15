<template>
  <div>
    <b-table striped hover
      :items="updateItems"
      :fields="updateFields">
      <template v-slot:cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Voir les photos
        </b-button>
        <!--<b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>-->
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
