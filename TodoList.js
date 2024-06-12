import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, addTask, toggleTask, deleteTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit" className='addbtn'>Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
