
import 'react-native-gesture-handler'

import React from 'react';
import {

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

import HomeScreen from "../components/pages/HomeScreen";
import AddItems from "../components/pages/AddItems";
import itemsInput from "../components/widgets/itemsInput";


const Stack = createStackNavigator();

export default Router = () => {



    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"Aliments"} component={AddItems} />
            </Stack.Navigator>
        </NavigationContainer>


    );
};






