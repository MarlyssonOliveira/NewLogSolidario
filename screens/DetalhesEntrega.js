import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Input,
  Text,
  FAB,
  ListItem,
  Overlay,
} from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

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

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [visible, setVisible] = useState(false);
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
        <Text h2>Entrega</Text>
      </View>
      <View>
        <Text style={styles.mainText}>
          Codigo - <Text>01</Text>
        </Text>
        <Text style={styles.mainText}>
          Beneficiario - <Text>Associação tal tal</Text>
        </Text>
        <Text style={styles.mainText}>
          Data - <Text>18/05/2022</Text>
        </Text>
        <Text style={styles.mainText}>
          Status - <Text style={styles.statusText}>Em andamento</Text>
        </Text>
      </View>

      <View style={styles.AddItem}>
        <Button
          title="Alterar Status"
          color="#1e90ff"
          buttonStyle={{ backgroundColor: "#cc0", borderRadius: 50 }}
        />
      </View>

      <View style={styles.scrollItens}>
        <Text style={{ alignSelf: "center" }} h3>
          Itens da Entrega
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
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.overlayTitle}>
          <Text h4>Aletração de Status</Text>

          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder={{ label: "Selecione um Status", value: null }}
            items={[
              { label: "Concluido", value: "Concluido" },
              { label: "Em transporte", value: "transporte" },
              { label: "Em separação", value: "separação" },
            ]}
          />
        </View>
        <View style={styles.buttons}>
          <Button title="Alterar" color="#1e90ff" />
        </View>
      </Overlay>
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
    height: "40%",
    maxHeight: "40%",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  AddItem: {
    alignSelf: "center",
    width: "40%",
  },
  statusText: {
    fontWeight: "bold",
    color: "#aa0",
    fontStyle: "italic",
  },
  overlayTitle: {
    width: 300,
  },
});
