import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpences from './screens/AllExpences';
import ManageExpences from './screens/ManageExpences';
import RecentExpences from './screens/RecentExpences';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpenceOverview(){
  return <Tab.Navigator>
    <Tab.Screen name='AllExpences' component={AllExpences}/>
    <Tab.Screen name='RecentExpences' component={RecentExpences}/>
  </Tab.Navigator>
}


export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ExpenceOverview' component={ExpenceOverview}/>
        <Stack.Screen name='ManageExpences' component={ManageExpences}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
      
    
  );
}


