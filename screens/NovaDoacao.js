import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Input,
  Text,
  FAB,
  ListItem,
  Divider,
} from "react-native-elements";
import axios from "axios";

export default function NovaDoacao({ navigation }) {
  const [getDoador, setDoador] = useState();
  const [getNomeItem, setNomeItem] = useState();
  const [getQuantidadeItem, setQuantidadeItem] = useState();
  const [getListaItens, setListaItens] = useState([]);
  const item = React.createRef();
  const quantidade = React.createRef();


  const adicionaItem = () =>{
    getListaItens.push({
      "nome": getNomeItem,
      "quantidade": getQuantidadeItem
    });

    setNomeItem('')
    setQuantidadeItem('')
    item.current.clear()
    quantidade.current.clear()

  }

  const cadastraDoacao = () =>{
    const dataList = JSON.stringify({nomeDoador:getDoador, itens:getListaItens})
    axios.post('http://192.168.0.106:8080/doacao/criar',dataList,{params: { id: global.sessionID }, headers:{'Content-Type': 'application/json'}})
      .then(function (response) {
        navigation.goBack();
      })
      .catch(function (error) {
        console.log(error);
        console.log('Doacao não cadastrada')
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
        <Text h2>Nova Doação</Text>
      </View>
      <View style={styles.inputs}>
        <Input placeholder="Doador" label={"Doador"} onChangeText={(text) => setDoador(text)} />
        <View style={styles.inputItens}>
          <Input ref={item} placeholder="Item" label={"Item"}  onChangeText={(text) => setNomeItem(text)}/>
          <Input ref={quantidade} placeholder="Quantidade" label={"Quantidade"} onChangeText={(text) => setQuantidadeItem(text)}/>
        </View>
          <View style={styles.AddButton}>
            <Button
              title="Adicionar Item"
              color="#1e90ff"
              buttonStyle={{ backgroundColor: "#00ff00" }}
              onPress={() => adicionaItem()}
            />
          </View>
      </View>
      <View style={styles.scrollItens}>
        <ScrollView>
          {getListaItens.map((l, i) => (
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
      </View>

      <View style={styles.buttons}>
        <Button title="Finalizar Doação" color="#1e90ff" onPress={() => cadastraDoacao()}/>
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
  buttons: {
    alignSelf: "center",
    width: "60%",
  },
  AddButton: {
    alignSelf: "center",
    width: "40%",
  },
  scrollItens: {
    maxHeight: "25%",
    paddingHorizontal: "5%",
  },
  inputs:{
    paddingHorizontal: "5%",
  },
  inputItens: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
});
