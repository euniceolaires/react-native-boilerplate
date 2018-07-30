import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../components/Container';

class Screen4 extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };


  handlePress = () => {
    const { navigator } = this.props;
    navigator.dismissModal();
  };

  render() {
    return (
      <Container
        backgroundColor="#FFB6C1"
        // backgroundColor="#01446b"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen4;
