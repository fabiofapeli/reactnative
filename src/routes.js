import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const navigator = createStackNavigator({
	Main: { screen: Main },
});

const App = createAppContainer(navigator)
export default App