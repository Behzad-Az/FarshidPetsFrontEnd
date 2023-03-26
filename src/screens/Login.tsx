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

const Login: FC<Props> = ({ navigation }) : JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Text>Login Screen</Text>
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text>Go to Register</Text>
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

export default Login;