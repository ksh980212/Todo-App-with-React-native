import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const TodoButton = ({name, complete, onPress}) => {
    return(
        <TouchableHighlight
            style={styles.button} 
            underlayColor="#efefef"
            onPress={onPress} >
            <Text style={[
                styles.text,
                name === 'Delete' ? styles.deleteButton : null,
                complete ? styles.complete : null ]}>
                {name}
            </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf:'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight:5
    },
    text: {
        color: '#666666'
    },
    complete: {
        color: 'green',
        fontWeight: 'bold'
    },
    deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
    }
})

export default TodoButton;