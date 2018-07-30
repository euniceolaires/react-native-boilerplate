import { Navigation } from 'react-native-navigation';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Login from '../screens/Login';

export default (store, Provider) => {
  Navigation.registerComponent('Screen1', () => Screen1, store, Provider);
  Navigation.registerComponent('Screen2', () => Screen2, store, Provider);
  Navigation.registerComponent('Screen3', () => Screen3, store, Provider);
  Navigation.registerComponent('Screen4', () => Screen4, store, Provider);
  Navigation.registerComponent('Login', () => Login, store, Provider);
};
