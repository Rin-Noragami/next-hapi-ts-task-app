import { Todo, ToggleComplete } from '../types/types.d';
import Label from "../styles/LableCursor"
import Line from "../styles/Line"
import RowInput from "../styles/RowInput"

//definition of the type of one task
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}
//rendering single task with checkbox and text
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete }) => {
  return (
    <Line>
      <Label className={todo.complete? "completed" : ""}>
      <RowInput
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        />
        {todo.text}
      </Label>
    </Line>
  )
}
