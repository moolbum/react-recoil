import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/config";
import { setTodo } from "../../store/slices/todoSlice";

interface TodoItem {
  id: number;
  title: string;
  checked: boolean;
}

const Todo = () => {
  const { todoList } = useAppSelector((state) => state.todo);
  const [inputTitle, setInputTitle] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const insertItem: TodoItem = {
      id: !todoList.length
        ? 0
        : Math.max(...todoList.map((item) => item.id)) + 1,
      title: inputTitle,
      checked: false,
    };
    const setTodoList = [...todoList, insertItem];

    dispatch(setTodo(setTodoList));
    setInputTitle("");
  };

  const onToggle = (id: number) => {
    const setTodoList = [...todoList];
    const toggleIndex = setTodoList.findIndex((item) => item.id === id);
    const toggleItem = { ...setTodoList[toggleIndex] };

    toggleItem.checked = !toggleItem.checked;
    setTodoList[toggleIndex] = { ...toggleItem };
    dispatch(setTodo(setTodoList));
  };

  const onRemove = (id: number) => {
    const setTodoList = [...todoList];
    const removeIndex = setTodoList.findIndex((item) => item.id === id);

    setTodoList.splice(removeIndex, 1);
    dispatch(setTodo(setTodoList));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={inputTitle} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
      <div>
        {todoList.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              readOnly={true}
              onClick={() => onToggle(item.id)}
            />
            <span
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.title}
            </span>
            <button onClick={() => onRemove(item.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
