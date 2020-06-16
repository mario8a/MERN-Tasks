import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props => {
    //Este state cuando pase a true se mostrara el form para agregar un proyecto nuevo
    const initialState = {
        formulario: false
    }

    //Dispatch para crear las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD

    //Provider desde aqui nacen los datos
    /**props.children- los diferentes hijos de este provider se pasen los datos en todos los
     * componentes
     */
    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;