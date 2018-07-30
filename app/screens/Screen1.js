import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../components/Container';

class Screen1 extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  handlePress = () => {
    const { navigator } = this.props;
    navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };

  render() {
    return (
      <Container
        backgroundColor="#9932CC"
        // backgroundColor="#F44336"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen1;
