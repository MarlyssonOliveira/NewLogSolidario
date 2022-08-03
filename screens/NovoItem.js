import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, FAB } from "react-native-elements";


export default function NovoItem({ navigation }) {
  return (
    <View style={styles.content}>
      <View style={styles.title}>
        <FAB
          icon={{ name: "angle-left", type: "font-awesome", color: "#000" }}
          style={styles.backButton}
          buttonStyle={{ backgroundColor: "#1e90ff" }}
          size= 'small'
        />
        <Text h2>Novo Item</Text>
      </View>
      <View style={styles.inputs}>
        <Input placeholder="Nome" label={"Nome"} />
      </View>

      <View style={styles.buttons}>
        <Button title="Cadastrar" color="#1e90ff" />
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
      marginRight: 40,
      marginLeft: 20
    },
    title:{
      display: 'flex',
      flexDirection:"row",
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      height: '5%'
      
    },
    inputs: {
      display: 'flex',
      height: '60%',
      paddingHorizontal: '5%',
      justifyContent: 'space-evenly',
    },
    buttons: {
        width: '50%',
        alignSelf: 'center',
        bottom: 1,
    }
  });
  
