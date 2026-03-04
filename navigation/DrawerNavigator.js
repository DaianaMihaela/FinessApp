import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import WorkoutHistoryScreen from '../screens/WorkoutHistoryScreen';
import StepCounterScreen from '../screens/StepCounterScreen';
import TimerScreen from '../screens/TimerScreen';
import BMIScreen from '../screens/BMIScreen';
import Plan1Screen from '../screens/Plan1Screen';
import Plan2Screen from '../screens/Plan2Screen';
import Plan3Screen from '../screens/Plan3Screen';
import Plan4Screen from '../screens/Plan4Screen';
import Plan5Screen from '../screens/Plan5Screen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Acasă" component={HomeScreen} />
      <Drawer.Screen name="Istoric Antrenamente" component={WorkoutHistoryScreen} />
      <Drawer.Screen name="Numărător Pași" component={StepCounterScreen} />
      <Drawer.Screen name="Cronometru" component={TimerScreen} />
      <Drawer.Screen name="Calculator BMI" component={BMIScreen} />
      <Drawer.Screen name="Plan 1" component={Plan1Screen} />
      <Drawer.Screen name="Plan 2" component={Plan2Screen} />
      <Drawer.Screen name="Plan 3" component={Plan3Screen} />
      <Drawer.Screen name="Plan 4" component={Plan4Screen} />
      <Drawer.Screen name="Plan 5" component={Plan5Screen} />
    </Drawer.Navigator>
  );
}
