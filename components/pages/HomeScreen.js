import 'react-native-gesture-handler';

import AddItems from "./AddItems";

import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Button,
    FlatList, ListView
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import ItemsInput from "../widgets/itemsInput";
import ListAliment from "../widgets/ListAliment";


export default HomeScreen = ({route,navigation}) => {

    const [value,setValue] = useState({})



    let addAliments = '';
    if(route.params) {
        addAliments = route.params.tag_name
    }




    return (


        <View style={styles.homeMainContainer}>
            <View style={styles.homeChildContainermMoments}>
                <View style={styles.homeBox}>
                    <Text style={styles.homeTitleMoment}>Petit Déjeuner</Text>
                </View>
                <View>
                    <Text>{addAliments}</Text>
                </View>
            </View>
            <View style={styles.homeChildContainermMoments}>
                <View style={styles.homeBox}>
                <Text style={styles.homeTitleMoment}>Déjeuner</Text>
                </View>
            </View>
            <View style={styles.homeChildContainermMoments}>
                <View style={styles.homeBox}>
                <Text style={styles.homeTitleMoment}>Dîner</Text>
                </View>
            </View>
            <View style={styles.homeTitleChildMomentsContainer}>
                <TouchableOpacity>
                    <Button
                        title="Items"
                        onPress={() => navigation.navigate('Aliments')}
                    />
                </TouchableOpacity>
            </View>

        </View>

    );
};
const styles = StyleSheet.create({
    homeMainContainer: {
        backgroundColor:'#F0FFFF',
        alignItems:'center',
        flex: 1,
    },
    homeChildContainermMoments: {

        width: '88%',
        flex: 1,

    },
    homeTitleChildMomentsContainer: {
        width:'88%'
    },
    homeChildBoxBfContainer:{
        flex:1,
        backgroundColor:'cyan'
    },
    homeTitleMoment:{
    fontSize: 25,


    },
    homeBox:{
        width:'100%',
        backgroundColor: '#01BCE7',
    }


});