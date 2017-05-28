import React, { Component } from 'react';

import Image from './Image';
import NewImage from './NewImage';
import ImageService from '../service/image.service';

class ImageGrid extends Component {
  
  constructor() {
    super();
    this.imageService = ImageService.instance();
    this.state = {
      images: [],
      redirectTo: null
    };
  }

  componentDidMount() {
    this.imageService.loadImages().then((images) => {
      this.setState({
        images: images
      });
    });
  }

  imageClicked(imgId) {
    this.props.history.push(`/images/${imgId}`);
  }

  addImage(imgData) {
    this
      .imageService
      .addImage({
        name: imgData.name,
        url: imgData.url
      })
      .then((images) => {
        this.setState({
          images: images
        });
      });
  }

  removeImage(imageId) {
    this
      .imageService
      .removeImage(imageId)
      .then((images) => {
        this.setState({
          images: images
        });
      });
  }

  render() {
    const imageElements = this.state.images.map((image) => {
      return (
        <Image 
          key={image.id} 
          imgData={image}
          history={this.props.history}
          clicked={this.imageClicked.bind(this)}
          remove={this.removeImage.bind(this)}
        />
      );
    });

    return (
      <div className="images">
        {imageElements}
        <NewImage addImage={this.addImage.bind(this)}/>
      </div>
    );
  }
}

export default ImageGrid;