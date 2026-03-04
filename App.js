import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import WorkoutHistoryScreen from './screens/WorkoutHistoryScreen';
import StepCounterScreen from './screens/StepCounterScreen';
import TimerScreen from './screens/TimerScreen';
import BMIScreen from './screens/BMIScreen';
import PlansStackNavigator from './screens/PlansStackNavigator'; 
import AntrenamenteScreen from './screens/AntrenamenteScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Acasă">
        <Drawer.Screen name="Acasă" component={HomeScreen} />
        <Drawer.Screen name="Istoric antrenamente" component={WorkoutHistoryScreen} />
        <Drawer.Screen name="Contor pași" component={StepCounterScreen} />
        <Drawer.Screen name="Cronometru" component={TimerScreen} />
        <Drawer.Screen name="Calculator BMI" component={BMIScreen} />
        <Drawer.Screen name="Planuri de Fitness" component={PlansStackNavigator} />
        <Drawer.Screen name="Antrenamente" component={AntrenamenteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
