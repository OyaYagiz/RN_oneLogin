import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Animated,  {FadeInUp, FadeInDown} from 'react-native-reanimated';


const LoginScreen = () => {

const navigation= useNavigation();

return (
<View className="bg-white h-full w-full ">
  <StatusBar  barStyle="light-content"/>
  <Image className=" h-3/4 w-full" 
  source={require("../../assets/images/bgimage.png")}/>
  <View className="absolute flex-row justify-around w-full">
    <Animated.Image 
    entering={FadeInUp.duration(1000).delay(200).springify()}
    className="h-[225] w-[90]"
    source={require('../../assets/images/light.png')}/>

    <Animated.Image 
    entering={FadeInUp.duration(1000).delay(300).springify()}
    className="h-[160] w-[65]"
    source={require('../../assets/images/light.png')}/>
  </View>
  
  <View className=" flex h-full w-full  pb-1">
  <View className= " flex items-center mt-[-440px]">
    <Animated.Text
    entering={FadeInUp.duration(1000).springify()}
    className=" absolute text-5xl font-bold tracking-wider  text-white ">
     Login
    </Animated.Text>
  </View>

    <View className="flex items-center mx-4 mt-80 space-y-4">

      <Animated.View 
      entering={FadeInDown.duration(1000).springify()}
      className="w-full bg-black/5 p-5  rounded-2xl">
      <TextInput placeholder='E-mail' placeholderTextColor={'#514f4f'}/>
      </Animated.View>

      <Animated.View 
      entering={FadeInDown.duration(1000).delay(200).springify()}
      className="w-full bg-black/5 p-5 rounded-2xl">
      <TextInput placeholder='Password' placeholderTextColor={'#514f4f'}
      secureTextEntry/>
      </Animated.View>

        <Animated.View 
      entering={FadeInDown.duration(1000).delay(400).springify()}
        className="w-full">
          <TouchableOpacity className="w-full p-3 bg-[#c10300] rounded-2xl mb-3">
            <Text className="text-2xl font-bold text-center text-white">Login</Text>
          </TouchableOpacity>
        </Animated.View>

      <Animated.View 
      entering={FadeInDown.duration(1000).delay(600).springify()}
        className="flex-row justify-center">
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.push('SignUp')}>
          <Text className="text-[#c10300]"> SignUp</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  </View>
</View>

);

};

export default LoginScreen;