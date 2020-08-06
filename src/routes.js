import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './pages/Home';
import Buscas from './pages/Buscas';
import EmBreve from './pages/EmBreve';
import Downloads from './pages/Downloads';
import Mais from './pages/Mais';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // eslint-disable-next-line no-unused-vars
        screenOptions={({route, navigation, focused}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              return (
                <SimpleLineIcons name={iconName} size={20} color={color} />
              );
            }
            if (route.name === 'Buscas') {
              iconName = 'search';
              return <Ionicons name={iconName} size={20} color={color} />;
            }
            if (route.name === 'EmBreve') {
              iconName = 'cards';
              return (
                <MaterialCommunity name={iconName} size={20} color={color} />
              );
            }

            if (route.name === 'Downloads') {
              iconName = 'arrow-collapse-down';
              return (
                <MaterialCommunity name={iconName} size={20} color={color} />
              );
            }

            iconName = 'plus';
            return <AntDesign name={iconName} size={20} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FCFFFC',
          inactiveTintColor: '#92929c',
          style: {
            backgroundColor: '#06050B',
            borderTopColor: 'rgba(255,255,255,0.2)',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Inicio',
          }}
        />
        <Tab.Screen
          name="Buscas"
          component={Buscas}
          options={{
            title: 'Buscas',
          }}
        />
        <Tab.Screen
          name="EmBreve"
          component={EmBreve}
          options={{
            title: 'Em Breve',
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={Downloads}
          options={{
            title: 'Downloads',
          }}
        />
        <Tab.Screen
          name="Mais"
          component={Mais}
          options={{
            title: 'Mais',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
