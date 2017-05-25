<template>
  <div class="image">
    <div class="add-image">
      <div class="row">
        <h4>New image</h4>
      </div>
      <div class="row">
        <input 
          type="text" 
          placeholder="name"
          v-model="fields.name"
        />
      </div>
      
      <div class="row">
        <input 
          type="text" 
          placeholder="url"
          v-model="fields.url"
        />
      </div>
      <div class="row">
        <button
          v-on:click="addImage()"
          v-bind:disabled="dataMissing">
          Add
        </button>
      </div>            
    </div>
  </div>
</template>

<script>
  import ImageService from '@/service/image.service';
  const imageService = ImageService.instance();

  export default {
    data() {
      return {
        fields: {
          name: '',
          url: ''
        },
        dataMissing: true
      }
    },

    watch: {
      'fields.name': function(newValue) {
        this.validateData();
      },
      'fields.url': function(newValue) {
        this.validateData();
      }
    },

    methods: {
      addImage() {
        imageService.addImage(this.fields);
      },

      validateData() {
        this.dataMissing = !this.fields.name || !this.fields.url;
      },      
    },   
  }
</script>