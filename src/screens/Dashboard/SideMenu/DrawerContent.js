import { View, Button, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from "react-native-paper"

export const DrawerContent = (props) => {

    const handleSignOut = () => {

    }

    return (
        <View className="flex-1">
            <DrawerContentScrollView {...props}>
                <View className='flex-row items-center mt-5' >
                    <View className='mr-2' >
                        <Avatar.Image className="" source={require('../../../../src/assets/revlogo.png')} />
                    </View>
                    <View>
                        <Title className="font-semibold text-primary">Multicare Hospital Ltd</Title>
                        <Caption>Dhaka, Bangladesh</Caption>
                    </View>
                </View>

                <View className='flex-1'>
                    <Drawer.Section >
                        <DrawerItem className='border-none' label="Home" onPress={() => { props.navigation.navigate('Home') }} />
                        <DrawerItem label="Appointment History" onPress={() => { props.navigation.navigate('Appointment History') }} />
                        <DrawerItem label="Reports" onPress={() => { props.navigation.navigate('Reports') }} />
                        <DrawerItem label="Profile" onPress={() => { props.navigation.navigate('Profile') }} />
                        <DrawerItem label="ChangePassword" onPress={() => { props.navigation.navigate('ChangePassword') }} />
                        <DrawerItem label="ContactUs" onPress={() => { props.navigation.navigate('ContactUs') }} />
                    </Drawer.Section>
                </View>

                <View className='flex justify-center items-center bg-base-100 py-2'>
                    <TouchableOpacity onPress={handleSignOut} className=''>
                        <Text>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}