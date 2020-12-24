import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Stackers from './src/components/HomeStack';
//import Tabers from './src/components/HomeTabs';
import {Provider} from 'react-redux'
import store from './src/store'

//import Catatan from './catatan';

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
