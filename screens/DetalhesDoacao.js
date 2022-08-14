import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Input, Text, FAB, ListItem } from "react-native-elements";
import axios from "axios";

export default function DetalhesDoacao({ navigation, route }) {
  const [getDoacao,setDoacao] = useState([])
  const [listItens, setListItens] = useState([])
  const [dataFormatada, setdataFormatada] = useState()

  function consultadoacao(){
    axios.get('http://192.168.0.106:8080/doacao/buscar', { params: { doacaoId: route.params.idDoacao } })
    .then(function (response) {
      setDoacao(response.data);
      setListItens(response.data.itens)
      setdataFormatada(formataData(response.data.data))
    })
    .catch(function (error) {
      console.log(error);
      console.log('Falha ao realizar a busca de usuario para registro em sessão')
    }); 
  }

  function formataData(data){
    let ano = data[0]
    let dia = data[2]
    let mes = data[1].length > 1 ? data[1] : "0" + data[1]
    const novaData = dia+"/"+mes+"/"+ano
    return novaData;
  }
  useEffect(() =>{
    consultadoacao()
  },[])
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
        <Text h2>Doação</Text>
      </View>
      <View>
        <Text style={styles.mainText}>Codigo - <Text>{getDoacao.id}</Text></Text>
        <Text style={styles.mainText}>Doador - <Text>{getDoacao.nomeDoador}</Text></Text>
        <Text style={styles.mainText}>Data - <Text>{dataFormatada}</Text></Text>
      </View>

      <View style={styles.scrollItens}>
        <Text style={{ alignSelf: "center" }} h2>
          Itens da Doação
        </Text>
        <ScrollView>
          {listItens.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{l.nome}</ListItem.Title>
                <ListItem.Subtitle>
                  Quantidade: {l.quantidade}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
        <View>
          <Text style={styles.footerText}>
            Total de Itens - <Text style={styles.subText}>{getDoacao.totalDeItens}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingHorizontal: "5%",
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
    paddingHorizontal: "5%",
    justifyContent: "space-between",
  },
  buttons: {
    width: "50%",
    alignSelf: "center",
    bottom: 1,
  },
  scrollItens: {
    height: "50%",
    maxHeight: "50%",
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  footerText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
});
