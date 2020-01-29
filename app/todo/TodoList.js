import React from 'react';
import {View, StyleSheet} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, toggleComplete, deleteTodo, type}) => {

    const getVisibleTodos = (todos, type) => {
        switch(type) {
            case 'All' :
                return todos;
            case 'Complete' :
                return todos.filter(t => t.complete);
            case 'Active':
                return todos.filter(t => !t.complete);
        }
    }

    todos = getVisibleTodos(todos, type);
    todos = todos.map((todo, i) => {
        return(
            <Todo 
                deleteTodo = {deleteTodo}
                toggleComplete = {toggleComplete}
                todo = {todo}
                key = {i} />
        );
    })

    return(
        <View style = {styles.todoListContainer}>
            {todos}
        </View>
    );
    
}

const styles = StyleSheet.create({
    todoListContainer: {
        marginTop: 15
    }
})

export default TodoList;