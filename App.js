import React, { useState, useEffect } from 'react';
import TodoList from './component/TodoList';
import Footer from './component/Footer';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task, priority) => {
    setTasks([...tasks, { text: task, completed: false, priority }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      
      <button onClick={clearCompleted} className='clearbtn'>Clear Completed</button>
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <Footer />
    </div>
  );
};

export default App;
