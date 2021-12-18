import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
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
            <Image source={{uri: item.icone}} style={styles.icon} />
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
          <Text>Histoire :</Text>
          <Text>{item.story}</Text>
          <Text>Artwork :</Text>
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
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 15,
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
