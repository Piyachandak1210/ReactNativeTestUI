import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Dimensions,
    View,
    Image,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window');
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IMAGES, COLORS } from '../Constants/Theme'
import Tabs from './Tabs';


const Home = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <ScrollView

                >
                    <LinearGradient
                        colors={['#DEDDDD', '#FFFFFF']}
                        style={styles.container}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <View>
                            <Image
                                style={styles.crownImageStyle}
                                source={IMAGES.Crown}
                            />
                            <Text
                                style={styles.textStyleEvening}>
                                Good Evening
                            </Text>
                            <Text
                                style={styles.textWelcome}>
                                Welcome back
                            </Text>
                        </View>
                        <Image
                            source={IMAGES.Banner}
                            style={{
                                alignSelf: 'center',
                                borderRadius: 5,
                                margin: 10,
                            }}
                        />
                        <Searchbar
                            placeholder="Search through your scans"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            style={{ borderRadius: 20, margin: 10 }}
                        />

                        <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-around', padding: 5 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Image
                                    style={{ width: 30, height: 30, margin: 10 }}
                                    source={IMAGES.Single}
                                />
                                <Text
                                    style={styles.scanTextStyle}>
                                    Single Scan
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Image
                                    style={{ width: 30, height: 30, margin: 10 }}
                                    source={IMAGES.Batch}
                                />
                                <Text
                                    style={styles.scanTextStyle}>
                                    Batch Scan
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Image
                                    style={{ width: 30, height: 30, margin: 10 }}
                                    source={IMAGES.scanTotext}
                                />
                                <Text
                                    style={styles.scanTextStyle}>
                                    Scan To Text
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text
                                style={{ color: COLORS.Black, fontSize: 25, padding: 5, margin: 5 }}>
                                Recent Scans
                            </Text>
                        </View>

                        <ScrollView horizontal={true}
                            style={{ flex: 1 }}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    margin: 10, padding: 10,
                                }}>
                                <Image
                                    style={{ width: 200, height: 200, margin: 10, resizeMode: 'stretch' }}
                                    source={IMAGES.Scanone}
                                />

                                <Image
                                    style={{ width: 200, height: 200, margin: 10, resizeMode: 'stretch' }}
                                    source={IMAGES.Scantwo}
                                />
                                <Image
                                    style={{ width: 200, height: 200, margin: 10, resizeMode: 'stretch' }}
                                    source={IMAGES.Scanone}
                                />

                            </View>
                        </ScrollView>
                        <View style={{backgroundColor:COLORS.white}}>
                        <View style={{ margin: 10, backgroundColor: COLORS.white, flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 18, color: COLORS.Black }}>Folders</Text>
                            <Image

                                source={IMAGES.FolderAdd}
                            />
                        </View>

                        <View style={styles.sliderview}>
                            <Tabs />
                        </View>
                        </View>
                    </LinearGradient>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // width: width,
        // height: height,
        flex: 1,
        alignContent: 'center'
    },
    crownImageStyle: {
        width: 50,
        height: 50,
        position: 'relative',
        left: width / 1.3,
        top: 60,
    },
    textStyleEvening:
    {
        fontSize: 35,
        color: COLORS.Black,
        fontWeight: 'bold',
        // position: 'relative',
        left: 30,
    },
    textWelcome: {
        color: COLORS.Black,
        fontWeight: 'bold',
        //  position: 'relative',
        left: 35,
    },
    scanTextStyle: {
        color: COLORS.Black,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,

    },
    sliderview: {
        flex: 1,
        padding: 10,
        height: 350
    },
});

export default Home;