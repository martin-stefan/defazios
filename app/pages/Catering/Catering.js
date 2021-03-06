import React, { useState } from 'react';
import { Link } from 'react-router-native';
import { Text, View, SafeAreaView, ScrollView, Button } from 'react-native';

import * as Haptics from 'expo-haptics';
import HomeButton from '../../components/HomeButton/HomeButton';
import styles from './Catering.style';


const Catering = () => {

  const [isOrdering, setIsOrdering] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <HomeButton />
      </View>
      <View style={styles.cateringContainer}>

        <View style={styles.viewForPreView}>

          {/* <Text style={styles.titleForPreView}>Previous Orders</Text>
          <ScrollView style={styles.scrollviewForPreView}>
            <View style={styles.preOrderBtn}>
              <Text style={styles.textInsidePreOrderBtn}>October 24, 2021</Text>
              <Button title="Details" onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}/>
            </View>

            <View style={styles.preOrderBtn}>
              <Text style={styles.textInsidePreOrderBtn}>September 16, 2021</Text>
              <Button title="Details" onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}/>
            </View>
          </ScrollView> */}
          <Text style={styles.textInsidePreOrderBtn}>Want to have DeFazio's at your next event? Choose your meal and create your order now!</Text>
          <View style={styles.viewForOrderBtn}>
            <Link to={{pathname:"/menu", state: {type: "cateringMenu", createOrder: true, currentOrder: []}}} style={styles.orderBtn} onPress={() => {setIsOrdering(true); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
              <Text style={styles.textInsideOrderBtn}>Create New Catering Order</Text>
            </Link>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Catering;
