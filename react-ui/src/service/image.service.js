import axios from 'axios';

class ImageService {
  static _instance;
  static images;

  IMG_URL = 'http://localhost:3000/images/';

  static instance() {
    if (!this._instance) {
      this._instance = new ImageService();
    }
    return this._instance;
  }

  constructor() {
    this.images = [];
  }

  loadImages() {
    const promise = new Promise((resolve) => {
      axios.get(this.IMG_URL).then((res) => {
        this.images.length = 0;
        res.data.forEach((img) => {
          this.images.push(img);
        })
        resolve(this.images);
      });
    });

    return promise;
  }

  getImage(imageId) {
    const promise = new Promise((resolve) => {
      if (this.images && this.images.length > 0) {
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
    const promise = new Promise((resolve) => {
      axios
        .post(this.IMG_URL, imageData)
        .then((res) => {
          this.images.push(res.data);
          resolve(this.images);
        });
    });
    return promise;
  }

  removeImage(imageId) {
    const promise = new Promise((resolve) => {
      axios
        .delete(`${this.IMG_URL}/${imageId}`)
        .then((res) => {
          const idx = this.images.findIndex((img) => parseInt(img.id, 10) === parseInt(imageId, 10));
          if (idx >= 0) {
            this.images.splice(idx, 1);
          }
          resolve(this.images);
        });
    });

    return promise;
  }

  _findImage(imageId) {
    return this.images.find(img => parseInt(img.id, 10) === parseInt(imageId, 10));
  }
}

export default ImageService;
