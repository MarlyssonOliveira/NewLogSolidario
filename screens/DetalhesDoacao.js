import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Input, Text, FAB, ListItem } from "react-native-elements";

export default function DetalhesDoacao({ navigation }) {
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
        <Text h2>Doação</Text>
      </View>
      <View>
        <Text style={styles.mainText}>Codigo - <Text>01</Text></Text>
        <Text style={styles.mainText}>Doador - <Text>Fulano</Text></Text>
        <Text style={styles.mainText}>Data - <Text>18/05/2022</Text></Text>
      </View>

      <View style={styles.scrollItens}>
        <Text style={{ alignSelf: "center" }} h2>
          Itens da Doação
        </Text>
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
        <View>
          <Text style={styles.footerText}>
            Total de Itens - <Text style={styles.subText}>68</Text>
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
