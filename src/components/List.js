import "./List.scss";

export default function List({ todos, toggleComplete, deleteItem, filter, searching, inputValue }) {
    let filterFunction;
    if(filter === 1) filterFunction = item => !item.checked; // active
    else if(filter === 2) filterFunction = item => item.checked; // completed
    else filterFunction = () => true; // default is all
    if(searching) filterFunction = item => item.label.toLowerCase().includes(inputValue.toLowerCase());

    return (
        <div className="List">
            {
                todos.filter(filterFunction).map((item, i) => {
                    return (
                        <div key={item.id}>
                            { i !== 0 ? <hr/> : "" }
                            <Item
                                label={item.label}
                                checked={item.checked}
                                onChange={() => toggleComplete(item.id)}
                                onDelete={() => deleteItem(item.id)}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

function Item({ label, checked, onChange, onDelete }) {
    return (
        <div className="Item">
            <input type="checkbox" onChange={onChange} checked={checked}></input>
            <p style={{
                color: checked ? "var(--color-gray)" : "black",
                textDecoration: checked ? "line-through" : "none",
            }}>
                {label}
            </p>
            { checked ? <span onClick={onDelete}>🗑️</span> : "" }
        </div>
    );
}