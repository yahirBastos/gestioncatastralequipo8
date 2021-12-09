import Sidebar from "./Componentes/Sidebar";
import Navbar from "./Componentes/Navbar";
import Frases from "./Componentes/Frases";

function Fechaspagoexterno(){
    return(
        <><div id="wrapper">
            {/* <!-- Sidebar --> */}
                <Sidebar 
                href0={"/Externo"} primephoto={"assets/Logogcm.png"}
                href1={"/Externo"} icon1={"fas fa-house-user"} card1={"Dashboard"}
                titulo={"Gestiones"}
                href2={"/Asociarpredios"} icon2={"fas fa-tasks"} card2={"Predios"}
                card2_1={"Predios"} href1card2={"/PrediosAsociadosUser"} name1card2={"Predios Asociados"}href2card2={"/Asociarpredios"} name2card2={"Asociar Predio"}
                href3={"/Soliconvenio"} icon3={"fas fa-handshake"} card3={"Solicitar Convenios"}
                card3_1={"Convenios de Pagos"} href1card3={"/Soliconvenio"} name1card3={"Convenios de Pagos"}
                titulo2={"Pagos"}
                href4={"/Pagosenlinea"} icon4={"far fa-money-bill-alt"} card4={"Pagos en Linea"}
                href5={"/"} icon5={"fas fa-sign-out-alt"} card5={"Cerrar Sesión"}
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

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Fechas de pagos y descuentos</h1>
                        </div>
                        <Frases frase = {"Fecha de pago con descuento:"}/>
                        <input type="texto" readonly="readonly" className="form-control form-control-user" id="exampleestrato"
                            placeholder={"17 de diciembre del 2021"} />
                            <br/>
                            <br/>
                        <Frases frase = {"Fecha maxima de pagos:"}/>
                        <input type="texto" readonly="readonly" className="form-control form-control-user" id="exampleestrato"
                            placeholder={"22 de diciembre del 2021"} />                        
                       
                    </div>
                </div>
            </div>
        </div></>
    );
}
export default Fechaspagoexterno