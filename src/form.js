import React from 'react';
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';

const Todoform = () => {
  const [Todo, setTodo] = useState('');
  const [Todos,setTodos] = useState([]);

  function todoChange(e){
    e.preventDefault()
    setTodo(e.target.value)
  }

    function todoArray(e){
      e.preventDefault()
      if(Todo ===" ") return
      console.log(Todo);
      setTodos ([...Todos ,{id: Date.now(),text:Todo}])
      e.target.reset();
      console.log(Todos);
    }
      

  
    return (
      <form onSubmit={todoArray}>
        <TextField variant="outlined" placeholder="Add todo" margin="normal" onChange={todoChange}/>

      </form>
    );
};
  
  
  export default Todoform