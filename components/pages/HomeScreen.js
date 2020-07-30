
import 'react-native-gesture-handler';


import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Button,
} from 'react-native';




export default HomeScreen = ({route,navigation}) => {






    let addAliments = '';
    console.log(addAliments)
    if(route.params) {
        addAliments = route.params.tag_name
    }




    return (


        <View style={styles.homeMainContainer}>
            <View style={styles.homeChildContainermMoments}>
                <View style={styles.homeBox}>
                    <Text style={styles.homeTitleMoment}>Petit Déjeuner</Text>
                </View>
                <TouchableOpacity style={styles.listHome}>
                    <Text>{addAliments} </Text>
                </TouchableOpacity>
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
                        title="Search List"
                        onPress={() => navigation.navigate('Aliments')}
                    />
                </TouchableOpacity>
                <Button
                    title="Async"
                    onPress={() => navigation.navigate('test')}
                />
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
        borderWidth: StyleSheet.hairlineWidth

    },
    homeTitleChildMomentsContainer: {

        width:'88%'
    },
    homeChildBoxBfContainer:{

        flex:1,
        backgroundColor:'cyan'
    },
    homeTitleMoment:{
    color:'white',
    fontSize: 25,


    },
    homeBox:{

        width:'100%',
        backgroundColor: '#01BCE7',
    },
    listHome:{
        flexDirection:"row",
        margin: 30,
        justifyContent: 'space-between',
    }


});