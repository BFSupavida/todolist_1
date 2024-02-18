import React, {useState} from "react";


const TodoForm = ({addTodo}) => {
  const [updatedTask, setUpdatedTask] = useState("")
  const handlechange = (e) => setUpdatedTask(e.target.value);
  const handleSubmit = e => { 
    e.preventDefault();
    addTodo(updatedTask);

    setUpdatedTask("")

  }
  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" 
      value={updatedTask}
      placeholder="What is the task today?"
      onChange={handlechange}/>
      <button className="todo-btn" type="submit">Add task</button>
    </form>
  );
};

export default TodoForm;
