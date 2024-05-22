import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'

import { styles } from '../../../config/app-theme'
import { PrimaryButton } from '../../components'
import { counterStore } from '../../store/counter-store'

export const SettingsScreen = () => {

  const navigation = useNavigation();

  const count = counterStore(state => state.count);
  const incrementBy = counterStore(state => state.incrementBy);

  useEffect(() => {
    navigation.setOptions({
      title: count.toString()
    });
  }, [count])


  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>

      <PrimaryButton label={'+ 1'} onPress={() => { incrementBy(+1) }} />
      <PrimaryButton label={'- 1'} onPress={() => { incrementBy(-1) }} />
    </View>
  )
}
