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
    FlatList
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import ItemsInput from "../widgets/itemsInput";


export default HomeScreen = ({route,navigation}) => {
    const [value,setValue] = useState([]);

    useEffect(() => {
        if(route.params){
            let newState;
            newState = [...value, {
                id:route.params.id,
                tag_name: route.params.tag_name
            }]
            setValue(newState)
        }

    }, [route.params])


    const addAliments = route.params;


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




                        <FlatList
                        data={value}
                        renderItem={({item}) => <Text>{addAliments?route.params.tag_name:'aucun aliment'}</Text>}
                        keyExtractor={item => item.id}
                        />



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