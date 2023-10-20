import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({synchronize}) {
    const { show, toggleShow } = useStorageListener(synchronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p> Hubo cambios en la lista de pendientes desde otra pestaña o ventana del navegador </p>
                    <p> Por favor recargue la página para visualizar estas modificaciones</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={() => toggleShow(false)}
                    >Recargar
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert }