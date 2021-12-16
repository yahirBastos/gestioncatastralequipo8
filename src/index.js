import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Crearpredios from './Crearpredios';
import Crearpredios1 from './Crearpredios1';
import Olvido from './Olvido';
import Crearcuenta from './Crearcuenta';
import Dashboardexterno from './Dashboardexterno';
import Asociarpredios from './Asociarpredios';
import Edicionpredios from './Edicionpredios';
import Edicionusuarios from './Edicionusuarios';
import Gestionaru from './Gestionaru';
import Eliminaruser from './Eliminaruser';
import Editarpredios from './Editarpredios';
import Editarpredios1 from './Editarpredios1';
import Eliminarpredios from './Eliminarpredios';
import Eliminarpredios1 from './Eliminarpredios1';
import Pagosenlinea from './Pagosenlinea';
import Dashboardinterno from './Dashboaardinterno';
import Aprobconvenios from './Aprobconvenios';
import Aprobconvenios1 from './Aprobconvenios1';
import reportWebVitals from './reportWebVitals';
import PrediosAsociadosUser from './PrediosAsociadosUser';
import Prueba from './Prueba';
import Soliconvenio from './Soliconvenio';
import Soliconvenio1 from './Soliconvenio1';
import Gestioncobros from './Gestioncobros';
import Gestionmultas from './Gestionmultas';
import Gcobrosinterno from './Gestioncobrosinterno';
import Gmultasinterno from './Gestionmultasinterno';
import Fechaspagoexterno from './Fechaspagoexterno';
import Fechaspagos from './Fechaspago';
import Fechaspagos1 from './Fechaspagos1';
import Edicionpredios1 from './Edicionpredios1';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/crearpredios" element={<Crearpredios/>}/>
       <Route path="/crearpredios1" element={<Crearpredios1/>}/>
       <Route path="/olvido" element={<Olvido/>}/>
       <Route path="/crearcuenta" element={<Crearcuenta/>}/>
       <Route path="/externo" element={<Dashboardexterno/>}/>
       <Route path="/asociarpredios" element={<Asociarpredios/>}/>
       <Route path="/edicionpredios/:id_estate" element={<Edicionpredios/>}/>   
       <Route 
       path="/edicionusuarios/:id_user" 
       element={<Edicionusuarios/>}
       />
       <Route path="/edicionpredios1/:id_estate" element={<Edicionpredios1/>}/>
       <Route path="/gestionaru" element={<Gestionaru/>}/>
       <Route path="/eliminaruser" element={<Eliminaruser/>}/>
       <Route path="/editarpredios" element={<Editarpredios/>}/>
       <Route path="/editarpredios1" element={<Editarpredios1/>}/>
       <Route path="/eliminarpredios" element={<Eliminarpredios/>}/>
       <Route path="/eliminarpredios1" element={<Eliminarpredios1/>}/>
       <Route path="/pagosenlinea" element={<Pagosenlinea/>}/>
       <Route path="/interno" element={<Dashboardinterno/>}/>
       <Route path="/aprobconvenios" element={<Aprobconvenios/>}/>
       <Route path="/aprobconvenios1" element={<Aprobconvenios1/>}/>
       <Route path="/soliconvenio" element={<Soliconvenio/>}/>
       <Route path="/soliconvenio1" element={<Soliconvenio1/>}/>
       <Route path="/cobros" element={<Gestioncobros/>}/>
       <Route path="/prediosAsociadosUser" element={<PrediosAsociadosUser/>}/>
       <Route path="/multas" element={<Gestionmultas/>}/>
       <Route path="/cobrosinterno" element={<Gcobrosinterno/>}/>
       <Route path="/multasinterno" element={<Gmultasinterno/>}/>
       <Route path="/fechaspago" element={<Fechaspagos/>}/>
       <Route path="/fechaspagos1" element={<Fechaspagos1/>}/>
       <Route path="/prueba" element={<Prueba/>}/>
       <Route path="/fechaspagoexterno" element={<Fechaspagoexterno/>}/>
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
