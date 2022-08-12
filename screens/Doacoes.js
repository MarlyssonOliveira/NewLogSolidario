import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export default function Doacoes() {
  const navigation = useNavigation(); 

  const pressDetalhe = () => {
    navigation.navigate("DetalhesDoacao")
  }
  const [getDoacoes, setDoacoes] = useState([]);

  const sessionId = async () => {
    try {
      return await AsyncStorage.getItem('@session_key')
    } catch(e) {
      // error reading value
    }
  }

  function consultarDadosDoacoes(){

    axios.get('http://192.168.0.115:8080/doacao?', { params: { usuarioId: 4 } })
    .then(function (response) {
      console.log(response.data)
        setDoacoes(response.data);
    }).catch(function (error) {
        console.log(error);
    
    });
}

  useState(()=>{
    //chamada da função que synca os dados
    consultarDadosDoacoes()
  },[getDoacoes])



  return (
    <>
      <View style={styles.content}>
        <View>
          <ScrollView>
            {getDoacoes.map((l, i) => (
              <ListItem key={i}  onPress={pressDetalhe} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{l.nomeDoador}</ListItem.Title>
                  <ListItem.Subtitle>Data {l.data} - {l.totalDeItens} Itens doados</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron color="black" />
              </ListItem>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    height: "100%",
  },
});
