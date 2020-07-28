import 'react-native-gesture-handler';
import AddItems from "./AddItems";

import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Button,
    FlatList
} from 'react-native';

export default HomeScreen = ({navigation}) => {


    return (


        <View style={styles.homeMainContainer}>
            <View style={styles.homeChildContainerBreakFast}>
                <View style={styles.homeTitleChildBfContainer}>
                    <Text>Aujourd'hui</Text>
                    <TouchableOpacity>
                    <Button
                        title="Items"
                        onPress={() => navigation.navigate('Aliments')}
                    />
                </TouchableOpacity>
                </View>
                <View>
                    <Text>Petit Déjeuner</Text>
                    <View>
                        <Text>fqsfdqsfsq</Text>
                        <Text>fqsfdqsfsq</Text>
                    </View>


                </View>


            </View>
            <View style={styles.homeChildContainerLunch}>
                <Text>Déjeuner</Text>

            </View>
            <View style={styles.homeChildContainerDinner}>
                <Text>Dîner</Text>

            </View>

        </View>

    );
};
const styles = StyleSheet.create({
    homeMainContainer: {
        flex: 1,
    },
    homeChildContainerBreakFast: {
        flex: 1,
        backgroundColor: 'green'
    },
    homeTitleChildBfContainer: {
        alignItems: 'center',
    },
    homeChildBoxBfContainer:{
        flex:1,
        backgroundColor:'cyan'
    },
    homeChildContainerLunch: {
        flex: 1,
        backgroundColor: 'red'
    },
    homeChildContainerDinner: {
        flex: 1,
        backgroundColor: 'yellow'
    },


});