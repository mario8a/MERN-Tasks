import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {

    //extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje , autenticado, registrarUsuario} = authContext;

    //En caso de que el usuario se haya autenticado o registrado o registro dupliado
    useEffect(() => {

        if(autenticado) {
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    },[mensaje, autenticado, props.history])

    //state para iniiar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //extrear el email y el password
    const {nombre ,email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    //cuando el usuairo quiere iniciar sesion

    const onSubmit = (e) => {
        e.preventDefault();

        //validacion que noh haya campos vacias
        if( nombre.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' || 
            confirmar.trim() === '') {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }
        
        //Password minimimo 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe tener al menos 6 caracteres', 'alerta-error');
            return;
        }

        //revisar que los dos password sean iguales
        if(password !== confirmar) {
            mostrarAlerta('Los password no coindicen', 'alerta-error');
            return;
        }

        // Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        });
    }

    return ( 
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Crear cuenta</h1>

                <form action="" onSubmit={onSubmit}>

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            name="nombre" 
                            id="nombre" 
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange} />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange} />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={password}
                            placeholder="Tu password"
                            onChange={onChange} />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input 
                            type="password" 
                            name="confirmar" 
                            id="confirmar"
                            value={confirmar}
                            placeholder="Repite tu password"
                            onChange={onChange} />
                    </div>


                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrar"/>
                    </div>
                </form>

                <Link to="/" className="enlace-cuenta">
                    Iniciar Sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta  ;