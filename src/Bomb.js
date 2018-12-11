// your Bomb code here!
import React from 'react';


export default class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    // use a ternary to get the message AND THEN return it!
    let bombMsg = this.state.secondsLeft === 0 ? <h1>Boom!</h1> : <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>

    // must return ONE element
    return (
      <div>{bombMsg}</div>
    )
  }


}
