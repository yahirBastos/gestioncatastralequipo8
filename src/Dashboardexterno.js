import Sidebar from "./Componentes/Sidebar";
import Navbar from "./Componentes/Navbar";
import Contenidoboard from "./Componentes/Contenidoboard/Contenidoboard";

function Dashboardexterno(){
    return(
        <><div id="wrapper">
            {/* <!-- Sidebar --> */}
                <Sidebar 
                href0={"/externo"} primephoto={"assets/Logogcm.png"}
                href1={"/externo"} icon1={"fas fa-house-user"} card1={"Dashboard"}
                titulo={"Gestiones"}
                href2={"#"} icon2={"fas fa-tasks"} card2={"Asociar Predio"}
                card2_1={"Asociar Predio"} href1card2={"#"} name1card2={"Asociar Predio"}
                href3={"#"} icon3={"fas fa-handshake"} card3={"Solicitar Convenios de Pagos"}
                card3_1={"Convenios de Pagos"} href1card3={"#"} name1card3={"Convenios de Pagos"}
                titulo2={"Pagos"}
                href4={"#"} icon4={"far fa-money-bill-alt"} card4={"Pagos en Linea"}
                href5={"/"} icon5={"fas fa-sign-out-alt"} card5={"Cerrar Sesión"}
                />
            {/* <!-- End of Sidebar --> */}
        </div></>
    );
}
export default Dashboardexterno