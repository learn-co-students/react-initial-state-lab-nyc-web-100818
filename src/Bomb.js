import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    // if (this.state.secondsLeft === 0) {
    //   return <p>Boom!</p>
    // }
    // else {
    //   return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    // }

    //per solution, ternary is more efficient:

    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  }

}

export default Bomb;
