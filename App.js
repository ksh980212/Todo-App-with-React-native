import React, {Component} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Heading from './app/Heading';
import Input from './app/Input';
import Button from './app/Button';
import TodoList from './app/todo/TodoList';

let todoIndex = 0;

class App extends Component{

  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: []
    }
  }

  inputChange = (inputValue) => {
    this.setState({inputValue});
  }

  submitTodo = () => {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({
      todos, inputValue: ''
    }, () => {
      console.log("State: ", this.state);
    })

  }

  toggleComplete = (todoIndex) => {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    })
    this.setState({todos})
  }
  
  deleteTodo = (todoIndex) => {
    let todos = this.state.todos;
    todos = todos.filter(todo => {
      todo.todoIndex !== todoIndex
    })
    this.setState({todos})
  }

  render() {

    const {inputValue, todos} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView 
          keyboardShouldPersistTaps="always"
          style={styles.content}>
          <Heading />
          <Input 
            inputvalue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <TodoList 
            deleteTodo={this.deleteTodo}
            toggleComplete={this.toggleComplete}
            todos={todos} />
          <Button 
            submitTodo={this.submitTodo}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  content: {
    marginTop: 80,
  }
});

export default App