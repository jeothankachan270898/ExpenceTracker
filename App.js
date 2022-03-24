import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';

import AllExpences from './screens/AllExpences';
import ManageExpences from './screens/ManageExpences';
import RecentExpences from './screens/RecentExpences';
import IconButtons from './components/Ui/IconButton';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpenceOverview(){
  return <Tab.Navigator screenOptions={({navigation})=>({
    headerStyle : {backgroundColor: GlobalStyles.colors.primary500},
    headerTintColor: '#fff',
    tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
    tabBarActiveTintColor: GlobalStyles.colors.accent500 ,
    headerRight : (tintColor) =>
    <IconButtons icon="add" size={30} color={tintColor} onPress={() => {
      navigation.navigate('ManageExpences')
    }}/>
  })}>
    
    <Tab.Screen name='RecentExpences' 
    component={RecentExpences}
    options={{
      title: 'Recent Expences',
      tabBarLabel: 'Recent',
      tabBarIcon: ({ colors, size}) => (
        <Ionicons name='hourglass' size={size} color={colors}/>
      )
    }}/>
    <Tab.Screen name='AllExpences'
     component={AllExpences}
     options={{
      title: 'All Expences',
      tabBarLabel: 'Expences',
      tabBarIcon: ({ colors, size}) => (
        <Ionicons name='calendar' size={size} color={colors}/>)
     }}/>
  </Tab.Navigator>
}


export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle : {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: '#fff'
      }}>
        <Stack.Screen name='ExpenceOverview' 
        component={ExpenceOverview}
        options={{ headerShown : false}}/>
        <Stack.Screen name='ManageExpences' 
        component={ManageExpences}
        options={{
          presentation: 'modal'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
      
    
  );
}


