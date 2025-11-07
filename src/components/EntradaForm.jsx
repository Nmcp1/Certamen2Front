import React, { useState } from 'react'

import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
        
        

function EntradaForm({onCreateEntrada = () =>{}}) {

    const handleClick=()=>{
        const valor = 5000*cantidad;
        const entradaObj = {dia,tipoPago,cantidad,ciudad,pelicula, valor};
        if (!ciudad){
            alert("Ciudad no ingresada");
            return;
        }
        console.log(entradaObj);
        onCreateEntrada(entradaObj);
        //falta el crear

    }

    const peliculas = ["Wifi Ralph","Dragon Ball Super Broly","Cascanueces","El Grinch"];
    const dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    const pagos = ["Tarjeta","Efectivo"];

    
    const [dia,setDia] = useState(dias[0]);
    const [tipoPago,setTipoPago] = useState(pagos[0]);
    const [cantidad,setCantidad] = useState(0);
    const [ciudad,setCiudad] = useState("");
    const [pelicula,setPelicula] = useState(peliculas[0]);
  return (
    <div>
        <div className="row">
        <label>Día</label>
        <Dropdown value={dia} onChange={(e) => setDia(e.value)} options={dias} optionLabel="name" 
        placeholder="Selecciona un día" className="w-full md:w-14rem" />
        </div>
        <div className="row">
        <label>Método de pago</label>
        <SelectButton value={tipoPago} onChange={(e) => setTipoPago(e.value)} options={pagos} />
        </div>
        <div className="row">
        <label>Cantidad de entradas</label>
        <InputNumber value={cantidad} onValueChange={(e) => setCantidad(e.value)} min={1} />
        </div>
        <div className="row">
        <label>Ciudad</label>
        <InputText value={ciudad} onChange={(e) => setCiudad(e.target.value)} placeholder='Ciudad'/>
        </div>
        <div className="row">
        <label>Seleccione Película</label>
        <ListBox value={pelicula} onChange={(e) => setPelicula(e.value)} options={peliculas} className="w-full md:w-14rem" />
        </div>

        <div className="row">
            <Button onClick={handleClick} rounded severity='info' label='Comprar Entrada'  ></Button>
        </div>
        






        
        





      
    </div>
  )
}

export default EntradaForm
