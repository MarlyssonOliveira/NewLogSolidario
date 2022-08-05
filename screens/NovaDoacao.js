import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, FAB } from "react-native-elements";

export default function NovaDoacao({ navigation }) {
  return (
    <View style={styles.content}>
      <View style={styles.title}>
        <FAB icon={{ name: "angle-left", type:'font-awesome', color: "#000"}} onPress={()=>navigation.goBack()} style={styles.backButton} buttonStyle={{backgroundColor:'#1e90ff'}} size= 'small' />
        <Text h2>
          Nova Doação
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection:"column",
    justifyContent: "space-evenly",
  },
  backButton: {
    marginRight: 50,
    marginLeft: 20
  },
  title:{
    display: 'flex',
    flexDirection:"row",
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    height: '5%'
    
  }
});
