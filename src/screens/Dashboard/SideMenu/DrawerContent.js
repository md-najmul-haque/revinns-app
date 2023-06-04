import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from "react-native-paper"

export const DrawerContent = (props) => {
    return (
        <View className="flex-1">
            <DrawerContentScrollView {...props}>
                <View className='flex-row items-center mt-5' >
                    <View >
                        <Avatar.Image className="" source={'../../../../src/assets/revlogo.png'} />
                    </View>
                    <View>
                        <Title>Multicare Hospital Ltd</Title>
                        <Caption>Dhaka, Bangladesh</Caption>
                    </View>
                </View>

                <View>
                    <Drawer.Section className='flex-1 border-none'>
                        <DrawerItem label="Home" onPress={() => { props.navigation.navigate('Home') }} />
                        <DrawerItem label="Appointment History" onPress={() => { props.navigation.navigate('Appointment History') }} />
                        <DrawerItem label="Reports" onPress={() => { props.navigation.navigate('Reports') }} />
                        <DrawerItem label="Profile" onPress={() => { props.navigation.navigate('Profile') }} />
                        <DrawerItem label="ChangePassword" onPress={() => { props.navigation.navigate('ChangePassword') }} />
                        <DrawerItem label="ContactUs" onPress={() => { props.navigation.navigate('ContactUs') }} />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}