import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Header } from '../components/Header';
import { QueueItem } from '../components/QueueItem';

import Queue from '../data/Queue.json';


export function MyList() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="My Lists" />
            <View style={styles.navBar}>
                <Text style={[styles.navBarItem, styles.routeActive]}>Queue</Text>
                <Text style={styles.navBarItem}>History</Text>
                <Text style={styles.navBarItem}>Offline</Text>
            </View>
            <FlatList
                style={styles.main}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View style={styles.filterBar}>
                        <Text style={styles.filterBarText}>
                            Recent Activity
                                </Text>
                        <View style={styles.icons}>
                            <View style={styles.iconFilter}>
                                <View style={[styles.iconFilterLine, { width: '100%' }]}></View>
                                <View style={[styles.iconFilterLine, { width: '85%' }]}></View>
                                <View style={[styles.iconFilterLine, { width: '70%' }]}></View>
                            </View>
                            <Entypo name="sound-mix" size={22} color="white" style={styles.iconMix} />
                        </View>
                    </View>
                )}
                data={Queue}
                keyExtractor={({ name }) => name}
                renderItem={({ item }) => <QueueItem item={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    navBar: {
        marginTop: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
    filterBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 15,
    },
    filterBarText: {
        color: '#fff',
        fontSize: 18,
    },
    icons: {
        width: 63,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconFilter: {
        width: 24,
        height: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 2,
    },
    iconFilterLine: {
        height: 2,
        backgroundColor: '#fff',
        borderRadius: 2,
    },
    iconMix: {
        transform: [
            { rotateZ: '90deg' }
        ]
    },
})