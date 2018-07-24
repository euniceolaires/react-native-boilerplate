import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import * as navigation from './actions/navigation';
import registerScreens from './config/screens';
import store from './config/store';
import navigator from './config/routes';

registerScreens(store, Provider);

export default class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(navigation.changeAppRoot('home'));
  }

  onStoreUpdate() {
    const { root } = store.getState().navigation;
    if (this.currentRoot !== root) {
      this.currentRoot = root;
      navigator(root);
    }
  }
}
