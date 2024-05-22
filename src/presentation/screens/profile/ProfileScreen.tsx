import { Text, View } from 'react-native'
import { styles } from '../../../config/app-theme';
import { userProfileStore, counterStore } from '../../store/'
import { PrimaryButton } from '../../components';

export const ProfileScreen = () => {

  const name = userProfileStore(state => state.name);
  const email = userProfileStore(state => state.email);
  const changeProfile = userProfileStore(state => state.changeProfile);
  const count = counterStore(state => state.count);

  const onPress = () => {
    changeProfile('Claudio S.', 'csepulveda@code.com')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>{count}</Text>


      <PrimaryButton label='Change profile' onPress={onPress} />

    </View>
  )
}
