import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [getBeneficiarioEntrega, setBeneficiarioEntrega] = useState();
  const [getBeneficiariosEntrega, setBeneficiariosEntrega] = useState([]);
  const [getBeneficiarios, setBeneficiarios] = useState([]);
  const [getEstoque, setEstoque] = useState([]);
  const [getNomeItem, setNomeItem] = useState();
  const [getQuantidadeItem, setQuantidadeItem] = useState();
  const [getQuantidadeFiltro, setQuantidadeFiltro] = useState();
  const [getCEPB, setCEPB] = useState();
  const [getNumeroB, setNumeroB] = useState();
  const [getTelefoneB, setTelefoneB] = useState();
  const [getNomeB, setNomeB] = useState();
  const [getEmailB, setEmailB] = useState();
  const [getListaItens, setListaItens] = useState([]);
  const item = React.createRef();
  const quantidade = React.createRef();

  const adicionaItem = () =>{
    getListaItens.push({
      "nome": getNomeItem,
      "quantidade": getQuantidadeItem
    });

    setQuantidadeItem('')
    quantidade.current.clear()
    setNomeItem("")
  }
  function carregaBeneficiarios(){
    axios.get('http://192.168.0.106:8080/beneficiario')
    .then((response) => {
      setBeneficiarios(response.data)
    })
    .catch(function (error) {
      console.log('Erro ao listar beneficiarios')
    });
  }

  const carregaItensEstoque = () => {
    axios.get('http://192.168.0.106:8080/estoque/listar',{params: { usuarioId: global.sessionID }})
    .then((response) => {
      setEstoque(response.data)
    })
    .catch(function (error) {
      console.log('Erro ao listar itens')
    });

  }

  function atribuiBeneficiario(valor){
    if(valor != ""){
      getBeneficiariosEntrega.push({"id":valor})
    }
  }

  const cadastraEntrega = () => {
    const dataList = JSON.stringify({itens:getListaItens , beneficiarios: getBeneficiariosEntrega})
    axios.post('http://192.168.0.106:8080/entrega/criar',dataList,{params: { usuarioId: global.sessionID }, headers:{'Content-Type': 'application/json'}})
      .then(function (response) {
        navigation.goBack();
      })
      .catch(function (error) {
        console.log(error);
        console.log('Entrega não cadastrada')
      });
  }

  const cadastraBeneficiario = async () => {
    const dataList = JSON.stringify({nome:getNomeB , telefone: getTelefoneB, email: getEmailB,cep:getCEPB,numero:getNumeroB})
    axios.post('http://192.168.0.106:8080/beneficiario',dataList,{headers:{'Content-Type': 'application/json'}})
      .then(function (response) {
        carregaBeneficiarios()
        toggleOverlay()
      })
      .catch(function (error) {
        console.log(error);
        console.log('Beneficiario não cadastrado')
      });
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(()=>{
    carregaBeneficiarios()
    carregaItensEstoque()
  },[])

  function salvaItemEQuantidadeFiltro(nomeItem){
    const item = getEstoque.find((item) => item.nome == nomeItem)
    if(item != undefined){
      console.log(item.quantidade)
      setQuantidadeFiltro(item.quantidade)
      setNomeItem(nomeItem)
    }
  }

  function trataQuantidadeFiltro(valor){
    const valorFiltro = getQuantidadeFiltro;
    console.log(valorFiltro)
    if(valorFiltro < valor){
      quantidade.current.setNativeProps({ value: valorFiltro });
      valor = valorFiltro
      setQuantidadeItem(valor)
    }else if(valor == 0){
      quantidade.current.setNativeProps({ value: 1 });
      valor = 1;
      setQuantidadeItem(valor)
    }else{
      setQuantidadeItem(valor)
    }
  }

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
          onValueChange={(value) => atribuiBeneficiario(value)}
          placeholder= {{ label: "Selecione um Beneficiario", value: "" }}
          items={
            getBeneficiarios.map((l) => (
            { label: l.nome, value: l.id }
            ))
          }
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
          ref={item}
          onValueChange={(value) => {salvaItemEQuantidadeFiltro(value)}}
          placeholder= {{ label: "Selecione um Item", value: ""}}
          items={
            getEstoque.map((l) => (
            { label: l.nome, value: l.nome }
            ))
          }
        />
          <Input ref={quantidade} placeholder="Quantidade" keyboardType="numeric" label={"Quantidade"} onChangeText={(text) => trataQuantidadeFiltro(text)} onFocus={() => {quantidade.current.clear()}}/>
        </View>
        <View style={styles.AddItem}>
          <Button
            title="Adicionar Item"
            color="#1e90ff"
            onPress={() => adicionaItem()}
            buttonStyle={{ backgroundColor: "#00ff00", borderRadius: 50 }}
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
        <Button title="Finalizar Entrega" color="#1e90ff" onPress={() => cadastraEntrega()}/>
      </View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <View style={styles.overlayTitle}>
          <Text h4>Novo Beneficiario</Text>
        </View>
        <View style={styles.inputs}>
          <Input placeholder="Nome" label={"Nome"} onChangeText={(text) => setNomeB(text)}/>

          <Input placeholder="Cep" label={"Cep"} onChangeText={(text) => setCEPB(text)}/>

          <Input placeholder="Número" label={"Número"}  onChangeText={(text) => setNumeroB(text)} />

          <Input placeholder="Email" label={"Email"}  onChangeText={(text) => setEmailB(text)} />

          <Input placeholder="Telefone" label={"Telefone"} onChangeText={(text) => setTelefoneB(text)}/>
        </View>

        <View style={styles.buttons}>
          <Button title="Cadastrar" color="#1e90ff" onPress={() => cadastraBeneficiario()}/>
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
