/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <AppState>
            <DrawerNavigator />
          </AppState>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
