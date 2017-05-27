import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Image from './Image';
import NewImage from './NewImage';
import ImageService from '../service/image.service';

const imageService = ImageService.instance();

class ImageGrid extends Component {
  
  constructor() {
    super();
    this.state = {
      images: [],
      redirectTo: null
    };
  }

  componentDidMount() {
    imageService.loadImages().then((images) => {
      this.setState({
        images: images
      });
    });
  }

  imageClicked(imgId) {
    console.log('clicked ', imgId);
    this.setState({
      redirectTo: `/images/${imgId}`
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    const imageElements = this.state.images.map((image) => {
      return (
        <Image 
          key={image.id} 
          imgData={image}
          clicked={this.imageClicked.bind(this)}
        />
      );
    });

    return (
      <div className="images">
        {imageElements}
        <NewImage />
      </div>
    );
  }
}

export default ImageGrid;