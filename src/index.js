import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Crearpredio from './Crearpredios';
import Olvido from './Olvido';
import Crearcuenta from './Crearcuenta';
import Dashboardexterno from './Dashboardexterno';
import Asociarpredios from './Asociarpredios';
import Edicionpredios from './Edicionpredios';
import Edicionusuario from './Edicionusuarios';
import Gestionaru from './Gestionaru';
import Eliminaruser from './Eliminaruser';
import Editarpredios from './Editarpredios';
import Eliminarpredios from './Eliminarpredios';
import Pagosenlinea from './Pagosenlinea';
import Dashboardinterno from './Dashboaardinterno';
import Aprobconvenios from './Aprobconvenios';
import reportWebVitals from './reportWebVitals';
import PrediosAsociadosUser from './PrediosAsociadosUser';
import Soliconvenio from './Soliconvenio';
import Gestioncobros from './Gestioncobros';
import Gestionmultas from './Gestionmultas';
import Gcobrosinterno from './Gestioncobrosinterno';
import Gmultasinterno from './Gestionmultasinterno';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/crearpredio" element={<Crearpredio/>}/>
       <Route path="/olvido" element={<Olvido/>}/>
       <Route path="/crearcuenta" element={<Crearcuenta/>}/>
       <Route path="/externo" element={<Dashboardexterno/>}/>
       <Route path="/asociarpredio" element={<Asociarpredios/>}/>
       <Route path="/edicionpredios" element={<Edicionpredios/>}/>   
       <Route path="/edicionusuarios" element={<Edicionusuario/>}/>
       <Route path="/gestionaru" element={<Gestionaru/>}/>
       <Route path="/eliminaruser" element={<Eliminaruser/>}/>
       <Route path="/editarpredios" element={<Editarpredios/>}/>
       <Route path="/eliminarpredios" element={<Eliminarpredios/>}/>
       <Route path="/pagosenlinea" element={<Pagosenlinea/>}/>
       <Route path="/interno" element={<Dashboardinterno/>}/>
       <Route path="/aprobconvenios" element={<Aprobconvenios/>}/>
       <Route path="/soliconvenio" element={<Soliconvenio/>}/>
       <Route path="/cobros" element={<Gestioncobros/>}/>
       <Route path="/prediosAsociadosUser" element={<PrediosAsociadosUser/>}/>
       <Route path="/multas" element={<Gestionmultas/>}/>
       <Route path="/cobrosinterno" element={<Gcobrosinterno/>}/>
       <Route path="/multasinterno" element={<Gmultasinterno/>}/>
       

     </Routes>
   </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
