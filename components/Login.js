import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.app}>
      <Image
        source={require('./../src/logo/Logo_ValiantForce.png')}
        style={styles.logo}
      />
      <View style={styles.line}>
        <Text>UserName</Text>
        <TextInput editable maxLength={20} style={styles.edit} />
      </View>
      <View style={styles.line}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          editable
          maxLength={20}
          style={styles.edit}
        />
      </View>
      <View style={styles.login}>
        <Button
          title="Connexion"
          onPress={() => navigation.navigate('Menu', {name: 'Théo'})}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 20,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    width: 100,
  },
  login: {
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  paragraphe: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Login;
