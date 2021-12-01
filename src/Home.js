import { Link } from "react-router-dom";
import Frases from "./Componentes/Frases/";
import Tarjeta from "./Componentes/Tarjeta/";
import Imagen from "./Componentes/Imagen/";
import Tarjeta2 from "./Componentes/Tarjeta2";
import Barrahome from "./Componentes/Barrahome";

function Home() {
  return (
    <><nav className="navbar navbar-expand-lg navbar-dark bg-smorange">
      {/* <!-- Responsive navbar Home 1git--> */}
      <Barrahome imagen = {"assets/Logogcm.png"} alt = {"Logo_GC_Magdalena"} linkinicio = {"/"} linkpolitica = {"#"} linkregistrar = {"/Register"} linklog = {"/Login"}/>
      {/* <!-- Page Content--> */}
    </nav><div className="container px-4 px-lg-5">
        {/* <!-- Heading Row--> */}
        <div className="row gx-4 gx-lg-5 align-items-center my-5">
          <Imagen imagen = {"assets/santamarta.jpg"}/>
          <Tarjeta2 titulo = {"Gestión Catastral - Santa Marta"} texto = {"La Gestión Catastral es un servicio público que comprende el conjunto de operaciones técnicas y administrativas necesarias para el desarrollo adecuado de los procesos de formación, actualización, conservación y difusión de la información catastral, por medio de los cuales se logra la identificación y mantenimiento permanente de la información física, jurídica y económica de los bienes inmuebles de Santa Marta."} link = {"/Register"}/>
        </div>
        {/* <!-- Call to Action--> */}
        <Frases frase = {"Ya puedes liquidar y pagar tu impuesto predial unificado 2021. ¡Con tu aporte Santa Marta seguirá siendo imparable!"}/>
        {/* <!-- Content Row--> */}
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <Tarjeta titulo={"Consulta tu Estado de Cuenta"} texto={"Ingresa aquí para consultar el estado de cuenta de tu predio, liquidar tu impuesto predial actual y vigencias anteriores y pagar en línea"} imagen={"assets/cont1 (1).png"} link={"/Login"} />
          </div>
          <div className="col-md-4 mb-5">
            <Tarjeta titulo={"Calendario de Pagos"} texto={"Consulte el calendario con las fechas límite de pago para el impuesto predial de su inmueble, y demás obligaciones; y acójase además a un beneficio de descuento adicional sobre el valor total del impuesto por pronto pago."} imagen={"assets/cont1.png"} link={"/Login"} />
          </div>
          <div className="col-md-4 mb-5">
            <Tarjeta titulo={"Solicitar Convenio de Pagos"} texto={"Haz click aquí para liquidar y/o pagar el recibo de tu impuesto predial por abonos, puedes pagar tu recibo en cuotas mensuales sin intereses; o incluso puedes suscribir un convenio de pago acogiéndote a la normativa vigente. Solicita más información de financiación y facilidades de pago."} imagen={"assets/cont1 (2).png"} link={"/Login"} />
          </div>
      </div>
    </div></>
  );
}

export default Home;
