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
        <b-col cols='10'>
          <h1>Il y a 15 photos pour l'année 1931</h1>
        </b-col>
        <b-col cols='8' offset='1'>
          <ImagesList :currentItems='filteredItems' />
        </b-col>
        <b-col cols='2'>
          <FiltersSide @clicked="onClickUpdateFilters"/>
        </b-col>
      </b-row>
    </b-container>
    <ModalAddPhoto/>
  </div>
</template>

<script>
  import SearchInputSecondary   from '../../components/SearchInputSecondary.vue'
  import NavBarSecondary        from '../../components/NavBarSecondary.vue'
  import ImagesList             from '../../components/ImagesList.vue'
  import FiltersSide            from '../../components/FiltersSide.vue'
  import ModalAddPhoto          from '../../components/ModalAddPhoto.vue'

  export default {
    name: 'PhotosYear',
    components: {
      SearchInputSecondary,
      NavBarSecondary,
      ImagesList,
      FiltersSide,
      ModalAddPhoto
    },
    data() {
      return {
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
        allItems: [
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/237/400/400',
            place: 'paris'
          },
          {
            title: 'Vue depuis la Trump Tower.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/238/400/400',
            place: 'mexico_city'
          },
          {
            title: 'Une super plante.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/239/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/240/400/400',
            place: 'tokyo'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/241/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/242/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/243/400/400',
            place: 'mexico_city'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/244/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/247/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/248/400/400',
            place: 'mexico_city'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/249/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/250/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/251/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/252/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/253/400/400',
            place: 'mexico_city'
          }
        ],
        filteredItems: [
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/237/400/400',
            place: 'paris'
          },
          {
            title: 'Vue depuis la Trump Tower.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/238/400/400',
            place: 'mexico_city'
          },
          {
            title: 'Une super plante.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/239/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/240/400/400',
            place: 'tokyo'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/241/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/242/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/243/400/400',
            place: 'mexico_city'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/244/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/247/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/248/400/400',
            place: 'mexico_city'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/249/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/250/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/251/400/400',
            place: 'helsinki'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/252/400/400',
            place: 'paris'
          },
          {
            title: 'John Jacks le chien de Paula.',
            description: "A New-York (1931)",
            src: 'https://picsum.photos/id/253/400/400',
            place: 'mexico_city'
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
        this.filteredItems = temp;
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
