import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Input,
  Text,
  FAB,
  ListItem,
  Divider,
  Overlay,
} from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

export default function NovaEntrega({ navigation }) {
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
        <Text h2>Nova Entrega</Text>
      </View>
      <View style={styles.inputs}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          placeholder= {{ label: "Selecione um Beneficiario", value: null }}
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
        />
        <View style={styles.AddBeneficiario}>
          <Button
            title="Novo Beneficiario"
            color="#1e90ff"
            buttonStyle={{ borderRadius: 50 }}
            onPress={toggleOverlay}
          />
        </View>
        <View style={styles.inputItens}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          placeholder= {{ label: "Selecione um Item", value: null }}
          items={[
            { label: "Sabao", value: "Sabao" },
            { label: "Bolacha", value: "Bolacha" },
            { label: "Biscoito", value: "Biscoito" },
          ]}
        />
          <Input placeholder="Quantidade" keyboardType="numeric" label={"Quantidade"} />
        </View>
        <View style={styles.AddItem}>
          <Button
            title="Adicionar Item"
            color="#1e90ff"
            buttonStyle={{ backgroundColor: "#00ff00", borderRadius: 50 }}
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
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <View style={styles.overlayTitle}>
          <Text h4>Novo Beneficiario</Text>
        </View>
        <View style={styles.inputs}>
          <Input placeholder="Nome" label={"Nome"} />

          <Input placeholder="Cep" label={"Cep"} />

          <Input placeholder="Número" label={"Número"} />

          <Input placeholder="Telefone" label={"Telefone"} />
        </View>

        <View style={styles.buttons}>
          <Button title="Cadastrar" color="#1e90ff" />
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
  AddBeneficiario: {
    alignSelf: "center",
    width: "60%",
    marginBottom: 20,
  },
  AddItem: {
    alignSelf: "center",
    width: "40%",
  },
  scrollItens: {
    maxHeight: "25%",
    paddingHorizontal: "5%",
  },
  inputs: {
    paddingHorizontal: "5%",
  },
  inputItens: {
    display: "flex",
    alignItems: "center",
  },
  overlayTitle: {
    paddingHorizontal: "20%",
    marginBottom: 30,
  },
});
