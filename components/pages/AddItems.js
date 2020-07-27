import 'react-native-gesture-handler';
import 'react-native-screens';
import 'react-native-reanimated';

import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button

} from 'react-native';

import ItemsInput from "../widgets/itemsInput";


export default AddItems = ({navigation}) => {

    const [item, setItems] = useState([]
    )
    const [textInputValue, setTextInputValue] = useState('')


    useEffect(() => {
        getItems()

    }, [])


    const getItems = async () => {

        let response = await fetch(
            'https://trackapi.nutritionix.com/v2/search/instant?query=grilled cheese', {
                headers: {
                    'x-app-id': '05e754e7',
                    'x-app-key': '107ea2f449d4e88d05e32f46d25b7746'
                }
            }
        );
        let jsonResponse = await response.json();

//(jsonResponse.network car nous il s'agit d'un objet/jsonResponse si ça avait été un tableau
        if (jsonResponse) {
            setItems(jsonResponse);
        }

    }

    return (


        <View style={styles.homeMainContainer}>

            <TextInput
                // on récupère la valeur à modifier
                value={textInputValue}
                placeholder={'Ajouter'}
                // onChangerText va modifier cette valeur
                onChangeText={setTextInputValue}
            />

            <TouchableOpacity>
                <Button title={'Ajouter'}/>
            </TouchableOpacity>

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
    homeChildBoxBfContainer: {
        flex: 1,
        backgroundColor: 'cyan'
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
