import "./Footer.scss"

export default function Footer({ todos, addTodo }) {
    return (
        <div className="Footer">
            <div className="Icons">
                <p onClick={addTodo}>➕</p>
                <p>🔍</p>
            </div>
            <p>{todos.length} item{todos.length === 1 ? "" : "s"} left</p>
            <div className="Labels">
                <FooterButton active={true} label="All"/>
                <FooterButton active={false} label="Active"/>
                <FooterButton active={false} label="Completed"/>
            </div>
        </div>
    );
}

function FooterButton({ active, label }) {
    return (
        <button style={{ borderWidth: active ? "1px" : "0" }}>{label}</button>
    )
}