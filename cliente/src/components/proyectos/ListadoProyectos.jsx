import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    //extraer proyectos de state inicial
    /**Con esta esta linea todas las funciones y el state definido se va poder acceder */
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
    }, [])

    //si no hay proyectos no mestres pus n ada
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p> ;


    return ( 
        <ul className="listado-proyectos">
            {
                proyectos.map(proyecto => (
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                ))
            }
        </ul>
     );
}
 
export default ListadoProyectos;