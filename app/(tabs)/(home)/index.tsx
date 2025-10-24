import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Link href={"../(onboarding)"}>Go to Onboarding</Link>
      <Link href={"../(onboarding)/preferences"}>Go to preferences</Link>
    </SafeAreaView>
  )
}

export default index