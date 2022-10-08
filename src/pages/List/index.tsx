import { useState } from "react";

import {
  Container,
  InputContainer,
  TodoContainer,
  TodosBox,
  Divider,
} from "./styles";

const List = () => {
  type TodosType = {
    id: number;
    checked: boolean;
    title: string;
  };

  const [todos, setTodos] = useState<TodosType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleToggleChecked = (id: number) => {
    let todoIndex = todos.findIndex((todo) => {
      return todo.id == id;
    });

    const tempTodos = [...todos];
    tempTodos[todoIndex].checked = !tempTodos[todoIndex].checked;
    setTodos(tempTodos);
  };

  const newTodo = (value: string) => {
    let max = 100;
    let todo: TodosType = { id: 1, title: "", checked: true };

    if (value.length == 0) {
      return alert("O título não pode ser vazio");
    } else {
      todo = {
        id: Math.random() * max,
        title: value,
        checked: false,
      };
    }

    setTodos([...todos, todo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id: number) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <Container>
      <InputContainer>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="Type what you have to do..."
        />
        <button onClick={() => newTodo(inputValue)}>Add</button>
      </InputContainer>

      <TodosBox>
        {todos?.map((todo, index) => (
          <div key={`todo_key_${index}`}>
            <TodoContainer
              className={[todo?.checked && `checked`]
                .join(" ")}
            >
              <div>
                <input
                  className="input_checkbox"
                  type="checkbox"
                  checked={todo.checked}
                  onClick={() => handleToggleChecked(todo?.id)}
                />
                <p>{todo?.title}</p>
              </div>
              <button onClick={() => handleDeleteTodo(todo?.id)}>
                <img src="../../../public/assets/lixeira.png" alt="trash" />
              </button>
            </TodoContainer>

            <Divider />
          </div>
        ))}
      </TodosBox>
    </Container>
  );
};

export default List;
