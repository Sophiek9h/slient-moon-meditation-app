import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* Absolute image */}
      <Image 
        source={images.chairLady}
        className='w-full absolute top-0'
        resizeMode='cover'
      />

      {/* Title row on top of image */}
      <View className='flex flex-row justify-center items-center mt-4'>
        <Text className='font-cerealMedium text-xl tracking-widest'>Silent</Text>
        <Image 
            source={icons.logo}
            className='w-8 h-8 mx-2'
            resizeMode='contain'
        />
        <Text className='font-cerealMedium text-xl tracking-widest'>Moon</Text>
      </View>

      {/* Push bottom text below the image */}
      <View className='justify-center items-center py-28 mt-96'>
            <View>
                <Text className='text-2xl font-helveticaMedium text-center'>We are What We Do</Text>
                <Text className='font-helveticaThin text-base mt-4 text-center'>Thousand of people are using silent moon {'\n'}  for meditation</Text>
            </View>
    
            <View>
                <TouchableOpacity onPress={() => router.push("/signup")} className='bg-primaryBlue rounded-full px-40 py-6 mt-14 mb-4'>
                    <Text className='font-helveticaMedium text-white'>SIGN UP</Text>
                </TouchableOpacity>

                <View className='flex flex-row justify-center items-center gap-1 mt-1'>
                   <Text className='text-center text-sm font-helveticaThin'>ALREADY HAVE AN ACCOUNT?</Text>

                   <TouchableOpacity onPress={() => router.push("/signin")}>
                    <Text className='text-center text-sm font-helveticaThin text-primaryBlue'>LOG IN</Text>
                   </TouchableOpacity> 
                </View>
                 </View>
     </View>
    </SafeAreaView>
  )
}

export default index
