import React, { useState } from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const SignUp = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = () => {

        const user = {
            name: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,

        }

        // console.log(user)
        fetch(`http://localhost:5000/api/v1/user`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(user => console.log(user))
            .catch(error => {
                console.error('Network request failed:', error);
                // Handle the error or display an error message
            });


    };


    return (
        <SafeAreaView className="h-screen bg-white">
            <View className='mx-5 mt-10'>
                <Image source={require('../assets/logo.png')} className="w-76 h-32" />

                <View className='mt-5'>

                    <View>
                        <Text className='text-2xl mb-5 text-primary font-semibold'>Register Here!</Text>
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