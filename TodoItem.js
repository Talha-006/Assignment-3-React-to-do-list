import React, { useState } from 'react';

const TodoItem = ({ task, index, toggleTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    task.text = newText;
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        task.text
      )}
      <button class="delcol" onClick={() => deleteTask(index)}>Delete</button>
      {isEditing ? (
        <button class="savecol" onClick={handleSave}>Save</button>
      ) : (
        <button class="editcol" onClick={handleEdit}>Edit</button>
      )}
    </li>
  );
};

export default TodoItem;
