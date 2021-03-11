import React from 'react';
import { StyleSheet ,View, Image, Text, TouchableOpacity  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Card({ name, image, overview }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.bottomBar}>
                <Image source={{uri: image}} style={styles.poster}/>
                <View style={styles.details}>
                    <Text style={styles.name} numberOfLines={1}>
                        {name}
                    </Text>
                    <Text style={styles.overview} numberOfLines={3} >
                        {overview}
                    </Text>
                    <View style={styles.setting}>
                        <Text style={styles.settingText}>Series</Text>
                        <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 15,
        width: '100%',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 170,
        resizeMode: 'cover'
    },
    
    bottomBar: {
        position: 'relative',
        width: '100%',
        height: 140,
        alignItems: 'flex-end',
        backgroundColor: '#213944',
        paddingVertical: 4,
    },
    poster: {
        position: 'absolute',
        width: 120,
        height: 180,
        bottom: 10,
        left: 10,
    },
    details: {
        width: '60%',
        height: '100%',
        paddingHorizontal: 5,
        justifyContent: 'space-between',

    },
    name: {
        color: '#fff',
        fontWeight: "500",
    },
    overview: {
        color: 'rgba(255, 255, 255, 0.83)',
        fontWeight: "400",
        fontSize: 15,
    },
    setting: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    settingText: {
        color: '#43acb0',
    }
})