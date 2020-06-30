import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoProyectos = () => {
    //extraer proyectos de state inicial
    /**Con esta esta linea todas las funciones y el state definido se va poder acceder */
    const proyectosContext = useContext(proyectoContext);
    const {mensaje, proyectos, obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {
        //si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }

        obtenerProyectos();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mensaje])

    //si no hay proyectos no mestres pus n ada
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p> ;


    return ( 
        <ul className="listado-proyectos">
            {alerta? (<div className={`alerta ${alerta.categoria}`} > {alerta.msg} </div>) : null}
            <TransitionGroup>
                {
                    proyectos.map(proyecto => (
                        <CSSTransition  key={proyecto._id}  timeout={200} classNames="proyecto">
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