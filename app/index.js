import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import * as navigation from './actions/navigation';
import registerScreens from './config/screens';
import store from './config/store';

registerScreens(store, Provider);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.startApp();
    // store.subscribe(this.onStoreUpdate.bind(this));
    // store.dispatch(navigation.changeAppRoot('login'));
  }

  // onStoreUpdate() {
  //   const { root } = store.getState().navigation;
  //   if (this.currentRoot !== root) {
  //     this.currentRoot = root;
  //     this.startApp(root);
  //   }
  // }

  startApp(root) {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'One',
          screen: 'Screen1',
          icon: require('./images/icon1.png'),
          selectedIcon: require('./images/icon1_selected.png'),
          title: 'Screen One',
        },
        {
          label: 'Two',
          screen: 'Screen2',
          icon: require('./images/icon2.png'),
          selectedIcon: require('./images/icon2_selected.png'),
          title: 'Screen Two',
        },
      ],
    });
  }
}
