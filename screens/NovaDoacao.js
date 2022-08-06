import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Input,
  Text,
  FAB,
  ListItem,
  Divider,
} from "react-native-elements";

export default function NovaDoacao({ navigation }) {
  let list = [
    {
      name: "Sabão",
      quantidade: "10",
    },
    {
      name: "Feijao",
      quantidade: "10",
    },
    {
      name: "Arroz",
      quantidade: "10",
    },
    {
      name: "Sabão",
      quantidade: "10",
    },
    {
      name: "Feijao",
      quantidade: "10",
    },
    {
      name: "Arroz",
      quantidade: "10",
    },
    {
      name: "Sabão",
      quantidade: "10",
    },
    {
      name: "Feijao",
      quantidade: "10",
    },
    {
      name: "Arroz",
      quantidade: "10",
    },
    {
      name: "Sabão",
      quantidade: "10",
    },
    {
      name: "Feijao",
      quantidade: "10",
    },
    {
      name: "Arroz",
      quantidade: "10",
    },
  ];
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
        <Input placeholder="Doador" label={"Doador"} />
        <View style={styles.inputItens}>
          <Input placeholder="Item" label={"Item"} />
          <Input placeholder="Quantidade" label={"Quantidade"} />
        </View>
          <View style={styles.AddButton}>
            <Button
              title="Adicionar Item"
              color="#1e90ff"
              buttonStyle={{ backgroundColor: "#00ff00" }}
            />
          </View>
      </View>
      <View style={styles.scrollItens}>
        <ScrollView>
          {list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>
                  Quantidade: {l.quantidade}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </View>

      <View style={styles.buttons}>
        <Button title="Finalizar Doação" color="#1e90ff" />
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
