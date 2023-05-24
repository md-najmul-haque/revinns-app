import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <View className='mx-5'>
                <Image source={require('../assets/logo.png')} className="w-76 h-32" />


                <Text className='text-2xl mb-5 text-primary font-semibold'>Welcome Back!</Text>

                <View>
                    <TextInput
                        className='bg-white border border-gray-300 h-10 rounded-md p-2 mb-4'
                        placeholder="User Name"
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        className='bg-white border border-gray-300 h-10 rounded-md p-2 mb-4'
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

                    <Button title="Login" onPress={handleLogin} />
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