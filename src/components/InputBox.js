import "./InputBox.scss";

export default function InputBox({ inputValue, setInputValue, addTodo, searching }) {
    const handleKeyDown = e => {
        if(!searching && e.keyCode === 13) addTodo();
    }

    return (
        <div className="InputBox">
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder={searching ? "Search todos" : "Add new"}
                onKeyDown={handleKeyDown}
            ></input>
        </div>
    );
}