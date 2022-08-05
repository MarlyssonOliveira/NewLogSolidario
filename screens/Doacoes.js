import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";

export default function Doacoes({ navigation }) {
  let list = [
    {
      name: "Doação 01",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 02",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 03",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 04",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 05",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 06",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 07",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 08",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 09",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 10",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 11",
      data: "18/05/2000",
      totalItens: "182",
    },
    {
      name: "Doação 12",
      data: "18/05/2000",
      totalItens: "182",
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
                  <ListItem.Subtitle>Data {l.data} - {l.totalItens} Itens doados</ListItem.Subtitle>
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
