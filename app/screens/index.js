import { Navigation } from 'react-native-navigation';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

export default (store, Provider) => {
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);
  Navigation.registerComponent('Screen3', () => Screen3);
  Navigation.registerComponent('Screen4', () => Screen4);
};
