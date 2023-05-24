import { View, Text, Button } from 'react-native'
import React from 'react'

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>

            <Button
                title="Styled Button"
                onPress={() => {
                    // Handle button press
                }}
                buttonStyle={{
                    backgroundColor: 'red',
                    borderRadius: 8,
                    padding: 10,
                }}
            />
        </View>
    )
}

export default SignIn