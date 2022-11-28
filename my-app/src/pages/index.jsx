import CajaCafe from "../components/cajaCafe";
import InputNumberDemo from "../components/inputNumner"
import { useState } from "react";



export default function PaginaPrincipal() {

    const [estado, setEstado] = useState(
        {
            primeraPagina : true,
            segundaPagina: false,
            terceraPagina: false,
            cuartaPagina: false
        }
    );

    const [numeroIngresado, setNumeroIngresado] = useState(
        {
            numero : null
        }
    )
    return (

        <div>
            {estado.primeraPagina && <InputNumberDemo data={[numeroIngresado,setNumeroIngresado]} setEstado={[estado, setEstado]} />}
            {estado.segundaPagina && <CajaCafe num = {numeroIngresado.numero}/>}


        </div>
        
    )
}