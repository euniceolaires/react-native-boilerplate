import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

// import { login } from '../actions/index';
import * as navigation from '../actions/navigation';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  onLoginPress() {
    const { dispatch } = this.props;
    dispatch(navigation.changeAppRoot('home'));
    // this.props.dispatch(login());
  }

  render() {
    return (
      <View>
        <Button large onPress={() => this.onLoginPress()} title="Continue">
          <Text>
            Continue
          </Text>
        </Button>
      </View>
    );
  }
}


export default connect()(Login);
