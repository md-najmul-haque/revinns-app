import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useToken = async () => {
    const [loader, setLoader] = useState(false);
    const token = await AsyncStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            setLoader(true)
        }
    }, [token, loader])

    return [token, loader]
}

export default useToken