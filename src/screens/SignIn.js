import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'
import Toast from 'react-native-toast-message';
import { Avatar, Caption } from "react-native-paper"

const SignIn = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {

        const user = {
            name: userName,
            password: password
        }

        // console.log(user)

        fetch(`http://192.168.0.226:5000/api/v1/login`, {
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
                    navigation.navigate('Dashboard')
                } else {
                    Toast.show({
                        type: 'error',
                        text2: data.message
                    })

                }
            })
    };

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };


    return (
        <SafeAreaView className="flex-1 justify-center items-center h-screen bg-white">
            <View className='mx-5'>
                <View className='flex-row justify-center items-center mt-2'>
                    <Avatar.Image size={40} className="" source={require('../assets/logo.jpg')} />
                    <Text className='text-2xl text-primary font-semibold text-center ml-2'>Bangladesh Multicare Hospital</Text>
                </View>

                <View className='mt-5'>


                    <Text className='text-2xl mb-5 text-primary text-center font-semibold'>Welcome Back!</Text>


                    <TextInput
                        className='bg-white border border-gray-300 h-10 rounded-md p-2 mb-4 min-w-full'
                        placeholder="User Name"
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput
                        className='bg-white border border-gray-300 h-10 rounded-md p-2 mb-4 min-w-full'
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={text => setPassword(text)}
                    />

                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity style={styles.checkbox} onPress={toggleRememberMe}>
                            {rememberMe ? (
                                <Text style={styles.checkboxText}>✓</Text>
                            ) : (
                                <Text style={styles.checkboxText}></Text>
                            )}
                        </TouchableOpacity>
                        <Text style={styles.label}>Remember Me</Text>
                    </View>

                    <Button title="Login" color='#ff6400' onPress={handleLogin} />

                    <Text className='mt-5 text-center'>Don't have an account? <Text className='text-secondary font-semibold' onPress={() => navigation.navigate('SignUp')}>Sign Up</Text> </Text>



                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
    },
});

export default SignIn