import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, Platform } from 'react-native';
import ParkingPlace from '../../components/ParkingPlace'
import NewParkingSpaceButton from '../../components/NewParkingSpaceButton';
import HomeScreenButtons from '../../components/HomeScreenButtons';
import HomeScreenTopPanel from '../../components/HomeScreenTopPanel';
import React from 'react';
import styles from './style';

const HomeScreen = ({ navigation }) => {
  
    return (
      <View style={styles.container}>
        <HomeScreenTopPanel/>
        {/* <ScrollView style = {styles.scrollView}>
            <View style={styles.parkingPlaces}>
              <ParkingPlace isAvaliable = 'true' placeNumber = '1' placeAddress = 'Shevchenka 10'/>
              <ParkingPlace placeNumber = '2' placeAddress = 'Shevchenka 11'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '3' placeAddress = 'Shevchenka 12'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '4' placeAddress = 'Shevchenka 13'/>
              
              <ParkingPlace isAvaliable = 'true' placeNumber = '5' placeAddress = 'Shevchenka 14'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '6' placeAddress = 'Shevchenka 15'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '7' placeAddress = 'Shevchenka 16'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '8' placeAddress = 'Shevchenka 17'/>
              <ParkingPlace placeNumber = '9' placeAddress = 'Shevchenka 18'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '10' placeAddress = 'Shevchenka 19'/>
              <NewParkingSpaceButton/>
            </View>
          </ScrollView> */}
          <View style={styles.homeScreenButtons}>
            <HomeScreenButtons/>
          </View>
          
        <StatusBar style="auto" />
      </View>
    );
  };
  
export default HomeScreen;