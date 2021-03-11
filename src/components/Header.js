import React from 'react';
import Constants from 'expo-constants';
import { EvilIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, ScrollView, Platform} from 'react-native';

const statusBarHeight = Platform.OS == "android" ? Constants.statusBarHeight : 0


export function Header({ title }) {


    return (
        <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>
        <View>
            <EvilIcons name="search" size={27} color="white" />
        </View>
    </View>
    );
}


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#000',
        paddingHorizontal: 15,
        paddingTop: statusBarHeight,
    },
    title: {
        fontSize: 21,
        fontWeight: "600",
        color: '#fff',
    }
})