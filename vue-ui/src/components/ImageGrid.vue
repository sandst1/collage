<template>
  <div class="images">
    <image-item 
      v-bind:img-data="image" 
      v-bind:key="image.id" 
      v-for="image in images">
    </image-item>
    <new-image></new-image>
  </div>
</template>

<script>
  import Vue from 'vue';
  import ImageService from '../service/image.service';
  import Image from './Image.vue';
  import NewImage from './NewImage.vue';
  const imageService = ImageService.instance();

  export default {
    data() {
      return {
        images: imageService.store.images
      }
    },

    created() {
      imageService.loadImages();
    },

    components: {
      'image-item': Image,
      'new-image': NewImage
    },
  };
</script>
