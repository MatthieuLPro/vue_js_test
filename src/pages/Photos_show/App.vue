<template>
  <div id="app">
    <b-container fluid>
      <ITMHeaderIndex :currentPage='currentPage' />
      <b-row>
        <b-col cols='10' md='12' lg='10'>
          <h1 v-if="currentPage === 'date'">Il y a {{filteredItems.length}} photos pour l'année {{dynamicInfo}}</h1>
          <h1 v-if="currentPage === 'place'">Il y a {{filteredItems.length}} photos concernant {{dynamicInfo}}</h1>
          <h1 v-if="currentPage === 'person'">Il y a {{filteredItems.length}} photos concernant {{dynamicInfo}}</h1>
        </b-col>
        <b-col cols='8' offset='1' md='6' lg='8' offset-lg='1'>
          <ImagesList :currentItems='filteredItems' />
        </b-col>
        <b-col cols='2' md='4' lg='2'>
          <FiltersSide @clicked="onClickUpdateFilters" :filtersList="filtersOptions"/>
        </b-col>
      </b-row>
    </b-container>
    <ModalAddPhoto/>
  </div>
</template>

<script>
  import ITMHeaderIndex         from '../../components/ITMHeaderIndex.vue'
  import ImagesList             from '../../components/ImagesList.vue'
  import FiltersSide            from '../../components/FiltersSide.vue'
  import ModalAddPhoto          from '../../components/ModalAddPhoto.vue'

  /* *** */
  /* Need to make php request */
  /* With following info: -place, -year, -people */
  /* default value for each is 'all' */
  /* *** */

  export default {
    name: 'PhotosShow',
    components: {
      ITMHeaderIndex,
      ImagesList,
      FiltersSide,
      ModalAddPhoto
    },
    props: {
      place: {
        type: String,
        default: 'all'
      },
      year: {
        type: Number,
        default: 0
      },
      people: {
        type: String,
        default: 'all'
      }
    },
    created: function () {
      const url     = window.location.href.split('?');
      const type    = url[1].split('=')[1];
      const info    = url[2].split('=')[1];
      const result  = this.filtersOptions;
      const length  = this.filtersOptions.length;
      for(let i = 0; i < length; i++) {
        if (this.filtersOptions[i] === type) {
          result.splice(i, 1);
        }
      }
      this.filtersOptions = result;
      this.currentPage = type;
      this.dynamicInfo = info;
    },
    data() {
      return {
        filtersOptions: ['date', 'place', 'person'],
        currentFilters: [
          {
            type: 'person',
            value: []
          },
          {
            type: 'place',
            value: []
          }
        ],
        currentPage: 'date',
        dynamicInfo: 0,
        allItems: [
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/237/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'Vue depuis la Trump Tower.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/238/400/400',
            place: 'mexico_city',
            year: 1984
          },
          {
            title: 'Une super plante.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/239/400/400',
            place: 'helsinki',
            year: 2011
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Tokyo (1931)",
            src: 'https://picsum.photos/id/240/400/400',
            place: 'tokyo',
            year: 2020
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/241/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/242/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/243/400/400',
            place: 'mexico_city',
            year: 1984
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/244/400/400',
            place: 'helsinki',
            year: 2011
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/247/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/248/400/400',
            place: 'mexico_city',
            year: 1984
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/249/400/400',
            place: 'helsinki',
            year: 2011
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/250/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/251/400/400',
            place: 'helsinki',
            year: 2011
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/252/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/253/400/400',
            place: 'mexico_city',
            year: 1984
          }
        ],
        filteredItems: [
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/237/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'Vue depuis la Trump Tower.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/238/400/400',
            place: 'mexico_city',
            year: 1984
          },
          {
            title: 'Une super plante.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/239/400/400',
            place: 'helsinki',
            year: 2011
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Tokyo (1931)",
            src: 'https://picsum.photos/id/240/400/400',
            place: 'tokyo',
            year: 2020
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/241/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/242/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/243/400/400',
            place: 'mexico_city',
            year: 1984
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/244/400/400',
            place: 'helsinki',
            year: 2011
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/247/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/248/400/400',
            place: 'mexico_city',
            year: 1984
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/249/400/400',
            place: 'helsinki',
            year: 2011
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/250/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Helsinki (1931)",
            src: 'https://picsum.photos/id/251/400/400',
            place: 'helsinki',
            year: 2011
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Paris (1931)",
            src: 'https://picsum.photos/id/252/400/400',
            place: 'paris',
            year: 1931
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A Mexico city (1931)",
            src: 'https://picsum.photos/id/253/400/400',
            place: 'mexico_city',
            year: 1984
          }
        ]
      };
    },
    methods: {
      onClickUpdateFilters (newFilters) {
        this.currentFilters[newFilters['type']] = newFilters['value'];
        const temp = [];
        for(let i = 0; i < this.allItems.length; i++) {
          if (this.currentFilters['place'].indexOf(this.allItems[i]['place']) !== -1) {
            temp.push(this.allItems[i]);
          }
        }
        this.filteredItems = temp.length > 0 ? temp : this.allItems;
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
