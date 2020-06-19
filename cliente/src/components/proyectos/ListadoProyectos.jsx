import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
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
            <TransitionGroup>
                {
                    proyectos.map(proyecto => (
                        <CSSTransition  key={proyecto.id}  timeout={200} classNames="proyecto">
                            <Proyecto
                                proyecto={proyecto}
                            />  
                        </CSSTransition>
                    ))
                }   
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;