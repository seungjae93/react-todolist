import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "공부", comment: "리액트 공부하기", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const onChangeTitleInput = (event) => {
    setTitle(event.target.value);
  };
  const onChangeCommentInput = (event) => {
    setComment(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (!title || !comment) return;
    const newTodo = {
      id: todos.length + 1,
      title: title,
      comment: comment,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteUserHandler = (id) => {
    const NewTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(NewTodoList);
  };

  const onEditHandler = (id) => {
    const NewTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(NewTodoList);
  };

  return (
    <div className="container">
      <div className="div-container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form className="form-container">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            className="add-input"
            onChange={onChangeTitleInput}
            placeholder="제목을 입력해주세요."
            value={title}
          />

          <label className="form-label">내용</label>
          <input
            className="add-input"
            onChange={onChangeCommentInput}
            placeholder="내용을 입력해주세요."
            value={comment}
          />
        </div>
        <CustomButton onClick={addUserHandler}>추가하기</CustomButton>
      </form>

      <h2>Working..🐤</h2>
      <div className="list-wrap">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                handleDelete={deleteUserHandler}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2>Done..! 🐔</h2>
      <div className="list-wrap">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                handleDelete={deleteUserHandler}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default App;
