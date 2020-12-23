import React, { useState } from "react";
import Parent from './Parent'

type FormElem = React.FormEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}

function App() {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };
  const completeTodo = (index: number):void =>{
    const newTodos: ITodo[] = [...todos];
    console.log(newTodos[index].complete)
    console.log('todos', todos)
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos)
  }
  const deleteTodo = (index:number):void =>{
    let newTodos: ITodo[] = [...todos];
    newTodos = newTodos.filter((todo, todoInd)=>todoInd !==index)
    setTodos(newTodos)
  }
  return (
    <>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <React.Fragment key={index}>
          <div style={{textDecoration: todo.complete? 'line-through':''}} key={index}>{todo.text}</div>
          <button type='button' onClick={()=>completeTodo(index)}>{todo.complete?'Incomplete':'Complete'}</button>
          <button type='button' onClick={()=>deleteTodo(index)}>delete</button>
          {console.log(todo.complete,'todo.complete')}
          </React.Fragment>
        ))}
      </section>
      <Parent />
    </>
  );
}

export default App;
