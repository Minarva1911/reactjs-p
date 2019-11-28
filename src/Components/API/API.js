import React, { Component } from 'react';
import APIf from './APIf';

class API extends Component {
  render() {
    return (
      <APIf list={this.state.list} />
    )
  }
  state = {
    list: ' '
  }

  componentDidMount() {
    fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ list: data })
      })
      .catch(console.log)

  }
}

export default API;