import Sidebar from "./Componentes/Sidebar";
import Navbar from "./Componentes/Navbar";
import Data1 from './jsons/prediosdeuda.js';
import Boton from "./Componentes/Boton";
function Soliconvenio() {
    return (
        <><div id="wrapper">
            {/* <!-- Sidebar --> */}
            <Sidebar 
                href0={"/Externo"} primephoto={"assets/Logogcm.png"}
                href1={"/Externo"} icon1={"fas fa-house-user"} card1={"Dashboard"}
                titulo={"Gestiones"}
                href2={"#"} icon2={"fas fa-tasks"} card2={"Predios"}
                card2_1={"Predios"} href1card2={"/PrediosAsociadosUser"} name1card2={"Predios Asociados"} href2card2={"/Asociarpredios"} name2card2={"Asociar Predio"} href3card2={"#"}
                href3={"#"} icon3={"fas fa-handshake"} card3={"Solicitar Convenios"}
                card3_1={"Convenios de Pagos"} href1card3={"/Soliconvenio"} name1card3={"Convenios de Pagos"} href2card3={"#"} href3card3={"#"}
                titulo2={"Pagos"}
                href4={"/Pagosenlinea"} icon4={"far fa-money-bill-alt"} card4={"Pagos en Linea"}
                href5={"/"} icon5={"fas fa-sign-out-alt"} card5={"Cerrar Sesión"}
                href6={"#"}
                href7={"#"}
                href8={"#"}
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
                        nombredueño={"Amanda Rua"}
                    />
                    {/* <!-- End of Topbar --> */}

                </div>
                <div className="container-fluid">
                    {/* <!-- Content Row --> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-warning text-uppercase mb-1">Lista de Predios con pagos atrasados</h6>
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
                                            <th>Acciones</th>
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
                                            <th>Acciones</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>

                                        {Data1.prediosd.map((predios2, index) => {
                                            return (
                                                <tr key={predios2.codigo}>
                                                    <td>{predios2.codigo}</td>
                                                    <td>{predios2.nombre}</td>
                                                    <td>{predios2.documento}</td>
                                                    <td>{predios2.area}</td>
                                                    <td>{predios2.areac}</td>
                                                    <td>{predios2.direccion}</td>
                                                    <td>{predios2.barrio}</td>
                                                    <td>{predios2.estrato}</td>
                                                    <td>{<Boton link={"#"} codigo={predios2.codigo} texto={"Solicitar"} />}</td>
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
        </div></>
    );
}
export default Soliconvenio