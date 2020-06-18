import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminaProyecto} = proyectosContext;

    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const {tareasproyecto} = tareasContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    /**Debido a que proyecto es un arreglo se debe acceder segun su pocicion, es
     * por esa razon que se aplica array destructuring 
     */
    const [proyectoActual] = proyecto;

    //eliminar un proyecto
    const onClickEliminar = () => {
        eliminaProyecto(proyectoActual.id)
    }

    return ( 

        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {
                    tareasproyecto.length === 0
                    ?  (<li className="tarea"><p>No hay tareas</p></li>)
                    :   tareasproyecto.map(tarea => (
                        <Tarea tarea={tarea}/>
                    ))
                }
            </ul>

            <button 
                type="button" 
                className="btn btn-eliminar"
                onClick={onClickEliminar}    
            >
                Eliminar proyecto &times;
            </button>
        </Fragment>


     );
}
 
export default ListadoTareas;