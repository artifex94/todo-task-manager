import './TodoCounter.css'
import React from 'react';

function TodoCounter({ completedTodos, totalTodos, loading }) {

    const remainder = totalTodos - completedTodos;
    if (!!loading) {
        return (
            <h2 className="counter counter--loading">
                Cargando
            </h2>
        )
    } else {
        return (
            <h2 className="counter">

                <span className={`${remainder !== 0 ? 'number' : ''}`}>
                    {`${remainder === 0 ? "Ninguna" : remainder}`}
                </span>

                {` ${remainder > 1 ? "tareas" : "tarea"} ${remainder > 1 ? "pendientes" : "pendiente"}`}


            </h2>
        )
    }
}

export { TodoCounter };