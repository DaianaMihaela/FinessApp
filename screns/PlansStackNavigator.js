import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlansScreen from './PlansScreen';
import Plan1Screen from './Plan1Screen';
import Plan2Screen from './Plan2Screen';
import Plan3Screen from './Plan3Screen';
import Plan4Screen from './Plan4Screen';
import Plan5Screen from './Plan5Screen';

const Stack = createStackNavigator();

export default function PlansStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Plans">
      <Stack.Screen name="Plans" component={PlansScreen} options={{ title: 'Planuri de Fitness' }} />
      <Stack.Screen name="Plan1" component={Plan1Screen} options={{ title: 'Plan 1: 1000 Calories' }} />
      <Stack.Screen name="Plan2" component={Plan2Screen} options={{ title: 'Plan 2: Reduce Belly Fat' }} />
      <Stack.Screen name="Plan3" component={Plan3Screen} options={{ title: 'Plan 3: Remove Belly in 7 Days' }} />
      <Stack.Screen name="Plan4" component={Plan4Screen} options={{ title: 'Plan 4: 8 KG Weight Loss' }} />
      <Stack.Screen name="Plan5" component={Plan5Screen} options={{ title: 'Plan 5: Quick Morning Workout' }} />
    </Stack.Navigator>
  );
}
