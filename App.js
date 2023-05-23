import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View } from 'react-native';
import { Logo } from "./assets/logo.png"
import { Logo2 } from "./assets/2.png"

export default function App() {
  return (
    <View className="flex-1  bg-white">
      <View className="mt-5">
        <Image source={{ uri: 'https://i.ibb.co/gtB5sR9/logo.png' }}
          className="w-76 h-32" />
        <Text>Welcome to Revinns Ltd</Text>
        <View className='flex-row justify-center'>
          <Button
            onPress={() => { }}
            title="Sing In"
            className=""
          />
          <Button
            onPress={() => { }}
            title="Sign Up"
            className="bg-warning ml-3"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

