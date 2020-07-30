import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

/**Je crée une clé d'identification de la donnée stockée**/

const STORAGE_KEY = '@save_age'

const App = () => {

/**Je crée un hook dont le state a pour valeur par défaut un string vide**/

    const [name, setName] = useState('')


/**On définit saveData, une fonction asynchrone qui permettra l'enregistrement des données
 * Elle se basera sur les promises donc il nous sera possible d'utiliser async await dans notre try-catch
 *
 * AsyncStorage.setItem -- va permettre de stocker la clé d'identification
 *
 * On Ajoute un message d'alerte pour un enregistrement réussi ou non
 * **/
    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, name)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

/**On doit pouvoir lire la fonction.
 *
 *On définit la fonction readData, une fonction asynchrone qui permettra l'enregistrement des données
 * Elle se basera aussi sur les promises donc il nous sera possible d'utiliser async await dans notre try catch aussi
 *
 * AsyncStorage.getItem -- va permettre un enregistrement de l'âge si c'est différent de null
 */

    const readData = async () => {
        try {
            const userName = await AsyncStorage.getItem(STORAGE_KEY)

            if (userName !== null) {
                setName(userName)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

/**Pour retrouver les données à chaque démarrage de l'app on utilisera un useEffect**/

    useEffect(() => {
        readData()
    }, [])


/**Il est possible de supprimer les données stockés**/

    /**Le processus est similaire, on crée une fonction asynchrone et grâdce au système de promises on pourra utiliser await async
     */
    const clearStorage = async () => {
        try {
            await AsyncStorage.clear()
            alert('Storage successfully cleared!')
        } catch (e) {
            alert('Failed to clear the async storage.')
        }
    }

    /**On utilise une fonction fléché sur l'event onChangeText pour lire le state de l'input
     *
     * On utilise une fonction fléchée anonyme sur l'évent onSubmitEditing pour mettre à jour le state
     *
     */
    const onChangeText = userName => setName(userName)

    const onSubmitEditing = () => {
        if (!name) return

        saveData(name)
        setName('')
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Account</Text>
            </View>
            <View style={styles.panel}>
                <Text>Entrez votre nom:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                />
                <TouchableOpacity onPress={clearStorage} style={styles.button}>
                    <Text style={styles.buttonText}>Vider le storage</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        backgroundColor: '#dcdcdc',
        padding: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold'
    },
    panel: {
        paddingTop: 40,
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: '#dcdcdc'
    },
    input: {
        padding: 15,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        margin: 10
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'yellow'
    },
    buttonText: {
        fontSize: 18,
        color: '#444'
    }
})

export default App