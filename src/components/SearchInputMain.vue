<template>
  <div class='search-wrapper'>
    <b-form>
      <label class="sr-only" for="inline-form-input-name">Rechercher vos photos</label>
      <b-input-group>
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="info">Rechercher</b-button>
        </b-input-group-append>
      </b-input-group>
      <b-button variant="outline-secondary" size='lg' class='mr-2 advanced-research' v-on:click='showAdvancedOptions'>Recherche avancée</b-button>
      <b-row v-if='showAdvanced' class='advanced-research'>
        <b-col cols='6'>
          <b-form-select v-model="placeSelected" :options="placeOptions"></b-form-select>
        </b-col>
        <b-col cols='6'>
          <b-form-select v-model="dateSelected" :options="dateOptions"></b-form-select>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'SearchInputMain',
  data() {
    return {
      showAdvanced: false,
      placeSelected: null,
      placeOptions: [
        { value: null, text: 'Séléctionner un lieu' },
        { value: 'alger', text: 'Alger' },
        { value: 'angleterre', text: 'Angleterre' },
        { value: 'gan', text: 'Gan' },
        { value: 'paris', text: 'Paris' },
        { value: 'toulouse', text: 'Toulouse' }
      ],
      dateSelected: null,
      dateOptions: [
        { value: null, text: 'Séléctionner une date' },
        { value: '1880', text: '1880' },
        { value: '1930', text: '1930' },
        { value: '1980', text: '1980' },
        { value: '2010', text: '2010' },
        { value: '2020', text: '2020' }
      ]
    }
  },
  methods: {
    showAdvancedOptions: function () {
      this.showAdvanced = !this.showAdvanced;
    }
  }
}
</script>

<style>
.search-wrapper {
  margin-top:     10em;
  margin-bottom:  30px;
}
.advanced-research {
  margin-top: 18px;
}
</style>