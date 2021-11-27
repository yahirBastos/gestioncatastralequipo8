import { Link} from "react-router-dom";

function Home() {
  return (
    <><nav className="navbar navbar-expand-lg navbar-dark bg-smorange">
      {/* <!-- Responsive navbar Home--> */}
      <div className="container px-5">
        <div className="navbar-brand"><img className="gobernacionmag" src="assets/Logogcm.png" alt="Logo_GC_Magdalena" /></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" class="nav-link active" aria-current="page">Inicio</Link></li>
            <li className="nav-item"><a className="nav-link" href="#!">Politica de Privacidad</a></li>
            <li className="nav-item"><Link to="/Register" className="nav-link">Registrar</Link></li>
            <li className="nav-item"><Link to="/Login" className="nav-link">Iniciar Sesion</Link></li>
          </ul>
        </div>
      </div>
    {/* <!-- Page Content--> */}
    </nav><div className="container px-4 px-lg-5">
        {/* <!-- Heading Row--> */}
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="assets/santamarta.jpg" alt="..." /></div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Gestión Catastral - Santa Marta</h1>
            <p>La <b>Gestión Catastral</b> es un servicio público que comprende el conjunto de operaciones técnicas y administrativas necesarias para el desarrollo adecuado de los procesos de formación, actualización, conservación y difusión de la información catastral, por medio de los cuales se logra la identificación y mantenimiento permanente de la información física, jurídica y económica de los bienes inmuebles de Santa Marta.</p>
            <Link to="/Register" className="btn btn-primary btn-sm">¡Registrar Aquí!</Link>
          </div>
        </div>
        {/* <!-- Call to Action--> */}
        <div className="card text-white bg-secondaryh my-5 py-4 text-center">
          <div className="card-body2"><p className="text-white m-0">Ya puedes liquidar y pagar tu impuesto predial unificado 2021. ¡Con tu aporte Santa Marta seguirá siendo imparable!</p></div>
        </div>
        {/* <!-- Content Row--> */}
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-bodyh">
                <h2 className="card-title">Consulta tu Estado de Cuenta</h2>
                <div className="text-img">
                  <img className="cont1" src="assets/cont1 (1).png" alt="cont1" /><p className="card-text">Ingresa aquí para consultar el estado de cuenta de tu predio, liquidar tu impuesto predial actual y vigencias anteriores y pagar en línea.</p>
                </div>
              </div>
              <div className="card-footer"><Link to="/Login" className="btn btn-primary btn-sm">Más Información </Link></div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-bodyh">
                <h2 className="card-title">Calendario de Pagos</h2>
                <div className="text-img">
                  <img className="cont1" src="assets/cont1.png" alt="cont1" /><p className="card-text">Consulte el calendario con las fechas límite de pago para el impuesto predial de su inmueble, y demás obligaciones; y acójase además a un beneficio de descuento adicional sobre el valor total del impuesto por pronto pago.</p>
                </div>
              </div>
              <div className="card-footer"><Link to="/Login" className="btn btn-primary btn-sm">Más Información </Link></div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-bodyh">
                <h2 className="card-title">Solicitar Convenio de Pagos</h2>
                <div className="text-img">
                  <img className="cont1" src="assets\cont1 (2).png"/><p className="card-text">Haz click aquí para liquidar y/o pagar el recibo de tu impuesto predial por abonos, puedes pagar tu recibo en cuotas mensuales sin intereses; o incluso puedes suscribir un convenio de pago acogiéndote a la normativa vigente. Solicita más información de financiación y facilidades de pago.</p></div>
              </div>
              <div className="card-footer"><Link to="/Login" className="btn btn-primary btn-sm">Más Información </Link></div>
            </div>
          </div>
        </div>
      </div></>
  );
}

export default Home;
