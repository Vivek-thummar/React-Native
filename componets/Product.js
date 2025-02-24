import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart,removeCart } from "./redux/action";
import { useSelector } from "react-redux";

const Product = (item) => {
    
    item = item.item;
    const dispatch = useDispatch();

    const [isAdded,setIsAdded] = useState(false);
    
    const cartItem = useSelector((state)=>state.reducer);

  

    useEffect(() => {
        let result = cartItem.filter((ele) => {  
            return ele.name === item.name;  
        });
    
        if (result.length) {
            setIsAdded(true);
        } else {
            setIsAdded(false);
        }
    }, [cartItem]);
    

    const handelRemovecart = () => {
        dispatch(removeCart(item.name));
    }
    
    const handelAddTocart = (item) => {
        dispatch(addToCart(item));
    }
  return (
    <View style={[styles.container,{alignItems:"center",borderBlockColor:'pink',borderWidth:2,margin:20,padding:10}]}>

              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
              {
                isAdded?
                <Button onPress={()=>handelRemovecart(item)} title="Remove cart"/>
                :
                <Button onPress={()=>handelAddTocart(item)} title="Add to cart"/>

              }
    </View>

  )
}

const styles = StyleSheet.create({
  container :{
    flex:1
  }
})

export default Product;