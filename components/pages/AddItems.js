import 'react-native-gesture-handler';
import 'react-native-screens';
import 'react-native-reanimated';
import {SearchBar} from 'react-native-elements';
import 'react-native-vector-icons';

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


export default AddItems = ({navigation, route}) => {


    const [searchList, setSearchList] = useState([])
    const [textInputValueSearchList, setTextInputValueSearchList] = useState('')


  /**UseEffect permettra d'afficher le contenu de getItems au démarrage de la page**/

    useEffect(() => {
        getItems()

    }, [])

    /** Appel API **/

    const getItems = async () => {
        try {

            let response = await fetch(
                'https://trackapi.nutritionix.com/v2/search/instant?query=' + textInputValueSearchList, {
                    headers: {
                        'x-app-id': '509968a4',
                        'x-app-key': 'ec73d2b1bc9acc563ca89ab2d54f6bf9'
                    }
                }
            );
            let jsonResponse = await response.json();

            if (jsonResponse) {
/** Le spread operator ici développera l'objet de l'API et le rendra itérable comme un tableau. On sera désormais en mesure
 * de parcourir ce tablau en passant par la variable data
 * **/
                const data = [...jsonResponse.branded, ...jsonResponse.common]
                setSearchList(data);
            }

        alert('Appel réussi')
        }catch (e) {
            alert('Aucun appel à l\'API')
        }
    }


    return (


        <View style={styles.homeMainContainer}>


            <SearchBar
                placeholder="Type Here..."
                onChangeText={setTextInputValueSearchList}
                value={textInputValueSearchList}
            />

            <Button title={'Chercher'}
                    onPress={() => getItems()}


            />


            <FlatList
                data={searchList}
                //On récupère item pour l'envoyer au composant itemsinput. L'itéation se fera sur item. On envoi les props également au composant Itemsinput
                renderItem={({item}) =>
                    //?? si tag existe afficher tag_name/si brand existe afficher brand/
                    <ItemsInput items={item.tag_name ?? item.brand_name} content={item.data} navigation={navigation}/>


                }
                keyExtractor={(item, id) => id.toString()}
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
    displayFoodContainer: {
        borderColor: 'black',
        backgroundColor: "#DDDDDD",
    }


});
