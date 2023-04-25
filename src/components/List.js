import "./List.scss";

export default function List({ todos, toggleComplete }) {
    return (
        <div className="List">
            {
                todos.map(item => {
                    return <Item
                        label={item.label}
                        checked={item.checked}
                        onChange={() => toggleComplete(item.id)}
                        key={item.id}
                    />;
                })
            }
        </div>
    );
}

function Item({ label, checked, onChange }) {
    return (
        <div className="Item">
            <input type="checkbox" onChange={onChange} checked={checked}></input>
            <p style={{
                color: checked ? "var(--color-gray)" : "black",
                textDecoration: checked ? "line-through" : "none",
            }}>
                {label}
            </p>
        </div>
    );
}