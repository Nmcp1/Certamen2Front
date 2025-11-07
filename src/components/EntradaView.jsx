import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';

function EntradaView({entradaData}) {
    const entradas = [{"dia":"Lunes","pelicula":"Ejmeplo","cantidad":1,"valor":5000}]
    const peliculas = ["Todas","Wifi Ralph","Dragon Ball Super Broly","Cascanueces","El Grinch"];
    const [filtradas, setFiltradas] = useState(entradaData || []);

    const [pelicula,setPelicula] = useState("Todas");
    console.log(entradaData)

    const filtrar=(pelicula)=>{
        if (!entradaData){
            return;
        }
        if (pelicula=="Todas"){
            setFiltradas(entradaData);
        }else{
        const resultado = entradaData.filter(
            (entrada) => entrada.pelicula === pelicula
        );
        setFiltradas(resultado);
        }
    }
    useEffect(() => {filtrar(pelicula);}, [pelicula, entradaData]);
    
  return (
    <div>
        <div className="row">
            <label>Filtro por película</label>
            <Dropdown value={pelicula} onChange={(e) => {setPelicula(e.value);filtrar(e.value)}} options={peliculas}  className="w-full md:w-14rem" />
        </div>
        <DataTable value={filtradas} tableStyle={{ minWidth: '50rem' }}>
            <Column field="dia" header="Día"></Column>
            <Column field="pelicula" header="Película"></Column>
            <Column field="cantidad" header="Cantidad"></Column>
            <Column field="valor" header="Valor"></Column>
        </DataTable>
    </div>
  )
}

export default EntradaView
