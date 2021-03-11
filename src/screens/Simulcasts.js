import React from 'react';
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Header } from '../components/Header';
import { Poster } from '../components/Poster';

import SimulcastsList from '../data/Simulcasts.json';


const { width } = Dimensions.get("window")


export function Simulcasts() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Simulcasts" />
            <View style={styles.lineBottomHeader} />
                <View style={styles.content}>
                    <FlatList
                        ListHeaderComponent={() => (
                            <View style={styles.select}>
                                <AntDesign name="caretdown" size={12} color="#43acb0" />
                                <Text style={styles.selectText}>
                                    Winter 2021
                                </Text>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                        data={SimulcastsList}
                        keyExtractor={({ name }) => name}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        numColumns={2}
                        renderItem={({ item }) =>
                            <Poster
                                item={item}
                                style={{
                                    width: ((width - 30) / 2.04),
                                    marginRight: 0,
                                    marginBottom: 10,
                                }}
                            />}
                    />
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    lineBottomHeader: { 
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, .15)', 
        marginBottom: 1, 
    },
    content: {
        flex: 1,
        paddingHorizontal: 15,
    },
    select: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    selectText: {
        fontSize: 18,
        fontWeight: "500",
        color: '#43acb0',
        marginLeft: 12,
    },
})