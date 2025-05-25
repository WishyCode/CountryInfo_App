import React from 'react';
import { Switch } from 'react-native-paper';
import { NavigationContainer, DefaultTheme, DarkTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { RootStackParamList } from './src/navigation/types';
import { ThemeProvider, useThemeToggle } from './src/theme/ThemeContext';

enableScreens();
const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationWrapper = () => {
  const { isDark } = useThemeToggle();
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Country List',
            headerRight: () => {
              const { isDark, toggleTheme } = useThemeToggle();
              return <Switch value={isDark} onValueChange={toggleTheme} />;
            },
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const App = () => (
  <ThemeProvider>
    <NavigationWrapper />
  </ThemeProvider>
);

export default App;
