import 'react-native-gesture-handler';
import 'react-native-screens';
import 'react-native-reanimated';
import {SearchBar} from 'react-native-elements';
import'react-native-vector-icons';

import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    FlatList, TouchableHighlight,


} from 'react-native';

import ItemsInput from "../widgets/itemsInput";


export default AddItems = ({navigation}) => {




    const [items, setItems] = useState([])
    const [textInputValue, setTextInputValue] = useState('')
    const [fillContainer, setFillContainer] = useState(
        []
    )
    

    useEffect(() => {
        getItems()

    }, [])


    const getItems = async () => {
        if (textInputValue !== ''){


        let response = await fetch(
            'https://trackapi.nutritionix.com/v2/search/instant?query=' + textInputValue, {
                headers: {
                    'x-app-id': '05e754e7',
                    'x-app-key': '107ea2f449d4e88d05e32f46d25b7746'
                }
            }
        );
        let jsonResponse = await response.json();

//(jsonResponse.network car nous il s'agit d'un objet/jsonResponse si ça avait été un tableau
        if (jsonResponse) {
            // le spread operator va étendre le tableau. Les index common et brand vont se fondre dans un tableau [data]
            const data = [...jsonResponse.branded,...jsonResponse.common]
            setItems(data);

            }
        }


    }


    return (


        <View style={styles.homeMainContainer}>

            <SearchBar
                placeholder="Type Here..."
                onChangeText={setTextInputValue}
                value={textInputValue}
            />

                <Button title={'Chercher'}
                        onPress={()=> getItems()}

                />


                <FlatList
                    data={items}
                    //?? si tag existe afficher tag_name/si brand existe afficher brand/
                    renderItem={({ item }) =>

                        <ItemsInput items={item.tag_name??item.brand_name}/>


                    }
                    keyExtractor={item => item.id}
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
    displayFoodContainer:{
        borderColor: 'black',
        backgroundColor: "#DDDDDD",
    }


});
