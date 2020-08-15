<template>
  <div>
    <b-card-group deck>
      <b-card
        header=""
        header-tag="header"
        footer-tag="footer"
        title="Les derniers ajouts"
      >
        <b-card-text>Il y a {{currentItems.length}} nouvelles photos depuis la semaine dernière.</b-card-text>
        <CoolLightBox 
          :items="currentItems"
          :index="index"
          @close="index = null">
        </CoolLightBox>

        <b-row class="images-wrapper">
          <b-col cols='2'
            class="image"
            v-for="(image, imageIndex) in currentItemsToShow"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image.src + ')' }"
          ></b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
// IMAGE VIEWER
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

  export default {
    name: 'ActionCards',
    components: {
      CoolLightBox
    },
    props: {
      currentItems: { 
        type: Array,
        required: true
      },
      currentItemsToShow: { 
        type: Array,
        required: true
      }
    },
    data: function () {
      return {
        index: null
      };
    },
  }
</script>

<style>
.image {
  height: 200px;
  width: 200px;
  cursor: pointer;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 15px;
}
</style>
