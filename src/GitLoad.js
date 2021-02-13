import React, { useState}   from 'react';


import AddSerie from './Components/AddSerie'
import  GitsImg from './Components/GitsImg'


const GitLoad = ()  => {
 
     const [Series, setSerie] = useState(['re:zero',])
   
     /*
    const  AddSerie = () =>{
         let newSerie = 'NoteDeaht'
          //esta es una forma de agrgar datos sin usar push
         setstate( (Series) =>  [newSerie , ...Series ])
    } 
   */

     return(
         <>
            <h2>Git load</h2>
            <hr/>
             <AddSerie AddSerieHook = {setSerie} /> 
            <ul>
                 {
                    Series.map( serie =>(
                            <GitsImg  Series ={serie} key ={serie} />
                    ) )
                 }
            </ul>

         </>
     )
         
      

}


//Notas
/*
  1. para mostar  un arreglo tenemos que pasarlo por un porce map para mostar toso
   los elemetos como una etiqueta html

  2.la key es indicar que elemento de array se esta mostrando 

  3. para poner valores de dentro del map se usan las {} para usar variables
*/ 



export default GitLoad ;

