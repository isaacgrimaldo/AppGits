import  { useEffect, useState } from 'react'
import {getImges} from '../Helpers/GetGifs'

const useFechGits = (categorias) => {
    
    const [state, setState] = useState({
           Data:[],
           load:false,       
    })

    useEffect(()=>{
           setTimeout(() =>{
              getImges(categorias)
                 .then( img => {
                    setState({
                        Data:[...img],
                        load:true,
                    })
                 })
           },2200)
    },[categorias])

    return state ;

}

export default useFechGits;
