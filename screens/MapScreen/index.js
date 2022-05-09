import styles from './style';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import { Platform, Text, View, Button } from 'react-native';
import React, {useState, useEffect} from 'react';

const MapScreen = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [customLatitude, setCustomLatitude] = useState(null);
  const [customLongitude, setCustomLongitude] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCustomLatitude(location.coords.latitude);
      setCustomLongitude(location.coords.longitude);
      setLocation(location);
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } 

  const navigation = useNavigation();
    return (
      
      <View style={styles.container}>
        <MapView 
        style={styles.map}
        initialRegion={{
          latitude: customLatitude,
          longitude: customLongitude,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }} 
        >
          {/* <Marker coordinate={{
            latitude: customLatitude,
            longitude: customLongitude
          }}
          pinColor='blue'>

          </Marker> */}
          <Marker coordinate={{
            latitude: 49.8455084,
            longitude: 24.0438791
            
          }}>
            <Callout onPress={() => navigation.navigate("PlaceRent")}>
              <View>
                <Text>Rent</Text>
              </View>
              
            </Callout>
          </Marker>

          <Marker coordinate={{
            latitude: 49.84070168963158,
            longitude: 24.051619718060728
          }}
          pinColor="green">
            <Callout onPress={() => navigation.navigate("PlaceRent")}>
              <Text>Rent</Text>
            </Callout>
          </Marker>
        </MapView>
        
        {/* <Button
            onPress = {() => navigation.navigate("Home")}
            title = "Home"
        /> */}

      </View>

      //<Text>{customLatitude}</Text>
    );
  };
  
export default MapScreen;


/*import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
//import styles from './style';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [customLatitude, setCustomLatitude] = useState(null);
  const [customLongitude, setCustomLongitude] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCustomLatitude(location.coords.latitude);
      setCustomLongitude(location.coords.longitude);
      setLocation(location);
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    
  }
  return (
    <View style={styles.container}>
      
      <Text>{text}</Text>
      <Text>{customLatitude}, {customLongitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
*/
