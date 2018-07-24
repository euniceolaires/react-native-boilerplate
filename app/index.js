// import registerScreens from './screens/index';
// import routes from './config/routes';
// import React from 'react';

// import Navigator from './config/routes';

// export default () => (
//   <Navigator />
// );
import { Navigation } from 'react-native-navigation';

import registerScreens from './config/screens';

export default () => {
  registerScreens();

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
