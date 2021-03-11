import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export function Poster({item: {name, image}, style}) {

  

    return (
      <TouchableOpacity style={[styles.container, styles && {...style}]}>
           <Image source={{uri: image}} style={styles.image}/>
            <View style={styles.details}> 
                <Text style={styles.name} numberOfLines={2}>
                    {name}
                </Text>
                <View style={styles.bottomBar}>
                    <Text style={styles.bottomBarText}>Series</Text>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                </View>
            </View>
      </TouchableOpacity>
       
    );
}


const styles = StyleSheet.create({

    container: {
        width: 144,
        marginRight: 5.7,
    },
    image: {
        width: '100%',
        height: 225,
        resizeMode: 'cover'
    },
    details: {
        height: 80,
        paddingHorizontal: 6,
        paddingVertical: 4,
        justifyContent: 'space-between',
        backgroundColor: '#213944',
    },
    name: {
        color: 'rgba(255, 255, 255, .92)',
        letterSpacing: 0.6,
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomBarText: {
        color: '#43acb0',
    }
})
