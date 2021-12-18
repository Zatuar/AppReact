import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
  View,
} from 'react-native';

const zoomValue = new Animated.Value(1);

const Welcome = ({navigation}) => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(zoomValue, {
        toValue: 1.2,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(zoomValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]),
  ).start();
  return (
    <SafeAreaView style={styles.app}>
      <TouchableOpacity
        style={styles.app}
        onPress={() => navigation.navigate('Login')}>
        <ImageBackground
          source={require('./../src/background/background.jpg')}
          style={styles.background}>
          <View style={styles.bannerContainer}>
            <ImageBackground
              source={require('./../src/banner/b1.png')}
              style={styles.banner}>
              <Animated.Text style={styles.detail}>
                Press anywhere
              </Animated.Text>
            </ImageBackground>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  bannerContainer: {
    top: 550,
    width: '100%',
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  detail: {
    paddingHorizontal: 3,
    paddingVertical: 4,
    transform: [
      {
        scale: zoomValue.interpolate({
          inputRange: [1, 1.2],
          outputRange: [1, 1.2],
        }),
      },
    ],
  },
});
export default Welcome;
