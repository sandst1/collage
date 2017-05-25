<template>
  <div class="image-details">
    <div class="back" v-on:click="goBack()">
      back
    </div>

    <div class="row name">{{name}}</div>
    <div class="row image">
      <img v-bind:src="url"/>
    </div>
    <div class="row description">
      {{description}}
    </div>
  </div>
</template>

<script>
  import router from '../router';
  import ImageService from '@/service/image.service';
  const imageService = ImageService.instance();

  export default {
    data() {
      return {
        name: '',
        url: '',
        description: ''
      }
    },

    created() {
      const imageId = this.$route.params.id;
      imageService
        .getImage(imageId)
        .then((image) => {
          this.name = image.name;
          this.url = image.url;
          this.description = image.description;
        });
    },

    methods: {
      goBack() {
        router.push('/images/');
      },
    }
  }
</script>