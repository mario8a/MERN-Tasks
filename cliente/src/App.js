import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/proyecos" component={Proyectos} />
      </Switch>
    </Router>
  );
}

export default App;


/**Todo dentro de switch seran cada una de las diferentes paginas
 * Lo que este por fuera sera lo que se va haber en todas las paginas
 */