import { TodoContext } from '../../TodoContext';
import './TodoCounter.css'
import React from 'react';

function TodoCounter() {

    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);
    
const remainder = totalTodos - completedTodos;
    return(
        <h2 className='counter'>
            <span className={`${remainder !== 0 ? 'number' : ''}`}>
                {`${remainder === 0 ? "Ninguna" : remainder }`}
            </span> 
            {` ${remainder > 1 ? "tareas":"tarea" } ${remainder > 1 ? "pendientes":"pendiente" }`}

        </h2>
    );
}

export {TodoCounter};