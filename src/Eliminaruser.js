import Sidebar from "./Componentes/Sidebar/";
import Navbar from "./Componentes/Navbar";
import Data from './jsons/users.js';
import React from "react";
import Boton from "./Componentes/Boton";

function Eliminaruser() {
    return (
        <><div id="wrapper">

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
                        nombredueño={"Pablo Guerrero"}
                    />
                    {/* <!-- End of Topbar --> */}

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Gestionar usuario</h1>
                        </div>

                        {/* <!-- Content Row --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-warning text-uppercase mb-1">Lista de Usuarios</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Codigo</th>
                                                <th>Nivel</th>
                                                <th>Nombre</th>
                                                <th>Apellido</th>
                                                <th>Telefono</th>
                                                <th>Documento</th>
                                                <th>Correo Electronico</th>
                                                <th>Contraseña</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Codigo</th>
                                                <th>Nivel</th>
                                                <th>Nombre</th>
                                                <th>Apellido</th>
                                                <th>Telefono</th>
                                                <th>Documento</th>
                                                <th>Correo Electronico</th>
                                                <th>Contraseña</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>

                                            {Data.users.map((users1, index) => {
                                                return (
                                                    <tr key={users1.codigo}>
                                                        <td>{users1.codigo}</td>
                                                        <td>{users1.nivel}</td>
                                                        <td>{users1.nombre}</td>
                                                        <td>{users1.apellido}</td>
                                                        <td>{users1.telefono}</td>
                                                        <td>{users1.documento}</td>
                                                        <td>{users1.email}</td>
                                                        <td>{users1.contrasena}</td>
                                                        <td>{<Boton link = {"#"} codigo ={users1.codigo} texto ={"Eliminar"}/>}</td>
                                                    </tr>
                                                );
                                            })}


                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div></>
    );
}

export default Eliminaruser;