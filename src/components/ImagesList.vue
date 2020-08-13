<template>
  <div>
    <CoolLightBox 
      :items="updateItem"
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <b-row class="images-wrapper">
      <b-col cols='2'
        class="image"
        v-for="(image, imageIndex) in updateItem"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
      ></b-col>
    </b-row>
  </div>
</template>

<script>
// IMAGE VIEWER
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

  export default {
    name: 'ImagesList',
    components: {
      CoolLightBox
    },
    props: {
      currentItems: { 
        type: Array,
        required: true
      }
    },
    data: function () {
      return {
        index: null
      };
    },
    computed: {
      updateItem: function () {
        return this.currentItems
      }
    }

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
