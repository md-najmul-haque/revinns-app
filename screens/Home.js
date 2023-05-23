import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 mt-10 bg-white">
            <View className="">
                <Image source={{ uri: 'https://i.ibb.co/gtB5sR9/logo.png' }} className="w-76 h-96" />

                <Text>Welcome to Revinns Ltd</Text>

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