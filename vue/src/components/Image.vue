<template>
  <div class="image" v-on:click="openDetails()">
    <img v-bind:src="imgData.url"/>
    <div class="remove" v-on:click.stop="removeImage()">x</div>
    <div class="name">{{imgData.name}}</div>
  </div>
</template>

<script>
  import router from '../router';
  import ImageService from '@/service/image.service';
  const imageService = ImageService.instance();

  export default {
    props: ['imgData'],

    methods: {
      openDetails() {
        router.push(`/images/${this.imgData.id}`);
      },
      removeImage() {
        imageService.removeImage(this.imgData.id);
      }
    }
  }
</script>