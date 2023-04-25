import Header from "./Header";
import InputBox from "./InputBox";
import List from "./List";
import { useState } from "react";

import Footer from "./Footer";

import "./MainContainer.scss";

export default function MainContainer() {
    const [_key, _setKey] = useState(0);
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const getKey = () => {
        _setKey(_key + 1);
        return _key;
    };

    const addTodo = () => {
        const value = inputValue.trim();
        if(value === "") return;
        setTodos([...todos, { label: value, checked: false, id: getKey() }]);
        setInputValue("");
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => {
            if(todo.id === id) todo.checked = !todo.checked;
            return todo;
        }));
    }

    return (
        <div className="MainContainer">
            <div className="ElementWrapper">
                <Header/>
                <InputBox
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    addTodo={addTodo}
                />
                <List
                    todos={todos}
                    toggleComplete={toggleComplete}
                />
            </div>
            <Footer
                todos={todos}
                addTodo={addTodo}
            />
        </div>
    );
}