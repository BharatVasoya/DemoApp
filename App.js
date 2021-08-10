// ---------- Imports ---------- //
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/index';
import {store} from './src/store/index';

// ---------- Component ---------- //
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
