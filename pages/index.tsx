import { useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Todo, ToggleComplete, AddTodo } from '../types/types.d';
import { ThemeProvider } from "styled-components";
import { myTheme } from '../styles/Color-theme';
import AppTodostyle from '../styles/AppToDo';
import Title from '../styles/Title';

function App() {
  //task list array definition
  const [todos, setTodos] = useState<Array<Todo>>([]);
  //action with a task - mark completed
  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  //task action - add a new task to the list
  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };
  //rendering theme, styles, title, new task input form and task list
  return (
    <ThemeProvider theme={myTheme}>
      <AppTodostyle>
        <Title>
        Task list
        </Title>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete}/>
      </AppTodostyle>
    </ThemeProvider>
  );
};

export default App;