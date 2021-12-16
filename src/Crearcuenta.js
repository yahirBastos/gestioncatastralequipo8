import Sidebar from "./Componentes/Sidebar";
import Navbar from "./Componentes/Navbar";
import Formcrearcuenta from "./Componentes/Formcrearcuenta/";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Crearcuenta = ()=> {
    const navegacion = useNavigate()

    const datosFormulario = (data) => {
        fetch("http://localhost:3030/api/crear_usuario", {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => navegacion("/gestionaru"));
    }
    return (

        <div id="wrapper">

            {/* <!-- Sidebar --> */}
            <Sidebar
                href0={"/Dashboard"} primephoto={"assets/Logogcm.png"}
                href1={"/Dashboard"} icon1={"fas fa-house-user"} card1={"Dashboard"}
                titulo={"Gestiones"}
                href2={"#"} icon2={"fas fa-tasks"} card2={"Gestionar Pedidos"}
                card2_1={"Gestionar Pedidos"} href1card2={"/Crearpredios"} name1card2={"Crear Predios"} href2card2={"/editarpredios"} name2card2={"Editar Predios"} href3card2={"/eliminarpredios"} name3card2={"Eliminar Predios"}
                href3={"#"} icon3={"fas fa-house-user"} card3={"Gestionar Usuarios"}
                card3_1={"Gestionar Usuarios"} href1card3={"/Crearcuenta"} name1card3={"Crear Usuarios"} href2card3={"/Gestionaru"} name2card3={"Editar Usuarios"} href3card3={"/Eliminaruser"} name3card3={"Eliminar Usuarios"}
                titulo2={"Pagos"}
                href4={"/cobros"} icon4={"far fa-money-bill-alt"} card4={"Cobros"}
                href5={"/aprobconvenios"} icon5={"fas fa-handshake"} card5={"Convenios de Pagos"}
                href6={"/multas"} icon6={"fas fa-dollar-sign"} card6={"Multas"}
                href7={"/fechaspago"} icon7={"fas fa-calendar-alt"} card7={"Fechas de Pagos y Descuentos"}
                href8={"/"} icon8={"fas fa-sign-out-alt"} card8={"Cerrar Sesión"}
            />
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}
                    <Navbar linksearch={"#"} linknotifi={"#"} contadornotifi={"3+"} linkncontenidonotifi1={"#"} fechanotific={"2/Dic/2021"}
                        contenidonotifi={"Recibo Pagado"} linkncontenidonotifi2={"#"} fechanotific2={"2/Dic/2021"} contenidonotifi2={"Recibo Pagado"} linkncontenidonotifi3={"#"} fechanotific3={"5/Nov/2021"}
                        contenidonotifi3={"Recibo Pagado"} linkmensajes={"#"} contadormensajes={"4+"} contenidomensajes={"Recibo Pagado"} linkncontenidomensaje={"#"} contadormensaje={"3+"} contenidomensaje={"Pago de Recibo"} remitentemensaje={"Norma Diaz"}
                        linkncontenidomensaje2={"#"} contenidomensaje2={"Recibo Pagado"} remitentemensaje2={"Martin Perez"} contenidomensaje3={"Recibo Pagado"} remitentemensaje3={"Maria Perez"} linkncontenidomensaje3={"#"}
                        nombredueño={"Pablo Guerrero"} />
                    {/* <!-- End of Topbar --> */}

                    {/* <!-- Begin Form Page --> */}
                    <Formcrearcuenta procDatos={datosFormulario} titulo={"Crear Nueva Cuenta"} codigodeusuario={"codigodeusuario"} niveldeusuario={"Nivel"} nombres={"nombre"} apellidos={"apellido"} gender={"gender"}
                        telefono={"Telefono"} tipodocumento={"tipodocumento"} numerodocumento={"documento"} email={"email"} contraseña={"contrasena"} repcontraseña={"repcontrasena"} nombreboton={"Registrar Cuenta"} />

                </div>
            </div>
        </div>
    )
}
export default Crearcuenta;