import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Input,
  Text,
  FAB,
  Tab,
  TabView,
  Header,
  SpeedDial,
  ListItem,
  Icon,
} from "react-native-elements";
import Doacoes from "./Doacoes";
import Entregas from "./Entregas";
import Estoque from "./Estoque";

export default function Home({ navigation }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  let list = [
    {
        name: 'AAAAAAA',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    }
    ,
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    }
]

  return (
    <>
      <Header
        centerComponent={{
          text: "LogSolidario",
          style: { color: "#fff", fontSize: 20 },
        }}
        rightComponent={{ icon: "logout", color: "#fff", onPress:()=>navigation.navigate('Login')}}
      />
      <View style={styles.content}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: "white",
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Doações"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "heart", type: "font-awesome", color: "white" }}
          />
          <Tab.Item
            title="Entregas"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "truck", type: "font-awesome-5", color: "white" }}
          />
          <Tab.Item
            title="Estoque"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: "box", type: "font-awesome-5", color: "white" }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{width: "100%" }}>
            <Doacoes></Doacoes>
          </TabView.Item>
          <TabView.Item style={{width: "100%" }}>
            <Entregas></Entregas>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
            <Estoque></Estoque>
          </TabView.Item>
        </TabView>

      </View>
        <SpeedDial
          isOpen={open}
          icon={{ name: "add", color: "#fff" }}
          openIcon={{ name: "close", color: "#fff" }}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          buttonStyle={{ backgroundColor: "#1e90ff" }}
          size={'large'}
        >
          <SpeedDial.Action
            icon={{ name: "add", color: "#fff" }}
            title="Nova entrega"
            onPress={() => navigation.navigate("NovaEntrega")}
            buttonStyle={{ backgroundColor: "#1e90ff" }}
          />
          <SpeedDial.Action
            icon={{ name: "add", color: "#fff" }}
            title="Nova Doação"
            onPress={() => navigation.navigate("NovaDoacao")}
            buttonStyle={{ backgroundColor: "#1e90ff" }}
          />
        </SpeedDial>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    height:'100%'
  },
  actionButton: {
    position:"absolute",
  }
});
