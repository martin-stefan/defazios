import React from 'react';
import styles from './Reservation.style';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import * as Haptics from 'expo-haptics';
import HomeButton from '../../components/HomeButton/HomeButton';

const Reservation = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.pageContent}>

        <View style={styles.header}>
          <HomeButton />
        </View>

        <View style={styles.viewForPreView}>
          {/* <Text style={styles.titleForPreView}>
            Previous Orders
          </Text>
          <ScrollView style={styles.scrollviewForPreView}>

            <View style={styles.preOrderBtn}>
              <Text style={styles.textInsidePreOrderBtn}>
                October 24, 2021
              </Text>
              <Button title="Details" onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}/>
            </View>

            <View style={styles.preOrderBtn}>
              <Text style={styles.textInsidePreOrderBtn}>
                September 16, 2021
              </Text>
              <Button title="Details" onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}/>
            </View>

          </ScrollView> */}
          <Text style={styles.textInsidePreOrderBtn}>Want to schedule a time to eat at the DeFazio's Garden? Choose a time and reserve now!</Text>

          <View style={styles.viewForOrderBtn}>    
            <Link to={{pathname:"/resinfo", state: {type: "calendar"}}} style={styles.orderBtn} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
              <Text style={styles.textInsideOrderBtn}>
                Create New Reservation 
              </Text>
            </Link>
          </View>
        </View>


      </View>
    </SafeAreaView>
  )
}

export default Reservation;
