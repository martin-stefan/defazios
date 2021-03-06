import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useLocation } from 'react-router-native';

import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import Payment from '../../components/Payment/Payment';
import Confirmation from '../../components/Confirmation/Confirmation';
import Schedule from '../../components/Schedule/Schedule';

import db from '../../firebase';

import styles from './CateringOrder.style';

const CateringOrder = () => {

  const location = useLocation();
  const items = location.state?.order;

  const [fullOrder, setFullOrder] = useState({});
  const [currentStep, setCurrentStep] = useState('cart');
  const [cartItems, setCartItems] = useState([...items]);


  useEffect(() => {
    setFullOrder(prevState => ({...prevState, items: items}))

  }, [])

  const setStepHandler = step => {
    setCurrentStep(step);
  }

  const addToFinalOrderHandler = (property, item) => {
    if (property == "info") {
      setFullOrder(prevState => ({...prevState, ...item}));
    } else {
      setFullOrder(prevState => ({...prevState, [property]: item}));
    }
    console.log(fullOrder);
  }

  const confirmOrderHandler = () => {
    const date = new Date();
    let newOrder = {...fullOrder, dateOrdered: date}
    db.collection('orders').add(newOrder)
  }

  const editItemHandler = (items) => {
    setCartItems([...items])
  }


  let content = null;

  if (currentStep === "cart") {
    content = <ShoppingCart items={cartItems} stepHandler={setStepHandler} addToFinal={addToFinalOrderHandler} editItems={editItemHandler}/>
  } else if (currentStep === "schedule") {
    content = <Schedule stepHandler={setStepHandler} setDate={addToFinalOrderHandler}/>
  } else if (currentStep === "info" ) {
    content = <OrderInfo stepHandler={setStepHandler} addToFinal={addToFinalOrderHandler}/>
  } else if (currentStep === "payment") {
    content = <Payment stepHandler={setStepHandler}/>
  } else if (currentStep === "confirm") {
    content = <Confirmation finalOrder={fullOrder} confirmOrder={confirmOrderHandler}/>
  }

  return (

    <View style={styles.orderContainer}>
      {content}
    </View>
  );

}

export default CateringOrder; 