<template>
  <div>
    <b-card-group deck>
      <b-card
        header="Filtres"
        header-tag="header"
        footer-tag="footer"
      >
        <b-form-group label="Années identifiés" class='checkbox-list' v-if="filtersList.includes('date')">
          <b-form-checkbox-group
            v-model="selectedDate"
            :options="optionsDate"
            @change="updateDateFilter"
            name="date"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
        <b-form-group label="Lieux identifiés" class='checkbox-list' v-if="filtersList.includes('place')">
          <b-form-checkbox-group
            v-model="selectedPlace"
            :options="optionsPlace"
            @change="updatePlaceFilter"
            name="place"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
        <b-form-group label="Personnes identifiées" class='checkbox-list' v-if="filtersList.includes('person')">
          <b-form-checkbox-group
            v-model="selectedPerson"
            :options="optionsPerson"
            @change="updatePersonFilter"
            name="person"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  /* *** */
  /* Need to make php request */
  /* Get required filter depending of photos */
  /* default value for each is 'all' */
  /* 3 php request: */
  /* 1) person if filtersList.include person */
  /* 2) place if filtersList.include place */
  /* 3) year if filtersList.include year */
  /* *** */
  export default {
    name: 'FiltersSide',
    props: {
      filtersList: {
        type: Array,
        required: true,
        default: function() {
          return ['person', 'place', 'date']
        }
      }
    },
    data() {
      return {
        selectedDate: [], // Must be an array reference!
        optionsDate: [
          { text: '1931', value: '1931' },
          { text: '1944', value: '1944' },
          { text: '1958', value: '1958' },
          { text: '1988', value: '1988' }
        ],
        selectedPlace: [], // Must be an array reference!
        optionsPlace: [
          { text: 'Paris', value: 'paris' },
          { text: 'Tokyo', value: 'tokyo' },
          { text: 'Mexico city', value: 'mexico_city' },
          { text: 'Helsinki', value: 'helsinki' }
        ],
        selectedPerson: [], // Must be an array reference!
        optionsPerson: [
          { text: 'Jack Johnson', value: 'jack_johnson' },
          { text: 'Patrick Martin', value: 'patrick_martin' },
          { text: 'Dave Sterio', value: 'dave_sterio' },
          { text: 'Joona Sotalla', value: 'joona_sotalla' }
        ]
      }
    },
    methods: {
      updatePersonFilter(checked) {
        this.$emit('clicked', { type: 'person', value: checked })
      },
      updatePlaceFilter(checked) {
        this.$emit('clicked', { type: 'place', value: checked })
      },
      updateDateFilter(checked) {
        this.$emit('clicked', { type: 'date', value: checked })
      }
    }
  }
</script>

<style>
  .checkbox-list {
    text-align: left;
  }
</style>