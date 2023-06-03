import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const DashboardHome = () => {
    return (
        <View className="mt-14">
            <View className='flex-row justify-around items-center'>
                <View>
                    <View className="flex justify-center items-center"><Icon name="hand-holding-medical" size={50} color="#02094c" /></View>
                    <Text className="text-xl font-semibold">Appointment</Text>
                </View>
                <View>
                    <View className="flex justify-center items-center">
                        <Icon name="prescription" size={50} color="#02094c" />
                    </View>
                    <Text className="text-xl font-semibold">Prescription</Text>
                </View>
            </View>

            <View className='flex-row justify-around items-center mt-20'>
                <View>
                    <View className="flex justify-center items-center">
                        <Icon name="file-medical-alt" size={50} color="#02094c" />
                    </View>
                    <Text className="text-xl font-semibold">Reports</Text>
                </View>
                <View>
                    <View className='flex justify-center items-center'>
                        <Icon name="prescription" size={50} color="#02094c" />
                    </View>
                    <Text className="text-xl font-semibold">Prescription</Text>
                </View>
            </View>
        </View>
    )
}

export default DashboardHome