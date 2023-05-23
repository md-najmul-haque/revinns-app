import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import { logo } from "../assets/logo.png"

const Home = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 mt-10 bg-white">
            <View className="mt-10">
                <Image source={logo} className="w-96 h-32" />

                <Text className='text-xl font-semibold'>Welcome to Revinns Ltd</Text>

                <Button
                    onPress={() => navigation.navigate('SignIn')}
                    title="Sing In"
                    className=""
                />
                <Button
                    onPress={() => navigation.navigate('SignUp')}
                    title="Sign Up"
                    className="bg-warning ml-3"
                />

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default Home;