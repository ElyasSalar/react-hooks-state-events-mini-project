import React,{useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const newTask = {
    text: text,
    category: category
  }

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleTextChange = (event) => setText(event.target.value);
  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if(newTask.text && newTask.category) onTaskFormSubmit(newTask);
    else alert('Please fill text and category fields');
  }


  return (
    <form className="new-task-form" onSubmit={handleTaskSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {
            categories.map((category, index) => <option key={index}>{category}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
