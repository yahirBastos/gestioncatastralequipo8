import Sidebar from "./Componentes/Sidebar";
import Navbar from "./Componentes/Navbar";
import React, { useEffect } from "react";
import Formcrearpredio from "./Componentes/Formcrearpredio/Formcrearpredio";
import { useParams, useNavigate } from "react-router-dom";

function Edicionpredios(){
    const navegacion = useNavigate()

    let params = useParams()
    
    let input_id = React.createRef()
    let input_nombre = React.createRef()  
    let input_tipodocumento = React.createRef()
    let input_documento = React.createRef()
    let input_area = React.createRef()
    let input_areac= React.createRef()
    let input_direccion = React.createRef()
    let input_barrio = React.createRef()
    let input_estrato = React.createRef()

    useEffect(() => {
        fetch(`http://localhost:3030/api/get_estate_by_id/${params.id_estate}`, {
            method: "GET",
            headers: {
            },
          })
            .then((response) => response.json())
            .then((data) => {
              input_id.current.value = data._id
              input_nombre.current.value = data.nombre 
              input_tipodocumento.current.value = data.tipodocumento 
              input_documento.current.value = data.documento 
              input_area.current.value = data.area  
              input_areac.current.value = data.areac 
              input_direccion.current.value = data.direccion  
              input_barrio.current.value = data.barrio  
              input_estrato.current.value = data.estrato 

              //console.log();
            });
    });

    const datosFormulario = (data, id_estate) => {
        fetch(`http://localhost:3030/api/editar_predio/${params.id_estate}`, {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => navegacion("/editarpredios"));
    }

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
                            <Formcrearpredio procDatos={datosFormulario} titulo={"Editar Predios"} codigopredio={"codigopredio"} nombre={"nombre"} tipodocumento={"tipodocumento"}
                                numerodocumento={"numerodocumento"} areatotal={"areatotal"} areaconstruida={"areaconstruida"} direccion={"direccion"}
                                barrio={"barrio"} estrato={"estrato"} linkregistropredio={"#"} nombreboton={"Editar Predio"}
                                value_id={input_id}
                                value_nombre={input_nombre}
                                value_tipodocumento={input_tipodocumento}
                                value_documento={input_documento}
                                value_area={input_area}
                                value_areac={input_areac}
                                value_direccion={input_direccion}
                                value_barrio={input_barrio}
                                value_estrato={input_estrato}
                            />

                        </div>
                    </div>
                </div>
            </div></>
        );
}
export default Edicionpredios;