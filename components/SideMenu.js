import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './Home';
import Setting from './Settings';
import Heroes from './Heroes';
import Notifications from './Notification';

const Drawer = createDrawerNavigator();

const SideMenu = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="Mes Héros">
      <Drawer.Screen name="HomeFragment" component={Home} />
      <Drawer.Screen name="Mes Héros" component={Heroes} />
      <Drawer.Screen name="SettingFragment" component={Setting} />
      <Drawer.Screen name="NotificationsFragment" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default SideMenu;
