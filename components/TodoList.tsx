import TaskList from '../styles/Row';
import { Todo, ToggleComplete } from '../types/types.d';
import { TodoListItem } from './TodoListItem';

//defining the type of array with tasks-list
interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}
//rendering tasks as a list
export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <TaskList>
     {todos.map(todo => (
       <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
        />
     ))}
    </TaskList>
  );
};
