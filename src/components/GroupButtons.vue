<template>
  <div class='groupButton'>
    <b-button-group>
        <b-button
          v-for='button in currentList'
          :key='button.key'
          v-on:click="updateCurrentFilter(button.key)"
          variant="info"
        >
          {{ button.label }}
        </b-button>
  </b-button-group>
  </div>
</template>

<script>
  export default {
    name: 'GroupButtons',
    props: {
      currentFilter: {
        type: String,
        required: true
      },
      listButtons: { 
        type: Array,
        required: true
      }
    }, 
    data() {
      return {
        currentList: this.listButtons
      }
    },
    methods: {
      updateCurrentFilter: function(newKey) {
        this.$emit('clicked', newKey)
      }
    }
  }
</script>

<style scoped>
  .groupButton {
    text-align: left;
  }
  table {
    text-align: left;
  }
</style>