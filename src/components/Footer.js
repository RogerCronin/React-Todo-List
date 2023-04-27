import "./Footer.scss"

export default function Footer({ todos, addTodo, filter, setFilter, toggleSearching }) {
    const todosLeft = todos.filter(item => !item.checked);

    return (
        <div className="Footer">
            <div className="Icons">
                <p onClick={addTodo}>➕</p>
                <p onClick={toggleSearching}>🔍</p>
            </div>
            <p>{todosLeft.length} item{todosLeft.length === 1 ? "" : "s"} left</p>
            <div className="Labels">
                <FooterButton active={filter === 0} onClick={() => setFilter(0)} label="All"/>
                <FooterButton active={filter === 1} onClick={() => setFilter(1)} label="Active"/>
                <FooterButton active={filter === 2} onClick={() => setFilter(2)} label="Completed"/>
            </div>
        </div>
    );
}

function FooterButton({ active, label, onClick }) {
    return (
        <button style={{ borderWidth: active ? "1px" : "0" }} onClick={onClick}>{label}</button>
    )
}