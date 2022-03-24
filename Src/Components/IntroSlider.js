
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IMAGES, COLORS } from '../Constants/Theme'


const slides = [
    {
        key: 's1',
        text: 'Scan Anything in HD,\n Where You are... ',
        textview: 'Simply launch the AirScan app and scan any  documnet, papers or real world photographs in seconds.',
        image: IMAGES.Sliderone,
        backgroundColor: COLORS.white,
    },
    {
        key: 's2',
        text: 'Navigate work documents \n like a Pro ',
        textview: 'Scan and organize your work documents in  structured folders. Scan single or multiple  documents in one swift go. Merge scans into  PDFs, records pages and share them on the fly.',
        image: IMAGES.Slidertwo,
        backgroundColor: COLORS.white,
    },
    {
        key: 's3',
        text: 'Less time scanning homework \n =more time for fun',
        textview: 'Scanning of homework and assignments are a  breeze with AirScan. Capture scans, generate  PDFs and push them to any app installed on  your phone. Its that easy!',
        image: IMAGES.Sliderthree,
        backgroundColor: COLORS.white,
    },
    {
        key: 's4',
        text: 'Convert Pictures to Text with our \n next generation offline OCR ',
        textview: 'Leverage our cutting edge machine learning  OCR to convert documents to text in seconds  with accurate results. Share OCR scans as Doc  files or PDFs in seconds.',
        image: IMAGES.Sliderfour,
        backgroundColor: COLORS.white,
    },

];

const IntroSlider = ({ navigation }) => {
    const [showRealApp, setShowRealApp] = useState(false);

    const onDone = () => {
       // setShowRealApp(true);
       navigation.navigate('Home')
    };



    const RenderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="chevron-forward"
                    color={COLORS.white}
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };

    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    // justifyContent: 'space-around',
                    paddingBottom: 50,
                    padding: 5

                }}>

                <Image
                    style={styles.introImageStyle}
                    source={item.image} />
                <Text style={styles.introTitleStyle}>
                    {item.text}
                </Text>
                <Text style={styles.introTextStyle}>
                    {item.textview}
                </Text>
            </View>
        );
    };

    return (
        <>
            {showRealApp ? (
                <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={styles.titleStyle}>
                            React Native App Intro Slider using AppIntroSlider
                        </Text>
                        <Text style={styles.paragraphStyle}>
                            This will be your screen when you click Skip
                            from any slide or Done button at last
                        </Text>
                        <Button
                            title="Show Intro Slider again"
                            onPress={() => setShowRealApp(false)}
                        />
                    </View>
                </SafeAreaView>
            ) : (
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    renderDoneButton={RenderDoneButton}
                    showNextButton={false}
                    activeDotStyle={{ backgroundColor: COLORS.Blue }}
                // renderNextButton={RenderNextButton}
                />
            )}
        </>
    );
};

export default IntroSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 150,
        height: 150,
        marginTop: 100
    },
    introTextStyle: {
        fontSize: 16,
        color: COLORS.Black,
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 22,
        color: COLORS.Black,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 70
        // fontWeight: 'bold',
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.Blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

