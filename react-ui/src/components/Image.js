import React, { Component } from 'react';

class Image extends Component {

  openDetails() {
  }

  removeImage() {
  }

  handleClick() {
    this.props.clicked(this.props.imgData.id);
  }

  render() {
    return (
      <div className="image" onClick={this.handleClick.bind(this)}>
        <img src={this.props.imgData.url} alt='' />
        <div className="remove" />
        <div className="name">{this.props.imgData.name}</div>
      </div>
    );
  }
}

export default Image;