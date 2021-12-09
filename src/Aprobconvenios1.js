import Sidebar from "./Componentes/Sidebar/";
import Navbar from "./Componentes/Navbar";

import Boton from "./Componentes/Boton";
import Data from './jsons/convenios.js';
    


function Aprobconvenios1() {
    return (
        <><div id="wrapper">

            {/* <!-- Sidebar --> */}
            <Sidebar 
                href0={"/interno"} primephoto={"assets/Logogcm.png"}
                href1={"/interno"} icon1={"fas fa-house-user"} card1={"Dashboard"}
                titulo={"Gestiones"}
                href2={"#"} icon2={"fas fa-tasks"} card2={"Gestionar Pedidos"}
                card2_1={"Gestionar Pedidos"} href1card2={"/Crearpredios1"} name1card2={"Crear Predios"} href2card2={"/editarpredios1"} name2card2={"Editar Predios"} href3card2= {"/eliminarpredios1"} name3card2={"Eliminar Predios"}
                href3={"/soliconvenio1"} icon3={"fas fa-handshake"} card3={"Solicitar Convenios de Pagos"}
                card3_1={"Convenios de Pagos"} href1card3={"aprobconvenios1"} name1card3={"Convenios de Pagos"}
                titulo2={"Pagos"}
                href4={"/cobrosinterno"} icon4={"far fa-money-bill-alt"} card4={"Cobros"}
                href5={"/fechaspagos1"} icon5={"fas fa-calendar-alt"} card5={"Fechas de Pagos y Descuentos"}
                href6={"/multasinterno"} icon6={"fas fa-dollar-sign"} card6={"Multas"}
                href7={"/"} icon7={"fas fa-sign-out-alt"} card7={"Cerrar Sesión"}
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
                            <h1 className="h3 mb-0 text-gray-800">Aprobar Convenios</h1>
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
                                                <th>Codigo predio</th>
                                                <th>Nombre del propietario</th>
                                                <th>Documento</th>
                                                <th>Area</th>
                                                <th>Area Construida</th>
                                                <th>Dirección</th>
                                                <th>Barrio</th>
                                                <th>Estrato</th>
                                                <th>Aprobar</th>
                                                <th>Desaprobar</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Codigo predio</th>
                                                <th>Nombre del propietario</th>
                                                <th>Documento</th>
                                                <th>Area</th>
                                                <th>Area Construida</th>
                                                <th>Dirección</th>
                                                <th>Barrio</th>
                                                <th>Estrato</th>
                                                <th>Aprobar</th>
                                                <th>Desaprobar</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>

                                            {Data.solicitudes.map((solicitudes1, index) => {
                                                return (
                                                    <tr key={solicitudes1.codigo}>
                                                        <td>{solicitudes1.codigo}</td>
                                                        <td>{solicitudes1.nombre}</td>
                                                        <td>{solicitudes1.documento}</td>
                                                        <td>{solicitudes1.area}</td>
                                                        <td>{solicitudes1.areac}</td>
                                                        <td>{solicitudes1.direccion}</td>
                                                        <td>{solicitudes1.barrio}</td>
                                                        <td>{solicitudes1.estrato}</td>
                                                        <td>{<Boton link={"#"} codigo={solicitudes1.codigo} texto={"Aprobar"} />}</td>
                                                        <td>{<Boton link={"#"} codigo={solicitudes1.codigo} texto={"Desaprobar"} />}</td>
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

export default Aprobconvenios1;