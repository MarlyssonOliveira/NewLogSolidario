import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, FAB, Avatar } from "react-native-elements";

export default function Login({ navigation }) {
  const pressCadastrar = () => {
    navigation.navigate("Cadastro");
  };

  const pressLogar = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.content}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "30%",
        }}
      >
        <Avatar
          size={120}
          rounded
          icon={{ name: "user", type: "font-awesome", color: "#000" }}
          iconStyle={styles.icon}
        />
        <Text>Faça login para continuar</Text>
      </View>
      <View style={styles.inputs}>
        <Input placeholder="Email" label={"Email"} />
        <Input placeholder="Senha" label={"Senha"} secureTextEntry={true} />
      </View>
      <View style={styles.buttons}>
        <Button title="Login" onPress={pressLogar} />
      </View>
      <View>
        <Text>Não possui uma conta?</Text>
        <Button
          title="Cadastre-se"
          onPress={pressCadastrar}
          buttonStyle={{ backgroundColor: "#cecece" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 40,
  },
  icon: {
    backgroundColor: "#cecece",
    padding: 10,
    borderRadius: 50,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    width: "90%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttons: {
    width: "70%",
    alignSelf: "center",
  },
});
