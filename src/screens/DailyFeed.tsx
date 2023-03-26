import React, { FC } from 'react'
import {
  View, 
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

interface Props {
  navigation: any
}

const DailyFeed: FC<Props> = ({ navigation }) : JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Text>Daily Feed</Text>
      <Pressable onPress={() => null}>
        <Text>TBD</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DailyFeed;