import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Button = ({submitTodo}) => {
    
    return(
        <View style = {styles.buttonContainer}>
            <TouchableHighlight
                style = {styles.button}
                underlayColor = "#efefef"
                onPress = {submitTodo} >
                <Text style = {styles.buttonText}>
                    Save
                </Text>
            </TouchableHighlight>
        </View>
    );
    
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        width: 200,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15,
        marginRight: 20,
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    buttonText: {
        color: '#666666',
        fontWeight: '600'
    }
})

export default Button;
