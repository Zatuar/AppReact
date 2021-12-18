import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const Heroes = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getHeroesFromAPI = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Zatuar/AppReact/main/data.json',
      );
      const json = await response.json();
      setData(json.heroes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHeroesFromAPI();
  }, []);
  return (
    <SafeAreaView style={styles.app}>
      <ImageBackground
        source={require('./../src/banner/headerL.jpg')}
        imageStyle={{borderRadius: 8}}>
        <View style={styles.banner}>
          <Image
            source={require('./../src/logo/Logo_ValiantForce.png')}
            style={styles.logo}
          />
        </View>
      </ImageBackground>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({name}) => name}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('InfoHero', {index, item})}
                style={styles.line}>
                <SharedElement id={`${index}.icon`}>
                  <Image source={{uri: item.icone}} style={styles.icon} />
                </SharedElement>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  banner: {
    height: 200,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 5,
  },
  line: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 8,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    alignItems: 'center',
    borderBottomWidth: 2,
  },
});
export default Heroes;
