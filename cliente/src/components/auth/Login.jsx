import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    //extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje , autenticado, iniciarSesion} = authContext;

    //En caso de que el usuario o password no exista
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
        email: '',
        password: ''
    });

    //extrear el email y el password
    const {email, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }
    //cuando el usuairo quiere iniciar sesion

    const onSubmit = (e) => {
        e.preventDefault();

        //validacion de campos vacias
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
        }

        // Pasarlo al action
        iniciarSesion({email,password})
    }

    return ( 
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form action="" onSubmit={onSubmit}>
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión"/>
                    </div>
                </form>

                <Link to="/nueva-cuenta" className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;