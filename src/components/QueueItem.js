import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export function QueueItem({ item: { name, image, like, episode} }) {




    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.details}>
                <View>
                    <Text style={styles.name} numberOfLines={1}>
                        {name}
                    </Text>
                    <Text style={styles.episode}>
                        continua: {episode}
                    </Text>
                </View>
                <View style={styles.bottomBar}>
                    <Text style={styles.bottomBarText}>
                        Series
                    </Text>
                    <View style={styles.bottomBarIcons}>
                        {like 
                            ? <Entypo name="heart" size={22} color="#df6300" />
                            : <Entypo name="heart-outlined" size={22} color="white" />
                         }

                        <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        marginBottom: 10,
    },
    image: {
        width: 75,
        height: '100%',
        resizeMode: 'cover',
    },
    details: {
        flex: 1,
        backgroundColor: '#213944',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
        paddingVertical: 4,
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
        color: '#fff',
    },
    episode: {
        marginTop: 5,
        color: 'rgba(255, 255, 255, .8)',
    },  
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomBarText: {
        color: '#43acb0'
    },
    bottomBarIcons: {
        width: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})