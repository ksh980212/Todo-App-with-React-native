import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => {

    return(
        <View style = {styles.header}>
            <Text style = {styles.headerText}>
                Record
            </Text>
        </View>
    );
    
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30
    }, 
    headerText: {
        fontSize: 50,
        color: 'rgba(175, 47, 47, 0.25)',
        textAlign: 'center'
    }
})

export default Heading;