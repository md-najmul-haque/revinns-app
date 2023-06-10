import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import { Avatar, Caption } from "react-native-paper"


const Home = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-white relative">
            <View>
                <Text className='text-4xl text-primary font-semibold text-center'>Welcome to</Text>

                <View className='flex-row justify-center items-center mt-2'>
                    <Avatar.Image size={40} className="" source={require('../assets/logo.jpg')} />
                    <Text className='text-2xl text-primary font-semibold text-center ml-2'>Bangladesh Multicare Hospital</Text>
                </View>

                <View className='flex-row justify-center mt-10  '>
                    <View className="mr-5 ">
                        <Button
                            onPress={() => navigation.navigate('SignIn')}
                            title="Sing In"
                            color='#02094c'
                            className="bg-[#02094c]"
                        />
                    </View>
                    <View>
                        <Button
                            onPress={() => navigation.navigate('SignUp')}
                            title="Sign Up"
                            color="#ff6400"
                        />
                    </View>

                </View>



            </View>
            <View className='flex-row justify-center items-center absolute bottom-24'>
                <Avatar.Image size={20} className="mr-2" source={require('../assets/revlogo.png')} />
                <Caption className='text-primary'>
                    Powered by Revinns
                </Caption>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default Home;