import { Pressable, Text } from "react-native"
import { styles } from "../../config/app-theme"

interface Props {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
}


export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      style={styles.primaryButton}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text>{label}</Text>
    </Pressable>
  )
}
