import React from 'react';
import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { 
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons, 
    Octicons 
} from '@expo/vector-icons';

import { Header } from '../components/Header';

const { width } = Dimensions.get("window")


export function Browser() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Browser" />
            <View style={styles.navbar}>
                <Text style={[styles.navBarItem, styles.routeActive]}>Genres</Text>
                <Text style={styles.navBarItem}>All</Text>
            </View>
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                <View style={styles.genres}>
                    <ImageBackground resizeMode="cover" style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire4-tmb/7a9bc08ef3bb8113b00e9e145576d8861340485841_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <MaterialCommunityIcons name="fire" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Action
                            </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/ac8b3520aa4b458a79b0684329c6cadc1548251234_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <Fontisto name="map" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Adventure
                            </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire1-tmb/bc47efbc769b26fa7724d44d02780e251502141790_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <MaterialIcons name="theater-comedy" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Comedy
                            </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire4-tmb/1b41cf71fc0bf6df90f6c69fa80e471b1515221039_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <MaterialCommunityIcons name="heart-broken" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Drama
                            </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire4-tmb/5b5eff8a77ab5a8871c9f25d89ada6f91434787343_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <MaterialCommunityIcons name="sword" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Fantasy
                            </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/a1ea20bd4713ae7d4dc0b35d1a0a0e4b1478217275_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <Ionicons name="musical-notes-sharp" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Music
                            </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire4-tmb/31eafbd4e5b64230f67a7cd2d2fe32a81536909869_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <FontAwesome name="heart" size={24} color="white" />
                            <Text style={styles.genreName}>
                                Romance
                            </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire4-tmb/9cbd05344851e588e9263e29fa69d2161530013307_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <MaterialIcons name="science" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Science fiction
                            </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/5c0b270b25e5048f1490bc1b7413bdf31465863391_widestar.jpg' }}>
                        <View style={styles.overlay}>
                            <FontAwesome5 name="strava" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Seinen
                             </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/9141eab51f8aa168b77cb7b577724bfe1468120609_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <Octicons name="device-mobile" size={22} color="white" />
                            <Text style={styles.genreName}>
                                Shoujo
                             </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire4-tmb/8d1a4c20c81b3739f3cf3c52e507d0fd1536049641_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <FontAwesome5 name="hand-rock" size={24} color="white" />
                            <Text style={styles.genreName}>
                                Shounen
                             </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/2d906e6069cab7511010b8924c1d486f1517910980_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <MaterialIcons name="date-range" size={22} color="white" />
                            <Text style={styles.genreName}>
                                slice of life
                             </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/d4992e2a526b9e446b993bc511149cf41480778453_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <MaterialIcons name="sports-soccer" size={22} color="white" />
                            <Text style={styles.genreName}>
                                sport
                             </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire3-tmb/a95090e58137327654af393b13398cc31470424023_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <FontAwesome5 name="ghost" size={24} color="white" />
                            <Text style={styles.genreName}>
                                supernatural
                             </Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground style={styles.genre} source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/be2380a07baef83eaac551b7b8572c8f1523700704_wide.jpg' }}>
                        <View style={styles.overlay}>
                            <MaterialCommunityIcons name="knife" size={24} color="white" />
                            <Text style={styles.genreName}>
                                suspense
                             </Text>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    navbar: {
        marginTop: 9,
        flexDirection: 'row',
    },
    navBarItem: {
        color: '#fff',
        flex: 1,
        borderBottomColor: '#333333',
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: 18,
    },
    routeActive: {
        borderBottomColor: '#df6300',
        borderBottomWidth: 3,
    },
    main: {
        flex: 1,
        paddingHorizontal: 15,
    },
    genres: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    genre: {
        width: ((width - 30) / 2.06),
        height: 90,
        marginBottom: 10,
        backgroundColor: '#96f'
    },
    genreName: {
        color: '#fff',
        fontSize: 17,
    },
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .48)',
    }
});