import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from '../components/Container';

class Screen3 extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  handlePress = () => {
    const { navigator } = this.props;
    navigator.showModal({
      screen: 'Screen4',
      title: 'Screen 4',
    });
  };

  render() {
    return (
      <Container
        backgroundColor="#067a46"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen3;
