import 'react-native-gesture-handler';
import 'react-native-screens';
import 'react-native-reanimated';

import React,{useEffect,useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,

} from 'react-native';


export default AddItems = ({navigation}) => {

    const [item, setItems] = useState([

    ])


    useEffect(() => {
        getItems()

    },[])



    const getItems = async () => {

        let response = await fetch(
            'https://trackapi.nutritionix.com/v2/search/item',{
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    message:"e922c831e1a9cee617b15e413bab1161",
                    id:"deb965d3"
                }}
        );
        let jsonResponse = await response.json();

//(jsonResponse.network car nous il s'agit d'un objet/jsonResponse si ça avait été un tableau
        if (jsonResponse) {
            setItems(jsonResponse);
            console.log(jsonResponse)

        }

    }

    return (


        <View style={styles.homeMainContainer}>



            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}

            />





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
