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
        rightComponent={{ icon: "logout", color: "#fff" }}
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
          <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
            {/* Colocar aqui a screen de listagem de doação */}
            <View>
                <Text h1>Doacoes</Text>
            
            <ScrollView>
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                            <ListItem.Chevron color="black" />
                    </ListItem>
                ))
            }
            </ScrollView>
            </View>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
            {/* Colocar aqui a screen de listagem de entregas */}
            <Text h1>Entregas</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
            {/* Colocar aqui a screen de estoque */}
            <Text h1>Estoque</Text>
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
            onPress={() => console.log("Direciona para a tela de nova Entrega")}
            buttonStyle={{ backgroundColor: "#1e90ff" }}
          />
          <SpeedDial.Action
            icon={{ name: "add", color: "#fff" }}
            title="Nova Doação"
            onPress={() => console.log("Direciona para a tela de nova doação")}
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
