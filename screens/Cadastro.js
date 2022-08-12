import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text, FAB } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import axios from "axios";

export default function Cadastro({ navigation }) {
  const pressCadastrar = () => {
    cadastrarUsuario();
  };

  const [getSenha, setSenha] = useState();
  const [getEmail, setEmail] = useState();
  const [getNome, setNome] = useState();
  const [getCPF, setCPF] = useState();

  const firebaseConfig = {
    apiKey: "AIzaSyD6DuE49jwQLldV2riqNTDPsFCcJKwHzw8",
    authDomain: "logsolidario.firebaseapp.com",
    projectId: "logsolidario",
    storageBucket: "logsolidario.appspot.com",
    messagingSenderId: "793662551051",
    appId: "1:793662551051:web:1564fe2ec432e9e219c30e",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  function cadastrarUsuario() {
     createUserWithEmailAndPassword(auth, getEmail, getSenha)
      .then((userCredential) => {
        const user = userCredential.user;
        // Cadastra o Usuario no banco e em caso de sucesso direciona pro login
        // Adicionar toasters para informar o usuario
        CadastrarUsuarioBD()
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function CadastrarUsuarioBD() {
        
    axios.post('http://192.168.0.115:8080/usuario', {
        nome: getNome,
        email: getEmail,
        cpf: getCPF
      })
      .then(function (response) {
        console.log(response.config.data);
        console.log('Usuario cadastrado com sucesso na base de dados.')
        navigation.navigate("Login");
      })
      .catch(function (error) {
        console.log(error);
        console.log('Usuario não cadastrado')
      });     
    
}
  return (
    <View style={styles.content}>
      <View style={styles.title}>
        <FAB
          icon={{ name: "angle-left", type: "font-awesome", color: "#000" }}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          buttonStyle={{ backgroundColor: "#1e90ff" }}
          size="small"
        />
        <Text h2>Cadastro</Text>
      </View>
      <View style={styles.inputs}>
        <Input
          placeholder="Nome/Razão Social"
          onChangeText={(text) => setNome(text)}
          label={"Nome/Razão Social"}
        />

        <Input
          placeholder="Cpf/Cnpj"
          label={"CPF/CNPJ"}
          onChangeText={(text) => setCPF(text)}
        />

        <Input
          placeholder="Email"
          label={"Email"}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Senha"
          label={"Senha"}
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
        />
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
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  backButton: {
    marginRight: 50,
    marginLeft: 20,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    height: "5%",
  },
  inputs: {
    display: "flex",
    height: "60%",
    paddingHorizontal: "5%",
    justifyContent: "space-between",
  },
  buttons: {
    width: "50%",
    alignSelf: "center",
    bottom: 1,
  },
});
