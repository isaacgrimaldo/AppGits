import React  from 'react'

import GifsImgLoad from './GifsImgLoad';
import  useFechGits from '../hooks/useFechGits'

const GitsImg =  ({Series}) => {
  

  const {Data:Gits , load} = useFechGits(Series)
    
    return (
       <> 
          <h2>{Series}</h2>
               {load ? "" :<p className ='animate__animated animate__fadeOutDown animate__delay-2s'>Cargando Gits....</p> }
            <div className='box-Gifs'>
            {
                   Gits.map( img => (
                     <GifsImgLoad 
                     key ={img.id} 
                     {...img} 
                     />
                  )
                  )}
            </div>  
       </>
    )
}

export default GitsImg



//notas

  //el uso de este termino es le control de render que
  //tiene el useState que hace que le parte del codigo
  //que solo queremos que se usen solo una vez no se vuelva
  //a ejecutar
//   useEffect(() => {
//     getImges(Series)
//     .then( gits => setImagenes(gits) )
//  }, [Series]); 
//se define para saber cuando una variable cambie se vuelva ejecutar la funcion dentro

 //para que funcione tenemos añadir las dependecia y basta con que solo se ponga el [] 
 // resultado = a que la funcion solo se ejecute una sola vez
