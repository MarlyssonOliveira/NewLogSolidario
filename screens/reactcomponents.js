import { ScrollView, View } from "react-native";
import { Header } from "react-native-elements/dist/header/Header";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Avatar, Button, Divider, Input, ListItem, Tab, TabView, Text } from 'react-native-elements';
import { FAB } from 'react-native-elements';
import { SpeedDial } from 'react-native-elements';
import { useState } from "react";




export default function Teste() {
    const [open, setOpen] = useState(false);

    const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
    ]
    return (
        <View>

            <Text h4>Header</Text>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />

            <Text h4>Icon</Text>
            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')}
            />

            <Text h4>Tabs</Text>
            <Tab value={0}>
                <Tab.Item title="Doacoes" />
                <Tab.Item title="Entregas" />
                <Tab.Item title="Estoque" />
                <Tab.Item title="favorite" />
                <Tab.Item title="cart" />
            </Tab>
            <TabView value={0}>
                <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                </TabView.Item>
            </TabView>


            <Text h4>Float Button</Text>

            <FAB title="Create" />



            <Text h4>Input</Text>

            <Input
                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={
                    <Icon
                        name='user'
                        type="font-awesome"
                        size={24}
                        color='black'
                    />
                }
            />

            <Text h4>Button</Text>

            <Button
                icon={
                    <Icon
                        name="arrow-left"
                        type="font-awesome"
                        size={15}
                        color="white"
                    />
                }
                title="Button"
            />

            <Text h4>Dial</Text>
            <View style={{ marginTop: 60 }}>
                <SpeedDial
                    isOpen={open}
                    icon={{ name: 'edit', color: '#fff' }}
                    openIcon={{ name: 'close', color: '#fff' }}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                >
                    <SpeedDial.Action
                        icon={{ name: 'add', color: '#fff' }}
                        title="Add"
                        onPress={() => console.log('Add Something')}
                    />
                    <SpeedDial.Action
                        icon={{ name: 'delete', color: '#fff' }}
                        title="Delete"
                        onPress={() => console.log('Delete Something')}
                    />
                </SpeedDial>

            </View>



            <Text h4>List</Text>

            <View>
                {
                    list.map((l, i) => (
                        <ListItem key={i} bottomDivider>
                            <Avatar source={{ uri: l.avatar_url }} />
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
        </View>
    );
}