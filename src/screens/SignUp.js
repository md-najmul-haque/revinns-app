import React, { useState } from 'react'
import { Button, Image, SafeAreaView, Text, TextInput, View } from 'react-native';
import { Avatar } from "react-native-paper"
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignUp = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = async () => {

        const user = {
            name: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,

        }

        // console.log(user)
        await fetch(`http://192.168.0.102:5000/api/v1/user`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    Toast.show({
                        type: 'success',
                        text1: `Hi ${data?.user?.name}`,
                        text2: data.message
                    });
                    AsyncStorage.setItem("token", data.token);
                    navigation.navigate('Dashboard')
                } else {
                    Toast.show({
                        type: 'error',
                        text2: data.message
                    })

                }
            })
            .catch(error => {
                console.error('Network request failed:', error);
                // Handle the error or display an error message
            });


    };


    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-white mt-12">
            <View className='mx-5'>
                <View className='flex-row justify-center items-center mt-2'>
                    <Avatar.Image size={40} className="" source={require('../assets/logo.jpg')} />
                    <Text className='text-2xl text-primary font-semibold text-center ml-2'>Bangladesh Multicare Hospital</Text>
                </View>

                <View className='mt-5'>

                    <View>
                        <Text className='text-2xl mb-5 text-primary text-center font-semibold'>Register Here!</Text>
                        <TextInput
                            className='bg-white border border-gray-300 h-10 rounded-md p-2 mb-4 min-w-full'
                            placeholder="User Name"
                            onChangeText={text => setUserName(text)}
                        />
                        <TextInput
                            className='bg-white border border-gray-300 h-10 rounded-md p-2 mb-4 min-w-full'
                            placeholder="Email"
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            className='bg-white border border-gray-300 h-10 rounded-md p-2 mb-4 min-w-full'
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={text => setPassword(text)}
                        />

                        <TextInput
                            className='bg-white border border-gray-300 h-10 rounded-md p-2 mb-4 min-w-full'
                            placeholder="Confirm Password"
                            secureTextEntry
                            onChangeText={text => setConfirmPassword(text)}
                        />

                        <Button title="Sign Up" color='#ff6400' onPress={handleLogin} />

                        <Text className='mt-5 text-center'>Already have an aaa account? <Text className='text-secondary font-semibold' onPress={() => navigation.navigate('SignIn')}>Sign In</Text> </Text>

                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default SignUp