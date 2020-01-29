import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({inputValue, inputChange}) => {

    return(
        <View style = {styles.inputContainer}>
            <TextInput
                value = {inputValue}
                onChangeText = {inputChange}
                style = {styles.input}
                placeholderTextColor = "#CACACA"
                placeholder = "todo" />
        </View>
    );

}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
    },
    input: {
        height: 60,
        width: 350,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Input;