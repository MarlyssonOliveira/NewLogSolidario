import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

export default function Doacoes() {
  const navigation = useNavigation(); 
  const [getDoacoes, setDoacoes] = useState([]);
  
  const consultarDadosDoacoes = () => {

    axios.get('http://192.168.0.106:8080/doacao?', { params: { usuarioId: global.sessionID } })
    .then(function (response) {
        setDoacoes(response.data);
    }).catch(function (error) {
        console.log(error);
    
    });
}


useEffect(()=>{
    //chamada da função que synca os dados
    if(global.sessionID != ""){
      consultarDadosDoacoes()
    }
  },[getDoacoes])



  return (
    <>
      <View style={styles.content}>
        <View>
          <ScrollView>
            {
              getDoacoes.map((l) => (
              <ListItem bottomDivider onPress={()=>navigation.navigate('DetalhesDoacao',{idDoacao: l.id})} key={l.id}>
                <ListItem.Content>
                  <ListItem.Title>Doacao {(l.id)+ "" + (l.data[2]+l.data[1]+l.data[0])}</ListItem.Title>
                  <ListItem.Subtitle>Data - {l.data[2] + (l.data[1].length > 1 ? "/" : "/0") + l.data[1] + "/" + l.data[0]} - {l.totalDeItens} Itens doados</ListItem.Subtitle>
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
