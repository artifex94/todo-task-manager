import React from "react";
import './CreateTodoForm.css'
import { TodoContext } from "../../TodoContext";

function CreateTodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}
            className="newTodoForm">
            <label form="newTodo" className="newTodoForm-title">Lo próximo que haré</label>
            <textarea required
                name="newTodo"
                className="newTodoForm-textArea"
                placeholder="va a ser ..."
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="newTodoForm-ButtonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >¡Listo!</button>
            </div>


        </form>

    );
}

export { CreateTodoForm }