import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { Home } from './screens/Home';
import { MyList } from './screens/MyList';
import { Browser } from './screens/Browser';
import { Simulcasts } from './screens/Simulcasts';
import { Settings } from './screens/Settings';


const { Navigator, Screen } = createBottomTabNavigator();


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home" tabBarOptions={{
                activeTintColor: '#df6300',
                inactiveTintColor: '#ffffffff',
                style: { backgroundColor: '#213944', height: 52, borderTopWidth: 0 },
                labelPosition: 'below-icon',
            }}>
                <Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ size, focused }) =>
                        <SimpleLineIcons
                            name="home"
                            size={size}
                            color={focused ? '#df6300' : '#ffffffff'}
                        />
                }}
                />
                <Screen name="My List" component={MyList} options={{
                    tabBarIcon: ({ size, focused }) =>
                        <MaterialIcons
                            name="bookmark-outline"
                            size={size}
                            color={focused ? '#df6300' : '#ffffffff'}
                        />
                }}
                />
                <Screen name="Browser" component={Browser} options={{
                    tabBarIcon: ({ size, focused }) =>
                        <AntDesign
                            name="appstore-o"
                            size={size}
                            color={focused ? '#df6300' : '#ffffffff'}
                        />
                }}
                />
                <Screen name="Simulcasts" component={Simulcasts} options={{
                    tabBarIcon: ({ size, focused }) =>
                        <MaterialCommunityIcons
                            name="star-four-points-outline"
                            size={size}
                            color={focused ? '#df6300' : '#ffffffff'}
                        />
                }}
                />
                <Screen name="Settings" component={Settings} options={{
                    tabBarIcon: ({ size, focused }) =>
                        <MaterialCommunityIcons
                            name="account-outline"
                            size={size}
                            color={focused ? '#df6300' : '#ffffffff'}
                        />
                }}
                />
            </Navigator>
        </NavigationContainer>
    );
}