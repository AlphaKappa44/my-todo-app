import './Input.css';

function TodoCheckBox() {
    return (
        <div className="input-field checkbox">
            <input type="checkbox" id="addtodo" name="addtodo" value="addtodo"></input>
            <label htmlFor="addtodo">Il faut vraiment faire cette chose là !</label>
        </div>
    );
}

export default TodoCheckBox;