import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const navigator = createStackNavigator(
  {
    Home: Main,
    Details: Main,
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