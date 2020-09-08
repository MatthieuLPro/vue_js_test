<template>
  <div id="app">
    <b-container fluid>
      <ITMHeaderIndex :currentPage="currentPage" />
      <b-row>
        <b-col cols='12' md='12' lg='6' offset-lg='1'>
          <GroupButtons @clicked="onClickButtonList" :currentFilter='currentButton' :listButtons='buttons' />
          <ObjectTable :currentField='fields' :currentItems='items' />
        </b-col>
        <b-col cols='12' md='12' lg='4'>
          <ActionCards :currentItems='lastItems' :currentItemsToShow='lastItems.slice(0, 4)' />
        </b-col>
      </b-row>
    </b-container>
    <ModalAddPhoto/>
  </div>
</template>

<script>
  import ITMHeaderIndex         from '../../../components/ITMHeaderIndex.vue'
  import GroupButtons           from '../../../components/GroupButtons.vue'
  import ObjectTable            from '../../../components/ObjectTable.vue'
  import ActionCards            from '../../../components/ActionCards.vue'
  import ModalAddPhoto          from '../../../components/ModalAddPhoto.vue'

  export default {
    name: 'PhotosIndex',
    components: {
      ITMHeaderIndex,
      GroupButtons,
      ObjectTable,
      ActionCards,
      ModalAddPhoto
    },
    data() {
      return {
        currentPage: 'photo',
        buttons: [
          { key: 'year', label: 'Par année', state: true },
          { key: 'place', label: 'Par lieu', state: false },
          { key: 'person', label: 'Par personne', state: false }
        ],
        currentButton: 'year',
        fields: [
          { key: 'filters', label: 'Date', sortable: true },
          { key: 'nb_image', label: 'Nombre de photo', sortable: true },
          { key: 'types', label: 'Voir les photos' }
        ],
        items: [
          { filter: {label: '1931', value: 1931}, nb_image: 1, type: 'date' },
          { filter: {label: '1984', value: 1984}, nb_image: 24, type: 'date' },
          { filter: {label: '2011', value: 2011}, nb_image: 51, type: 'date' },
          { filter: {label: '2020', value: 2020}, nb_image: 74, type: 'date' }
        ],
        lastItems: [
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/261/400/400',
            place: 'paris'
          },
          {
            title: 'Vue depuis la Trump Tower.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/267/400/400',
            place: 'mexico_city'
          },
          {
            title: 'Une super plante.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/263/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Tokyo (1931)",
            src: 'https://picsum.photos/id/264/400/400',
            place: 'tokyo'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/266/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/268/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/269/400/400',
            place: 'tokyo'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/270/400/400',
            place: 'paris'
          }
        ]
      };
    },
    methods: {
      onClickButtonList (newKey) {
        this.currentButton = newKey;
        if (this.currentButton == 'year') {
          this.fields = [
            { key: 'filters', label: 'Date', sortable: true },
            { key: 'nb_image', label: 'Nombre de photo', sortable: true },
            { key: 'types', label: 'Voir les photos' }
          ];
          this.items = [
            { filter: {label: '1931', value: 1931}, nb_image: 1, type: 'date' },
            { filter: {label: '1984', value: 1984}, nb_image: 24, type: 'date' },
            { filter: {label: '2011', value: 2011}, nb_image: 51, type: 'date' },
            { filter: {label: '2020', value: 2020}, nb_image: 74, type: 'date' }
          ];
        } else if (this.currentButton == 'place') {
          this.fields = [
            { key: 'filters', label: 'Lieu', sortable: true },
            { key: 'nb_image', label: 'Nombre de photo', sortable: true },
            { key: 'types', label: 'Voir les photos' }
          ];
          this.items = [
            { filter: {label: 'Alger', value: 'alger'}, nb_image: 121, type: 'place' },
            { filter: {label: 'Londres', value: 'londres'}, nb_image: 224, type: 'place' },
            { filter: {label: 'Paris', value: 'paris'}, nb_image: 23, type: 'place' },
            { filter: {label: 'Toulouse', value: 'toulouse'}, nb_image: 34, type: 'place' }
          ];
        } else if (this.currentButton == 'person') {
          this.fields = [
            { key: 'filters', label: 'Personne', sortable: true },
            { key: 'nb_image', label: 'Nombre de photo', sortable: true },
            { key: 'types', label: 'Voir les photos' }
          ];
          this.items = [
            { filter: {label: 'Jean-françois Foubert', value: 'jean_francois_foubert'}, nb_image: 15, type: 'person' },
            { filter: {label: 'Marie-Pierre Lu', value: 'marie_pierre_lu'},       nb_image: 12, type: 'person' },
            { filter: {label: 'Dominique Godfrey', value: 'dominique_godfrey'},     nb_image: 24, type: 'person' },
            { filter: {label: 'Véronique Marcorelle', value: 'veronique_marcorelle'},  nb_image: 22, type: 'person' }
          ];
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
