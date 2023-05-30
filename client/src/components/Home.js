import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


const Home = () => {
  const [List, setlist]= useState(["task1"]);
  const [input, setInput]= useState("");


  
  const addTodo = (Todo) => {
    const newtodo = {
      id: Math.random(),
      Todo: Todo
    };
      //Add the todo to the  list
      setlist([...List, newtodo]);

      //clear input box
      setInput("");
    };

      const  deletetodo = (id) =>  {
        //filter out todo with the id
        const newList = List.filter((Todo) => Todo.id !== id);

        setlist(newList);

        };
       
      return ( 

    <div>
 <input type='text'
  value={input}
   onChange={(e) => setInput(e.target.value)}
 />
 {console.log(setInput)}
  <Button onClick={() => addTodo(input)}>Add</Button>  
{console.log("list :",List)}
    <ul>
      {List.map((todo) => (
        <li key={todo.id}>
          {todo.Todo}
          <button onClick={() => deletetodo(todo.id)}>deletetodo</button>
        </li>
      ))}
    </ul> 
    </div>
  );
}

export default Home;
