import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {

    const cardData = useSelector((state)=>state.reducer);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setCount(cardData.length)
    },[cardData])
  return (
    <View style={styles.header}>
    <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333", textAlign: "right", marginBottom: 10 , borderBottomColor:"black",borderBottomWidth:2,padding:10,backgroundColor:"orange"}}>
    {count}
    
  </Text>
  
  </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex:1
  }
})

export default Header;