import React, { useEffect, useRef, useState } from 'react'
import EntradaView from '../components/EntradaView'
import EntradaForm from '../components/EntradaForm'
import {Toast} from 'primereact/toast';
import { createEntrada, getEntradas } from '../services/EntradasService';
import { Toolbar } from 'primereact/toolbar';

function EntradasContainer() {
    //const toast = useRef(null);
    const [entradaData,setEntradaData] = useState([]);

    const handleCreate=(entrada)=>{
        createEntrada(entrada);
        //toast.current.show({severity: "success", summary: "Entrada Comprada con Éxito"});
        const data = getEntradas();
        setEntradaData(data);
    }

    useEffect(()=>{
        const data = getEntradas();
        setEntradaData(data); 
    }, []);
  return (
    <div>
        <div className="row">
            <Toolbar left={<h3>Sansamark</h3>}/>

        </div>

        <div className="row">
            <div className="col-1"></div>
            <div className="col-3">
                <EntradaForm onCreateEntrada={handleCreate}></EntradaForm>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
                <EntradaView entradaData={entradaData}></EntradaView>
            </div>
        </div>
      
    </div>
  )
}

export default EntradasContainer
