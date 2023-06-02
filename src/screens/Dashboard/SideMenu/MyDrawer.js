
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react'
import DashboardHome from './DashboardHome';
import AppointmentHistory from './AppointmentHistory';
import Reports from './Reports';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import ContactUs from './ContactUs';
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <View>
                <Text>Multicare Hospital</Text>
            </View>
            <Drawer.Screen name="Home" component={DashboardHome} />
            <Drawer.Screen name="Appointment History" component={AppointmentHistory} />
            <Drawer.Screen name="Reports" component={Reports} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="ChangePassword" component={ChangePassword} />
            <Drawer.Screen name="ContactUs" component={ContactUs} />
        </Drawer.Navigator>
    )
}

export default MyDrawer