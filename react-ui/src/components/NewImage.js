import React, { Component } from 'react';

class NewImage extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
      dataMissing: true
    };
  }

  nameChange(event) {
    const dataMissing = this.validateData();
    this.setState({
      name: event.target.value,
      dataMissing: dataMissing
    });

  }

  urlChange(event) {
    const dataMissing = this.validateData();
    this.setState({
      url: event.target.value,
      dataMissing: dataMissing
    });
  }

  validateData() {
    return !this.state.name.length || !this.state.url.length;
  }

  saveImage() {
    this.props.addImage({
      name: this.state.name,
      url: this.state.url
    });
  }

  render() {
    return (
      <div className='image'>
        <div className='add-image'>
          <div className='row'>
            <h4>New image</h4>
          </div>
          <div className='row'>
            <input
              type='text'
              placeholder='name'
              value={this.state.name}
              onInput={this.nameChange.bind(this)}
            />
          </div>
          <div className='row'>
            <input
              type='text'
              placeholder='url'
              value={this.state.url}
              onInput={this.urlChange.bind(this)}
            />
          </div>
          <div className='row'>
            <button
              onClick={this.saveImage.bind(this)}
              disabled={this.state.dataMissing}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewImage;