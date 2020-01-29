import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

const TabBarItem = ({setType, border, type, title}) => {
    
    return(
        <TouchableHighlight
            underlayColor = "#efefef"
            onPress = {setType}
            style = {[
                styles.item,
                border ? styles.border : null,
                type === title ? styles.selected : null ]}>
            <Text style = {[
                styles.itemText,
                type === title ? styles.bold : null ]}>
                {title}
            </Text>
        </TouchableHighlight>
    );

}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    itemText: {
        color: '#777777',
        fontSize: 16
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default TabBarItem;
