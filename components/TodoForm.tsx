import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodo } from '../types/types.d';
import Button from '../styles/Button';
import Form from '../styles/Form';
import Inputstyle from '../styles/Inputstyle';

//defining the type of a new task
interface TodoFormProps {
  addTodo: AddTodo;
}
//customizing the form for entering new tasks
export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
//event for entering a new task
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }
//button click event
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }
//rendering a form with an input field and a button
  return (
    <Form className="todo-form">
      <Inputstyle type="text" value={newTodo} placeholder="Enter a new task" onChange={handleChange} />
        <Button type="submit" onClick={handleSubmit}>
          Create
        </Button>
    </Form>
  )
};
