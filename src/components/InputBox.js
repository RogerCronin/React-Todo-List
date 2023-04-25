import "./InputBox.scss";

export default function InputBox({ inputValue, setInputValue, addTodo }) {
    const handleKeyDown = e => {
        if(e.keyCode === 13) addTodo();
    }

    return (
        <div className="InputBox">
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Add New"
                onKeyDown={handleKeyDown}
            ></input>
        </div>
    );
}