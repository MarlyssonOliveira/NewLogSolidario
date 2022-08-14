import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import axios from "axios";

export default function Estoque({ navigation, route }) {


  const [getEstoque, setEstoque] = useState([]);


  const consultarDadosEstoque = () => {

    axios.get('http://192.168.0.106:8080/estoque/listar?', { params: { usuarioId: global.sessionID } })
    .then(function (response) {
      setEstoque(response.data);
    }).catch(function (error) {
        console.log(error);
    
    });
}

useEffect(()=>{
  //chamada da função que synca os dados
  if(global.sessionID != ""){
    consultarDadosEstoque()
  }
},[getEstoque])


  return (
    <>
      <View style={styles.content}>
        <View>
          <ScrollView>
            {getEstoque.map((l, i) => (
              <ListItem key={l.id} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{l.nome}</ListItem.Title>
                  <ListItem.Subtitle>Quantidade em estoque: {l.quantidade}</ListItem.Subtitle>
                </ListItem.Content>
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
