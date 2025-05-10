import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [todos, setToDos] = useState(() => {
    const local = localStorage.getItem("todos");
    return local ? JSON.parse(local) : [];
  });

  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault(); // ngăn chặn người dùng load lại trang

    if (inputValue) {
      setToDos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>To Do List</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Input to do list"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todolist;
