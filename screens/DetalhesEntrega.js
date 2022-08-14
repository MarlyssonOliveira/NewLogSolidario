import React, { useEffect, useState } from "react";
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
import axios from "axios";


export default function DetalhesEntrega({ navigation, route }) {
  const [getEntrega,setEntrega] = useState([])
  const [getBeneficiario,setBeneficiario] = useState()
  const [listItens, setListItens] = useState([])
  const [dataFormatada, setdataFormatada] = useState()
  const [getStatus, setStatus] = useState()

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  function consultaEntrega(){
    axios.get('http://192.168.0.106:8080/entrega/buscar', { params: { entregaId: route.params.idEntrega } })
    .then(function (response) {
      setEntrega(response.data);
      setBeneficiario(response.data.beneficiarios[0].nome)
      setListItens(response.data.itens)      
      setdataFormatada(formataData(response.data.data))
    })
    .catch(function (error) {
      console.log(error);
      console.log('Falha ao realizar a busca de usuario para registro em sessão')
    }); 
  }

  function alterarEntrega(){
    console.log(route.params.idEntrega)
    console.log(getStatus)
    axios.post('http://192.168.0.106:8080/entrega/alterar',{},{ params: { entregaID: route.params.idEntrega,status:getStatus} })
    .then(function (response) {
      toggleOverlay()
      consultaEntrega()
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
    consultaEntrega()
  },[])


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
          Codigo - <Text>{getEntrega.id}</Text>
        </Text>
        <Text style={styles.mainText}>
           Beneficiario - <Text>{getBeneficiario}</Text>  
        </Text>
        <Text style={styles.mainText}>
          Data - <Text>{dataFormatada}</Text>
        </Text>
        <Text style={styles.mainText}>
          Status - <Text style={{color: getEntrega.status == "CONCLUIDA"? "#0F0":"#aa0", fontWeight:"bold"}}>{getEntrega.status}</Text>
        </Text>
      </View>

      <View style={styles.AddItem}>
        <Button
          title="Alterar Status"
          color="#1e90ff"
          buttonStyle={{ backgroundColor: "#cc0", borderRadius: 50 }}
          onPress={toggleOverlay}
        />
      </View>

      <View style={styles.scrollItens}>
        <Text style={{ alignSelf: "center" }} h3>
          Itens da Entrega
        </Text>
        <ScrollView>
          {listItens.map((l) => (
            <ListItem key={l.id} bottomDivider>
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
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.overlayTitle}>
          <Text h4>Aletração de Status</Text>

          <RNPickerSelect
            onValueChange={(value) => setStatus(value)}
            placeholder={{ label: "Selecione um Status", value: "" }}
            items={[
              { label: "Concluido", value: "CONCLUIDA" },
              { label: "Em andamento", value: "ANDAMENTO" },
            ]}
          />
        </View>
        <View style={styles.buttons}>
          <Button title="Alterar" color="#1e90ff" onPress={()=>alterarEntrega()}/>
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
    fontStyle: "italic",
  },
  overlayTitle: {
    width: 300,
  },
});
