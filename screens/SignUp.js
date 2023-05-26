import React, { useState } from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const SignUp = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        // Perform login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
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
                            placeholder="User Name"
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

                        <Button title="Login" color='#ff6400' onPress={handleLogin} />

                        <Text className='mt-5 text-center'>Already have an account? <Text className='text-secondary font-semibold' onPress={() => navigation.navigate('SignIn')}>Sign In</Text> </Text>

                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default SignUp