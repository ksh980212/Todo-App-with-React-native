import React from 'react';
import {View, StyleSheet} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos, toggleComplete, deleteTodo}) => {

    todos = todos.map((todo, i) => {
        return(
            <Todo 
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                todo={todo}
                key={i} />
        );
    })

    return(
        <View style={styles.todoListContainer}>
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