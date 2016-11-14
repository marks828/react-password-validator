import React, { Component } from 'react';
import logo from './logo.svg';


class Password extends Component {
  constructor(props){
    super()
    this.state = {
      password: ""
    }
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({password: e.target.password})
  }


  render() {
    return (
      <div className="App">
        <h3>Current Password </h3>
        <p>{this.state.password}</p>
        <form>
          <p>Password: {this.state.password}</p>
          <input type="text" value={this.state.password} onChange={(e) => this.handleChange(e)} />
          <button onClick = {(e) => this.handleClick(e)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Password;
