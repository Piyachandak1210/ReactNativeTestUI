import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { IMAGES, COLORS } from '../Constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                style: { position: 'absolute', bottom: 25, left: 20, right: 0, elevation: 0, backgroundColor: COLORS.white, borderRadius: 15, height: 90 },
                tabBarLabelStyle: { fontSize: 13, textAlign: 'center', textTransform: 'none', },
                tabBarItemStyle: { textAlign: 'center' },
                tabBarIndicatorStyle: { backgroundColor: COLORS.Blue },
                swipeEnabled: true,
                showIcon: true,
                showLabel: false,
            }}

        >
            <Tab.Screen
                name='Folder'
                component={FolderScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={IMAGES.Folder}
                            style={{ bottom: -30 }}
                        />
                    ),

                }}
            />
            <Tab.Screen
                name="add"
                component={AddScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity
                            style={{

                                justifyContent: 'center',
                                alignItems: 'center',

                            }}

                        >
                            <View style={{
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                                backgroundColor: COLORS.Blue,
                                alignItems: 'center'
                            }}>
                                <Image
                                    source={IMAGES.add}
                                    style={{
                                        bottom: -20,
                                        alignSelf: 'center',
                                        tintColor: COLORS.white
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),

                }}
            />

            <Tab.Screen
                name='Settings'
                component={SettingScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={IMAGES.Setting}
                            style={{ bottom: -30 }}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default Tabs;

function FolderScreen() {
    return (
        <View style>
            <View style={{ flexDirection: 'row', margin: 10, padding: 10 }}>
                <Ionicons
                    name="folder"
                    color={COLORS.Black}
                    size={24}
                    style={{ marginStart: 0 }}
                />
                <Text style={{ marginStart: 20, fontSize: 14 }}>Personal Scans</Text>
                <Text style={{ marginStart: 100, fontSize: 14 }}>21</Text>
                <Ionicons
                    name="ellipsis-horizontal"
                    color={COLORS.Black}
                    size={24}
                    style={{ marginStart: 20 }}
                />
            </View>
            <View style={{ flexDirection: 'row', margin: 10, padding: 10 }}>
                <Ionicons
                    name="folder"
                    color={COLORS.Black}
                    size={24}
                    style={{ marginStart: 0 }}
                />
                <Text style={{ marginStart: 20, fontSize: 14 }}>Work Scans</Text>
                <Text style={{ marginStart: 120, fontSize: 14 }}>21</Text>
                <Ionicons
                    name="ellipsis-horizontal"
                    color={COLORS.Black}
                    size={24}
                    style={{ marginStart: 20 }}
                />
            </View>
            <View style={{ flexDirection: 'row', margin: 10, padding: 10 }}>
                <Ionicons
                    name="folder"
                    color={COLORS.Black}
                    size={24}
                    style={{ marginStart: 0 }}
                />
                <Text style={{ marginStart: 20, fontSize: 14 }}>Work Scans</Text>
                <Text style={{ marginStart: 120, fontSize: 14 }}>21</Text>
                <Ionicons
                    name="ellipsis-horizontal"
                    color={COLORS.Black}
                    size={24}
                    style={{ marginStart: 20 }}
                />
            </View>
            <View style={{ flexDirection: 'row', margin: 10, padding: 10 }}>
                <Ionicons
                    name="folder"
                    color={COLORS.Black}
                    size={24}
                    style={{ marginStart: 0 }}
                />
                <Text style={{ marginStart: 20, fontSize: 14 }}>Work Scans</Text>
                <Text style={{ marginStart: 120, fontSize: 14 }}>21</Text>
                <Ionicons
                    name="ellipsis-horizontal"
                    color={COLORS.Black}
                    size={24}
                    style={{ marginStart: 20 }}
                />
            </View>
        </View>
    );
}


function AddScreen() {
    return (
        <View>
            <Text>Add here</Text></View>
    );
}

function SettingScreen() {
    return (
        <View><Text>Settings Here</Text></View>
    );
}    