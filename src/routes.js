import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const navigator = createStackNavigator(
  {
    Home: Main,Product,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552f',
      },
      headerTintColor: '#fff',
    },
  });

const App = createAppContainer(navigator)
export default App