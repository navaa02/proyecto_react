import React from 'react';
import '../hojas-de-estilos/Componente.css';

export function Componente (props){
    return(
        <div className='cuerpo'>
            <img className="Imagen" src={require(`../Imagenes/${props.imagen}`)} alt="Imagen" />
            <div className='texto'>
                <p className='tiutlo'>{props.titulo}</p>
                <p className='tipo-imagen'>{props.tipoImagen}</p>
                <p className='descripcion'>{props.descripcion}</p>
            </div>
        </div>
    );
}
