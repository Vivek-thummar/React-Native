import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./componets/Header";
import Product from "./componets/Product";



const App = () => {
 
  const products = [
    {
      name : "Sumsung",
      price : 50000,
      image : "https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
    },
    {
      name : "Realme",
      price : 2000,
      image : "https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
    },
    {
      name : "Apple",
      price : 50000,
      image : "https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
    },
    {
      name : "Onepuls",
      price : 50000,
      image : "https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
    },
    {
      name : "Onepuls",
      price : 50000,
      image : "https://iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"
    }
  ]

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
      {
        products.map((item)=><Product item={item} />)
      }
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container :{
    flex:1
  }
})

export default App;