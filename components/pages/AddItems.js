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
    Button,
    FlatList

} from 'react-native';

import ItemsInput from "../widgets/itemsInput";


export default AddItems = ({navigation}) => {


    const SearchFilterFunction = (task, action) => {
            let newTasksState = [...tasks];
            switch (action) {
                case'rechercher':
                    newTasksState = [...tasks, {id: tasks.length, content: task}]
                    setTextInputValue('');
                    break;
                case 'delete':
                    // recup l'id a supprimer puis crée un nouveau tableau sans l'id
                    newTasksState = tasks.filter(({id}) => id !== task.id)
                    console.log(newTasksState)
                    break;
                default:
                    break;
            }
            //ici on sauvegarde la ,nouvelle valeur de newTasksState en fonction du case utilisé
            setTasks(newTasksState);
            // on persisite
    }

    const [items, setItems] = useState([]
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
        if (jsonResponse.common) {
            setItems(jsonResponse.common);
        }
        console.log(jsonResponse)
    }

    return (


        <View style={styles.homeMainContainer}>

            <TextInput
                // on récupère la valeur à modifier
                value={textInputValue}
                placeholder={'Chercher'}
                // onChangerText va modifier cette valeur
                onChangeText={setTextInputValue}
            />

            <TouchableOpacity>
                <Button title={'Chercher'}
                        onPress={()=> SearchFilterFunction(items)}

                />
                <FlatList
                    data={items}
                    renderItem={({ item }) => <ItemsInput items={item.tag_name}/>}
                    keyExtractor={item => item.id}
                />

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
