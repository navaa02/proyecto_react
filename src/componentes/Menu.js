import React from 'react';
import {Link} from 'react-router-dom'
import '../hojas-de-estilos/Componente.css';

export const Menu = () =>{
    return(
        <div className='menu'>
            <Link className='m' to='/'>Lobo</Link>
            <Link className='m' to='/Siberiano'>Siberiano</Link>
            <Link className='m' to='/Salvaje'>Salvaje</Link>
        </div>
    );
}
