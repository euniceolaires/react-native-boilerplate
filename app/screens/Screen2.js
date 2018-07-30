import React, { Component } from 'react';

import Container from '../components/Container';

class Screen2 extends Component {
  handlePress = () => {
    console.log('press');
  };

  render() {
    return (
      <Container
        backgroundColor="#FFD700"
        // backgroundColor="#c95e0c"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen2;
