import React, { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';


export default function InputNumberDemo(props) {
    const [value1, setValue1] = props.data
    const [estado, setEstado] = props.setEstado

const onChange = (event) => {
    setValue1({numero : event.value})
    setEstado({...estado, primeraPagina : false, segundaPagina: true })
}


return (


    <div>
       
        <div className="card">
          
            <h6>¿Cuántas tazas de café consumís semanalmente?</h6>
            <div className="p-fluid grid formgrid">
                <div className="field col-12 md:col-3">
                    <label htmlFor="integeronly"></label>
                    <InputNumber inputId="integeronly" value={value1.numero} onValueChange={onChange}  />
                </div>
            </div>
                
        </div>
    </div>
    );
}