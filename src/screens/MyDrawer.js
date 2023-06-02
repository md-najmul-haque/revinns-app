
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import Article from './Article';
import React from 'react'


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    )
}

export default MyDrawer