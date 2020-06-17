import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyecto, eliminaProyecto} = proyectosContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    /**Debido a que proyecto es un arreglo se debe acceder segun su pocicion, es
     * por esa razon que se aplica array destructuring 
     */
    const [proyectoActual] = proyecto;


    const tareasProyecto = [
        {nombre: 'Elegir plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir plataformas de pago', estado: true},
        {nombre: 'Elegir Hosting', estado: false},
    ];

    //eliminar un proyecto
    const onClickEliminar = () => {
        eliminaProyecto(proyectoActual.id)
    }

    return ( 

        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
                {
                    tareasProyecto.length === 0
                    ?  (<li className="tarea"><p>No hay tareas</p></li>)
                    :   tareasProyecto.map(tarea => (
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