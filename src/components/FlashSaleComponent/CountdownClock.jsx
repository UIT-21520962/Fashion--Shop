import React, { Component } from 'react';
import { WrapperTimeCountDown } from './style';

class CountdownClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 1,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown = () => {
    const { hours, minutes, seconds } = this.state;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(this.interval);
    } else {
      if (seconds === 0) {
        if (minutes === 0) {
          this.setState({ hours: hours - 1, minutes: 59, seconds: 59 });
        } else {
          this.setState({ minutes: minutes - 1, seconds: 59 });
        }
      } else {
        this.setState({ seconds: seconds - 1 });
      }
    }
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div>
        <div style={{display: 'flex'}}>
          <WrapperTimeCountDown> {hours.toString().padStart(2, '0')}</WrapperTimeCountDown> : 
          <WrapperTimeCountDown>{minutes.toString().padStart(2, '0')}</WrapperTimeCountDown> : 
          <WrapperTimeCountDown>{seconds.toString().padStart(2, '0')}</WrapperTimeCountDown>
        </div>
      </div>
    );
  }
}

export default CountdownClock;
