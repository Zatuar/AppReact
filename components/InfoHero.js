import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const InfoHero = props => {
  const {index, item} = props.route.params;
  console.log('id:', `${index}.icon`);
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.center}>
          <SharedElement id={`${index}.icon`}>
            <ImageBackground
              source={{uri: item.icone}}
              imageStyle={{borderRadius: 50}}
              style={styles.cadre}>
              <Image
                source={require('./../src/banner/b2.png')}
                style={styles.icon}
              />
            </ImageBackground>
          </SharedElement>
          <Text>
            {item.name}, {item.type}
          </Text>
        </View>
        <View style={styles.stats}>
          <Text>PV : {item.hp}</Text>
          <Text>DEF : {item.def}</Text>
          <Text>ATK : {item.atk}</Text>
          <Text>CRIT : {item.crit}</Text>
          <Text>MAG : {item.mag}</Text>
        </View>
        <View>
          <Text>Histoire :</Text>
          <Text>{item.story}</Text>
        </View>
        <Image source={{uri: item.picture}} style={styles.art} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 2,
  },
  cadre: {
    width: 100,
    height: 100,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  art: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
  },
  stats: {
    marginTop: 15,
  },
  center: {
    alignItems: 'center',
  },
});
export default InfoHero;
