import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';


const Home = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <View>
                <Image source={require('../assets/logo.png')} className="w-96 h-32" />

                <Text className='text-2xl text-primary font-semibold text-center'>Welcome to Revinns Ltd</Text>

                <View className='flex-row justify-center  mt-10  '>
                    <Button
                        onPress={() => navigation.navigate('SignIn')}
                        title="Sing In"
                        color='#02094c'
                        className="bg-[#02094c] text-xl font-bold"
                    />
                    <Button
                        onPress={() => navigation.navigate('SignUp')}
                        title="Sign Up"
                        color="#ff6400"
                        style={{
                            backgroundColor: 'red',
                            borderRadius: 8,
                            padding: 10,
                        }}
                    />

                </View>

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default Home;