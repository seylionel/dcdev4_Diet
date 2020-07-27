import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


export default ItemsInput = props => {
    return (
        <View>

            <TextInput
                // on récupère la valeur à modifier
                value={textInputValue}
                placeholder={'Ajouter'}
                // onChangerText va modifier cette valeur
                onChangeText={setTextInputValue}
            />
        </View>
    )
}

