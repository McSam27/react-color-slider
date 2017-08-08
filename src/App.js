import React, { Component } from 'react';
import logo from './logo.svg';
import Slider from './components/Slider';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      r: 0,
      g: 0,
      b: 0,
    };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue = (type, val) => {
    this.setState((prevState) => ({
      r: (type === 'r' ? val : prevState.r),
      g: (type === 'g' ? val : prevState.g),
      b: (type === 'b' ? val : prevState.b),
    }));
  }

  render() {
    const styles = {
      backgroundColor: 'rgb('+this.state.r+','+this.state.g+', '+this.state.b+')',
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RGB Slider in React</h2>
          <div className="row">
          <div className="col-3">
            <span>R: {this.state.r}</span>
            <br/>
            <Slider type="r" val={this.state.r} onChange={this.changeValue}/>
          </div>
          <div className="col-3">
            <span>G: {this.state.g}</span>
            <br/>
            <Slider type="g" val={this.state.g} onChange={this.changeValue}/>
          </div>
          <div className="col-3">
            <span>B: {this.state.b}</span>
            <br/>
            <Slider type="b" val={this.state.b} onChange={this.changeValue}/>
          </div>
          </div>
          
        </div>
        <div className="container" style={styles} >

        </div>
      </div>
    );
  }
}

export default App;
