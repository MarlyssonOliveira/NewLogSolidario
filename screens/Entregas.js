import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

export default function Entregas() {
  const navigation = useNavigation(); 

  const [getEntregas, setEntregas] = useState([]);

  const consultarDadosEntregas =  () =>{

    axios.get('http://192.168.0.106:8080/entrega?', { params: { usuarioId: global.sessionID } })
    .then(function (response) {
      setEntregas(response.data);
    }).catch(function (error) {
        console.log(error);
    
    });
}

useEffect(()=>{
    //chamada da função que syincroniza os dados
    if(global.sessionID != ""){
      consultarDadosEntregas()
    }
  },[getEntregas])

  return (
    <>
      <View style={styles.content}>
        <View>
          <ScrollView>
            {
              getEntregas.map((l) => (
              <ListItem key={l.id} bottomDivider onPress={()=>navigation.navigate('DetalhesEntrega',{idEntrega: l.id})}>
                <ListItem.Content>
                <ListItem.Title>Entrega {(l.id)+ "" + (l.data[2]+l.data[1]+l.data[0])}</ListItem.Title>
                  <ListItem.Subtitle>Data - {l.data[2] + (l.data[1].length > 1 ? "/" : "/0") + l.data[1] + "/" + l.data[0]} - Recebido por: {l.beneficiarios[0].nome}</ListItem.Subtitle>
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
