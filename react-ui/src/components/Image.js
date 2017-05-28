import React, { Component } from 'react';

class Image extends Component {

  openDetails() {
  }

  handleClick() {
    this.props.clicked(this.props.imgData.id);
  }

  handleRemove(event) {
    event.stopPropagation();
    this.props.remove(this.props.imgData.id);
  }

  render() {
    return (
      <div className="image" onClick={this.handleClick.bind(this)}>
        <img src={this.props.imgData.url} alt='' />
        <div className="remove" onClick={this.handleRemove.bind(this)}>x</div>
        <div className="name">{this.props.imgData.name}</div>
      </div>
    );
  }
}

export default Image;