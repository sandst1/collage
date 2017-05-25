import axios from 'axios';

class ImageService {
  static _instance;
  static store;

  IMG_URL = 'http://localhost:3000/images/';

  static instance() {
    if (!this._instance) {
      this._instance = new ImageService();
    }
    return this._instance;
  }

  constructor() {
    this.store = {
      images: []
    };    
  }

  loadImages() {
    const promise = new Promise((resolve) => {
      axios.get(this.IMG_URL).then((res) => {
        res.data.forEach((img) => {
          this.store.images.push(img);
        })
        resolve(this.store.images);
      });
    });

    return promise;
  }

  getImage(imageId) {
    const promise = new Promise((resolve) => {
      if (this.store.images && this.store.images.length > 0) {
        resolve(this._findImage(imageId));
      } else {
        this.loadImages().then((imgList) => {
          resolve(this._findImage(imageId));
        });
      }
    });
    return promise;
  }

  addImage(imageData) {
    axios
      .post(this.IMG_URL, imageData)
      .then((res) => {
        this.store.images.push(res.data);
      });
  }

  removeImage(imageId) {
    axios
      .delete(`${this.IMG_URL}/${imageId}`)
      .then((res) => {
        const idx = this.store.images.findIndex((img) => parseInt(img.id) === parseInt(imageId));
        if (idx >= 0) {
          this.store.images.splice(idx, 1);
        }
      });
  }

  _findImage(imageId) {
    return this.store.images.find(img => parseInt(img.id) === parseInt(imageId));
  }
}

export default ImageService;
