import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(this.props.type,e.target.value);
  }

  render() {
    return(
      <input 
        htmlFor="val" 
        type="range" 
        onChange={this.handleChange} 
        defaultValue={this.props.val}
        min="0"
        max="255"/>
    );
  };
};