import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({type, setType}) => {

    return(
        <View style = {styles.container}>
            <TabBarItem 
                type = {type}
                setType = {()=> setType('All')}
                title = "All" />
            <TabBarItem 
                type = {type}
                setType = {() => setType("Active")}
                title = "Active" border />
            <TabBarItem 
                type = {type}
                setType = {() => setType("Complete")}
                title = "complete" border />
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})

export default TabBar;