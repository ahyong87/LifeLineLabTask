import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EntryPoint from 'routes/EntryPoint';
import Login from 'routes/Login';
import MainScreen from 'routes/MainScreen';
import FrenDetails from 'routes/FrenDetails';

const AppNavigator = createStackNavigator(
  {
    EntryPoint,
    Login,
    MainScreen,
    FrenDetails,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
