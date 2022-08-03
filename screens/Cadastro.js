import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, FAB } from "react-native-elements";

export default function Cadastro({ navigation }) {
  const pressCadastrar = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.content}>
      <View style={styles.title}>
        <FAB icon={{ name: "angle-left", type:'font-awesome', color: "#000"}} style={styles.backButton} buttonStyle={{backgroundColor:'#1e90ff'}} size= 'small' />
        <Text h2>
          Cadastro
        </Text>
      </View>
      <View style={styles.inputs}>
        <Input placeholder="Nome/Razão Social" label={"Nome/Razão Social"} />

        <Input placeholder="Cpf/Cnpj" label={"CPF/CNPJ"} />

        <Input placeholder="Email" label={"Email"} />

        <Input placeholder="Senha" label={"Senha"} secureTextEntry={true} />
      </View>

      <View style={styles.buttons}>
        <Button title="Cadastrar" color="#1e90ff" onPress={pressCadastrar} />
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
    
  },
  inputs: {
    display: 'flex',
    height: '60%',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
  },
  buttons: {
      width: '50%',
      alignSelf: 'center',
      bottom: 1,
  }
});
