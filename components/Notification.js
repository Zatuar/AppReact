import React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';

const Notifications = ({navigation}) => {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.page}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 20,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Notifications;
