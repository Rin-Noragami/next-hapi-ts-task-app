//new tasks are of type string
export type AddTodo = (newTodo: string) => void;
//task has the form of a string and a boolean value
export type Todo = {
  text: string;
  complete: boolean;
}
//completion selection consists of a task
export type ToggleComplete = (selectedTodo: Todo) => void;