import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import store from './src/configs/store';

import NavigationWrapper from './src';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationWrapper />
      </Provider>
    );
  }
}

export default App;
