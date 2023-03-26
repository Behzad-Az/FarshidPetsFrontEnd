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

const LoginScreen: FC<Props> = ({ navigation }) : JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Text>RegisterScreen</Text>
      <Pressable onPress={() => navigation.navigate('LoginScreen')}>
        <Text>Go to Login</Text>
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

export default LoginScreen;