import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Button, StyleSheet, TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'
import {set} from "react-native-reanimated";


/**Je crée une clé d'identification de la donnée stockée**/
const STORAGE_KEY = '@save_List'

export default ItemsInput = ({items, navigation}) => {

    /**Je crée un hook dont le state a pour valeur par défaut un string vide**/
    const [storeList, setStoreList] = useState('');


    /**On définit saveData, une fonction asynchrone qui permettra l'enregistrement des données
     * Elle se basera sur les promises donc il nous sera possible d'utiliser async await dans notre try-catch
     *
     * AsyncStorage.setItem -- va permettre de stocker la clé d'identification et sa donnée
     *
     * On Ajoute un message d'alerte pour un enregistrement réussi ou non
     * **/

    const saveDataList = async () => {
        try {
        await AsyncStorage.setItem(STORAGE_KEY, storeList)
        alert('Enregistré !')
        }catch (e) {
            alert('Aucun enregistrement')
        }
    }

    /**On doit pouvoir lire la fonction.
     *
     *On définit la fonction readData, une fonction asynchrone qui permettra l'enregistrement des données
     * Elle se basera aussi sur les promises donc il nous sera possible d'utiliser async await dans notre try catch aussi
     *
     * AsyncStorage.getItem -- va permettre un enregistrement de l'âge si c'est différent de null
     */

    const readDataList = async () => {
        await AsyncStorage.getItem(STORAGE_KEY)
    }


    /**Pour retrouver les données à chaque démarrage de l'app on utilisera un useEffect**/

    useEffect(() => {
        readDataList()
    }, [])


    const onPress = storeList => setStoreList(storeList)

    const onSubmitEditing = () => {
        if (!storeList) return

        saveDataList(storeList)
        setStoreList('')
    }


    return (


        <View>
            <TouchableOpacity style={styles.displayFoodContainer}>
                <Text style={styles.displayFoodText}>{items}
                </Text>

                <Button
                    onPress={() => navigation.navigate("Aujourd'hui", {
                            //items et non items.data car dans homescreen seul item a été spécifié
                            id: Math.random().id,
                            tag_name: items,
                            brand_name: items
                        },{onPress}
                    )
                    }
                    onSubmitEditing={onSubmitEditing}
                    title={"+"}
                />

            </TouchableOpacity>

        </View>


    )
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
        flexDirection: "row",
        margin: 30,
        justifyContent: 'space-between',
    },
    displayFoodText: {
        fontSize: 20
    }


});
