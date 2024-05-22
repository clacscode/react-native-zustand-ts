import { NavigationContainer } from '@react-navigation/native'
import { BottomTapsNavigator } from './presentation/routes/BottomTapsNavigator'

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTapsNavigator></BottomTapsNavigator>
    </NavigationContainer>
  )
}
