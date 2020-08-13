<template>
  <div>
    <b-card-group deck>
      <b-card
        header="Filtres"
        header-tag="header"
        footer-tag="footer"
      >
        <b-form-group label="Personnes identifiées" class='checkbox-list'>
          <b-form-checkbox-group
            v-model="selectedPerson"
            :options="optionsPerson"
            @change="updatePersonFilter"
            name="person"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
        <b-form-group label="Lieux identifiés" class='checkbox-list'>
          <b-form-checkbox-group
            v-model="selectedPlace"
            :options="optionsPlace"
            @change="updatePlaceFilter"
            name="place"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    name: 'FiltersSide',
    data() {
      return {
        selectedPerson: [], // Must be an array reference!
        optionsPerson: [
          { text: 'Jack Johnson', value: 'jack_johnson' },
          { text: 'Patrick Martin', value: 'patrick_martin' },
          { text: 'Dave Sterio', value: 'dave_sterio' },
          { text: 'Joona Sotalla', value: 'joona_sotalla' }
        ],
        selectedPlace: [], // Must be an array reference!
        optionsPlace: [
          { text: 'Paris', value: 'paris' },
          { text: 'Tokyo', value: 'tokyo' },
          { text: 'Mexico city', value: 'mexico_city' },
          { text: 'Helsinki', value: 'helsinki' }
        ],
      }
    },
    methods: {
      updatePersonFilter(checked) {
        this.$emit('clicked', { type: 'person', value: checked })
      },
      updatePlaceFilter(checked) {
        this.$emit('clicked', { type: 'place', value: checked })
      },
    }
  }
</script>

<style>
  .checkbox-list {
    text-align: left;
  }
</style>