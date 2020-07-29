

import React, {useState} from 'react';
import {
    View,
    Text,
    Button, StyleSheet, TouchableOpacity,
} from 'react-native';

export default ItemsInput = ({items,navigation}) => {


    return (


        <View>
            <TouchableOpacity style={styles.displayFoodContainer}>
            <Text  style={styles.displayFoodText}>{items}
            </Text>

                <Button
                    onPress={() => navigation.navigate('Home',{
                        //items et non items.data car dans homescreen seul item a été spécifié
                        tag_name: items,
                        brand_name :items


                    })}
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
    displayFoodContainer:{
        flexDirection:"row",
        margin: 30,
        justifyContent: 'space-between',
    },
    displayFoodText:{
        fontSize: 20
    }



});
