import React from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Poster } from './Poster';



export function ListItems({ data , title}) {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList
                style={styles.flatList}
                data={data}
                initialNumToRender={3}
                keyExtractor={({ name }) => name}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Poster item={item} />}

            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 15,
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        color: '#fff',
        marginLeft: 20,
        marginBottom: 10,
    },
    flatList: {
        paddingHorizontal: 15
    }
})