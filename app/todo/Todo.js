import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TodoButton from './TodoButton';

const Todo = ({todo, toggleComplete, deleteTodo}) => {

    return(
        <View style = {styles.todoContainer}>
            <Text style = {styles.todoText}>
                {todo.title}
            </Text>
            <View style = {styles.buttons}>
                <TodoButton 
                    complete = {todo.complete}
                    onPress = {() => {toggleComplete(todo.todoIndex)}}
                    name = "Done" />
                <TodoButton 
                    onPress = {() => {deleteTodo(todo.todoIndex)}}
                    name = "Delete" />
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 14,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 2, heigth: 2},
    },
    todoText: {
        fontSize: 17
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center'
    }
})

export default Todo;