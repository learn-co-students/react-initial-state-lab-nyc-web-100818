// your Bomb code here!
import React from 'react';
class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  componentDidMount() {
    this.startCountDown()
  }

  componentDidUpdate() {
    if(this.state.secondsLeft !== 0 ) {
      this.startCountDown()
    }
  }

  startCountDown = () => {
    setTimeout(() => {
      this.setState(state => {
        return {secondsLeft: state.secondsLeft - 1};
      })
    }, 1000)
  }
  // Boom!
  render() {
    return(
      this.state.secondsLeft > 0 ? <h1>{this.state.secondsLeft} seconds left before I go boom!</h1> : <h1>Boom!</h1>
      )
  }
}

export default Bomb