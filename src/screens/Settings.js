import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, ScrollView, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Header } from '../components/Header';


export function Settings() {

    const [isActiveShowMatureContent, setIsActiveShowMatureContent] = useState(true);
    const [isActiveStreamUsingCellular, setIsActiveStreamUsingCellular] = useState(false);

    const toggleSwitchShowMatureContent = () =>
        setIsActiveShowMatureContent(previousState => !previousState);
    const toggleSwitchStreamUsingCellular = () =>
        setIsActiveStreamUsingCellular(previousState => !previousState);


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Settings" />
            <View style={styles.lineBottomHeader} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
                <View style={styles.settings}>

                    <View style={styles.setting}>
                        <Text style={styles.title}>
                            Account & Profile
                        </Text>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Current User
                            </Text>
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                subscription plan
                            </Text>
                            <MaterialIcons name="keyboard-arrow-right" size={22} color="#ffffffe8" />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Change Email
                            </Text>
                            <MaterialIcons name="keyboard-arrow-right" size={22} color="#ccc" />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Change Password
                            </Text>
                            <MaterialIcons name="keyboard-arrow-right" size={22} color="#ccc" />
                        </View>
                    </View>

                    <View style={styles.setting}>
                        <Text style={styles.title}>
                            General
                        </Text>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Subtitle language
                            </Text>
                            <MaterialIcons name="keyboard-arrow-right" size={22} color="#ccc" />
                        </View>
                    </View>

                    <View style={styles.setting}>
                        <Text style={styles.title}>
                            App Experience
                        </Text>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Show Mature Content
                            </Text>
                            <Switch
                                trackColor={{ false: "#4d4d4d", true: "#0d3938" }}
                                thumbColor={isActiveShowMatureContent ? "#29b9b7" : "#b9b9b9"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchShowMatureContent}
                                value={isActiveShowMatureContent}
                            />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Stream using cellular
                            </Text>
                            <Switch
                                trackColor={{ false: "#4d4d4d", true: "#0d3938" }}
                                thumbColor={isActiveStreamUsingCellular ? "#29b9b7" : "#b9b9b9"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchStreamUsingCellular}
                                value={isActiveStreamUsingCellular}
                            />
                        </View>

                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Notifications
                            </Text>
                            <MaterialIcons name="keyboard-arrow-right" size={22} color="#ccc" />
                        </View>
                    </View>

                    <View style={styles.setting}>
                        <Text style={styles.title}>
                            Privacy
                        </Text>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Do not sell my personal information
                            </Text>
                            <MaterialIcons name="keyboard-arrow-right" size={22} color="#ccc" />
                        </View>
                    </View>

                    <View style={styles.setting}>
                        <Text style={styles.title}>
                            About
                        </Text>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Need help?
                            </Text>
                            <MaterialIcons name="keyboard-arrow-right" size={22} color="#ccc" />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingText}>
                                Log Out
                            </Text>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Text style={[styles.footerItem, { color: '#fff' }]}>Version 1.0.0</Text>
                        <Text style={styles.footerItem}>Terms of Services</Text>
                        <Text style={styles.footerItem}>Privacy Policy</Text>
                    </View>
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
    lineBottomHeader: { 
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, .15)', 
        marginBottom: 1, 
    },
    main: {
        flex: 1,
        paddingHorizontal: 15,
    },
    settings: {
        flex: 1,
        paddingTop: 15,
    },
    setting: {
        flex: 1,
        marginBottom: 35,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        paddingVertical: 8,
    },
    title: {
        color: 'rgba(255, 255, 255, .7)',
        textTransform: 'uppercase',
        marginBottom: 10,
    },
    settingText: {
        color: '#fff',
        fontSize: 16,
        textTransform: "capitalize",
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerItem: {
        color: '#df6300',
        fontWeight: "500",
        paddingVertical: 4,
    }
})