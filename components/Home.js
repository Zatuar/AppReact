import React from 'react';
import {StyleSheet, View, Button, SafeAreaView, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.app}>
      <View>
        <Text>Message de l'école</Text>
      </View>
      <View style={styles.nav}>
        <Button
          onPress={() => navigation.navigate('NotificationsFragment')}
          title="Go to notifications"
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
  nav: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
