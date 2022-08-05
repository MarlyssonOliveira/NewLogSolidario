import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";

export default function Estoque({ navigation }) {
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
      name: "Carne de Soja",
      quantidade: "10",
    },
    {
      name: "Macarrao",
      quantidade: "10",
    },
    {
      name: "Açucar",
      quantidade: "10",
    },
    {
      name: "Bolacha",
      quantidade: "10",
    },
    {
      name: "Sabonete",
      quantidade: "10",
    },
    {
      name: "Creme Dental",
      quantidade: "10",
    },
    {
      name: "Fubá",
      quantidade: "10",
    },
    {
      name: "Leite",
      quantidade: "2",
    },
    {
      name: "Grão de bico",
      quantidade: "10",
    },
  ];

  return (
    <>
      <View style={styles.content}>
        <View>
          <ScrollView>
            {list.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
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
