import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stackers from './src/components/HomeStack';
import {Provider} from 'react-redux';
import store from './src/store';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stackers />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
