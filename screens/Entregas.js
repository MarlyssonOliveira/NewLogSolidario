import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

export default function Entregas() {
  const navigation = useNavigation(); 

  const pressDetalhe = () => {
    navigation.navigate("DetalhesEntrega")
  }
  
  let list = [
    {
      name: "Entrega 01",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 02",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 03",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 04",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 05",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 06",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 07",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 08",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 09",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 10",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 11",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
    {
      name: "Entrega 12",
      data: "18/05/2000",
      Destino: "Dois Carneiros",
    },
  ];

  return (
    <>
      <View style={styles.content}>
        <View>
          <ScrollView>
            {list.map((l, i) => (
              <ListItem key={i} bottomDivider onPress={pressDetalhe}>
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>Data {l.data} - {l.Destino}</ListItem.Subtitle>
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
