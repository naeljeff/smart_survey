import { View } from 'react-native'
import React from 'react'
import HomepageNavigationButton from '../../atoms/HomepageNavigationButton'

const HomepageBodyMenu = () => {
  return (
    <View className='flex-1 flex-row justify-between items-start p-10'>
      {/* Navigation Button */}
      {/* Survey Penutupan */}
      <HomepageNavigationButton title={'Survey Penutupan'} icon={'event-note'} onPress={() => {}}/>

      {/* Surveyor */}
      <HomepageNavigationButton title={'Survey Penutupan'} icon={'home'} onPress={() => {}}/>

      {/* Supervisor */}
      <HomepageNavigationButton title={'Survey Penutupan'} icon={'home'} onPress={() => {}}/>
    </View>
  )
}

export default HomepageBodyMenu
