import React, {useState} from "react";


const EditTodoForm = ({editTodo, task}) => {
  const [updatedTask, setUpdatedTask] = useState(task.task)

  const handlechange = (e) => setUpdatedTask(e.target.value);

  const handleSubmit = e => { 
    e.preventDefault();
    editTodo(updatedTask, task.id);

    setUpdatedTask("")

  }
  return (
    <form  className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" 
      value={updatedTask}
      placeholder="Update Task"
      onChange={handlechange}/>
      <button className="todo-btn" type="submit">Update task</button>
    </form>
  );
};

export default EditTodoForm;
