<template>
  <div id="app">
    <b-container fluid>
      <!--TODO: ADD THIS IN ITMHeaderIndex component-->
      <b-row align-v="end">
        <b-col cols='2'>
          <img src="../../assets/logo_test.png" alt='marco_photo' />
        </b-col>
        <b-col cols='10'>
          <b-row>
            <b-col cols='7'>
              <SearchInputSecondary/>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols='7'>
              <NavBarSecondary />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <hr/>
      <b-row>
        <b-col cols='6' offset='1'>
          <GroupButtons @clicked="onClickButtonList" :currentFilter='currentButton' :listButtons='buttons' />
          <ObjectTable :currentField='fields' :currentItems='items' />
        </b-col>
        <b-col cols='4'>
          <ActionCards/>
        </b-col>
      </b-row>
    </b-container>
    <ModalAddPhoto/>
  </div>
</template>

<script>
  import SearchInputSecondary   from '../../components/SearchInputSecondary.vue'
  import NavBarSecondary        from '../../components/NavBarSecondary.vue'
  import GroupButtons           from '../../components/GroupButtons.vue'
  import ObjectTable            from '../../components/ObjectTable.vue'
  import ActionCards            from '../../components/ActionCards.vue'
  import ModalAddPhoto          from '../../components/ModalAddPhoto.vue'

  export default {
    name: 'PhotosIndex',
    components: {
      SearchInputSecondary,
      NavBarSecondary,
      GroupButtons,
      ObjectTable,
      ActionCards,
      ModalAddPhoto
    },
    data() {
      return {
        buttons: [
          { key: 'year', label: 'Par année', state: true },
          { key: 'place', label: 'Par lieu', state: false },
          { key: 'person', label: 'Par personne', state: false }
        ],
        currentButton: 'year',
        fields: [
          { key: 'date',     label: 'Date', sortable: true },
          { key: 'nb_image', label: 'Nombre de photo', sortable: true }
        ],
        items: [
          { date: 1931, nb_image: 1 },
          { date: 1984, nb_image: 24 },
          { date: 2011, nb_image: 51 },
          { date: 2020, nb_image: 74 }
        ]
      };
    },
    methods: {
      onClickButtonList (newKey) {
        this.currentButton = newKey;
        if (this.currentButton == 'year') {
          this.fields = [
            { key: 'date',     label: 'Date', sortable: true },
            { key: 'nb_image', label: 'Nombre de photo', sortable: true }
          ];
          this.items = [
            { date: 1931, nb_image: 1 },
            { date: 1984, nb_image: 24 },
            { date: 2011, nb_image: 51 },
            { date: 2020, nb_image: 74 }
          ];
        } else if (this.currentButton == 'place') {
          this.fields = [
            { key: 'place',    label: 'Lieu', sortable: true },
            { key: 'nb_image', label: 'Nombre de photo', sortable: true }
          ];
          this.items = [
            { place: 'Alger',    nb_image: 121 },
            { place: 'Londre',   nb_image: 224 },
            { place: 'Paris',    nb_image: 23 },
            { place: 'Toulouse', nb_image: 34 }
          ];
        } else if (this.currentButton == 'person') {
          this.fields = [
            { key: 'person',   label: 'Personne', sortable: true },
            { key: 'nb_image', label: 'Nombre de photo', sortable: true }
          ];
          this.items = [
            { person: 'Jean-françois Foubert', nb_image: 15 },
            { person: 'Marie-Pierre Lu',       nb_image: 12 },
            { person: 'Dominique Godfrey',     nb_image: 24 },
            { person: 'Véronique Marcorelle',  nb_image: 22 }
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
