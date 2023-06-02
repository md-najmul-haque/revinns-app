import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardHome = () => {
    return (
        <View>
            <Text>Feed</Text>
            <View>
                <Icon name="rocket" size={30} color="#900" />
            </View>
        </View>
    )
}

export default DashboardHome