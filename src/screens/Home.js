import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';
import Constants from 'expo-constants';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { ListItems } from '../components/ListItems';
import { Card } from '../components/Card';

import Logo from '../assets/Logo';
import HomeList from '../data/HomeList.json';


const src = { uri: 'https://img1.ak.crunchyroll.com/i/spire3/1ce8ca573ac440e55f9482f42eac5a251608611536_full.jpg' }

const statusBarHeight = Platform.OS == "android" ? Constants.statusBarHeight : 0


export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Logo />
                <View>
                    <EvilIcons name="search" size={27} color="white" />
                </View>
            </View>
            <Image source={src} style={styles.banner} />
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false} >
                <View style={styles.releaseInfo}>
                    <LinearGradient
                        colors={['transparent', 'rgba(0, 0, 0, .8)', 'rgba(0, 0, 0, 1)']}
                        style={styles.gradient}
                    >
                        <Text style={styles.title}>
                            ATTACK ON TITAN
                        </Text>
                        <Text numberOfLines={3} style={styles.overview}>
                            Eren Jaeger jurou eliminar todos os Titãs, mas em uma batalha desesperada ele se torna aquilo que mais odeia. Com seus novos poderes, ele luta pela liberdade da humanidade, combatendo os monstros que ameaçam seu lar. Mesmo depois de derrotar a Titã Fêmea, Eren não consegue descansar - uma horda de Titãs se aproximam da Muralha Rose e a batalha em nome da humanidade continua
                         </Text>
                        <TouchableOpacity style={styles.buttonPlay}>
                            <Feather name="play" size={24} color="black" />
                            <Text style={styles.buttonPlayText}>
                                WATCH NOW
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={styles.content}>
                    <ListItems data={HomeList.MostPopular} title="MOST POPULAR" />
                    <ListItems data={HomeList.JustUpdatedOnCrunchyroll} title="JUST UPDATED ON CRUNCHYROLL" />
                    <Card
                        name="Demon Slayer: Kimetsu no Yaiba"
                        image="https://img1.ak.crunchyroll.com/i/spire3/f1fe5c7a43cb2f38f4152a58f89479821554508873_full.jpg"
                        overview="Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora"
                    />
                    <ListItems data={HomeList.NewRelease} title="New Release" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'relative',
        flex: 1,
    },
    header: {
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#000',
        paddingHorizontal: 15,
        paddingTop: statusBarHeight,
    },
    banner: {
        flex: 1,
        width: '100%',
    },
    main: {
        position: 'absolute',
        top: 70,
        width: '100%',
        height: '100%',
    },
    releaseInfo: {
        height: 425,

    },
    gradient: {
        height: '100.2%',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
    },
    overview: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
        marginVertical: 10,
    },
    buttonPlay: {
        width: 158,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        paddingVertical: 6,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#df6300',
    },
    buttonPlayText: {
        fontSize: 16,
        fontWeight: "700",
    },
    content: {
        width: '100%',
        backgroundColor: '#000',
        paddingBottom: 80,
    }
});
