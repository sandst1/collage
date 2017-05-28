import React, { Component } from 'react';
import ImageService from '../service/image.service';

class ImageDetails extends Component {

  constructor() {
    super();
    this.state = {
      id: null,
      imgData: null
    }
  }

  componentDidMount() {
    const imageId = this.props.match.params.id;
    const imageService = ImageService.instance();
    imageService.getImage(imageId).then((image) => {
      this.setState({
        id: imageId,
        imgData: image
      });
    });    
  }

  handleClick() {
    this.props.history.goBack();
  }

  render() {
    if (!this.state.imgData) {
      return <div></div>;
    }

    return (
      <div className="image-details">
        <div className="back" onClick={this.handleClick.bind(this)}>
          back
        </div>
        <div className="row name">
          {this.state.imgData.name}
        </div>
        <div className="row image">
          <img src={this.state.imgData.url} alt='pixels' />
        </div>
        <div className="row description">
          {this.state.imgData.description}
        </div>
      </div>
    );
  }
}

export default ImageDetails;