// import logo from './logo.svg';
import './App.css';
import { Componente } from './componentes/Componente';
import { Routes, Route} from 'react-router-dom';
import { Menu } from './componentes/Menu';

function App() {
  return (

    <div className="App"> 
      <div className='contenedor-principal'>
         <h1>Esto es lo que se describe sobre caninos</h1>
         
        
            <Menu />
            <Routes>
                <Route path='/' element={
                    <Componente
                    titulo='Lobo'
                    tipoImagen= 'Figura de Lobo tipo .png'
                    imagen= 'tattoo.png'
                    descripcion= 'El lobo es una especie de mamífero placentario del orden de los carnívoros. El naturalista Carlos Linneo, en la décima edición de su obra Systema naturæ, publicada en 1758, clasificó al perro doméstico como especie distinta.'
                    />
                }></Route>
                <Route path='/Siberiano' element={
                    <Componente
                    titulo='Siberiano'
                    tipoImagen= 'Figura de lobo Siberiano tipo .png'
                    imagen= 'siberiano.png'
                    descripcion= 'Es una raza de perro de trabajo originaria del norte de Siberia. Este perro fue creado por la tribu Chukchi como perro de trabajo para tirar de los trineos a través de largas distancias.'
                    />  
                }></Route>
                <Route path='/Salvaje' element={
                    <Componente
                    titulo='Salvaje'
                    tipoImagen= 'Figura de lobo salvaje tipo .png'
                    imagen= 'salvaje.png'
                    descripcion= 'Considerado, en ocasiones, una especie propia, se trata de una subespecie de lobo de Australasia, más grande que los de Asia. Sigue siendo un lobo pequeño de unos 32 kilos que vive en estado salvaje en todos los estados de Australia menos en Tasmania.'
                    />
                }></Route>                
            </Routes>                
      </div>
    </div>
  );
}

export default App;
