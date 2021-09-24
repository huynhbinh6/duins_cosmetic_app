import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {RootNavigator} from './routes/RootNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <RootNavigator />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
