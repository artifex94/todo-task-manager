import react from "react";

function EmptySearchedTodos ({searchText}){

    return(
        <p>No existe la tarea " {`${searchText}`} "
            <br />
        ¡Puedes anotarla!</p>
    )
}

export {EmptySearchedTodos}