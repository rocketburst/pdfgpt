import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  return (
    // TODO: change background to gradient
    <SafeAreaView className='bg-[#21162b] h-full'>
      <View className='flex-1 items-center justify-between pt-3 px-10'>
        <Text className='text-white font-semibold text-base'>pdfgpt.</Text>

        <View className='space-y-4'>
          <View className='space-y-3'>
            <Text className='text-6xl text-white tracking-wide'>Chat with</Text>
            <Text className='text-6xl text-white tracking-wide'>your PDF</Text>
            <Text className='text-6xl text-white tracking-wide font-bold'>
              in seconds
            </Text>
          </View>

          <Text className='text-[#B9C1BE] leading-6'>
            PDFGPT allows you to have conversations with any PDF document.
            Simply upload your file and start asking!
          </Text>
        </View>

        <View className='w-full space-y-10'>
          <View className='flex-row'>
            <TouchableOpacity
              className='bg-white rounded-full flex-1 py-3 shadow-md'
              onPress={() => router.push('/sign-up')}
            >
              <Text className='text-black text-lg font-semibold text-center'>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View className='flex-row gap-1.5 justify-center pb-6'>
            <Text className='text-[#B9C1BE] text-center'>
              Existing Account?
            </Text>

            <Link href='/sign-in' className='text-white font-semibold'>
              Log In
            </Link>
          </View>
        </View>
      </View>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}
