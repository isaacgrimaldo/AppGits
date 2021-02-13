import React , {useState} from 'react'
import PropTypes from 'prop-types'

const AddSerie = ({AddSerieHook}) => {
    
    const [newSerie, setNewSerie] = useState(' ')
    
    const ChangeValue = (e) => {
        setNewSerie((serie) => serie = e.target.value )
    }

    
    const SubmiAddSerie = (e) => {
         
        e.preventDefault();
         if(newSerie.trim().length > 2 ){
         AddSerieHook ( series => [ newSerie  , ...series ]);
         setNewSerie('');
         }else{
             console.log('aaaaaa malll');
         }
  
    }
    return (
        <form onSubmit = {SubmiAddSerie} >
             <p>Ingrese una nueva serie</p>
             <input  
                type ="text"
                onChange = {ChangeValue}
                placeholder = 'El nombre de una serie'
                value = {newSerie}
             />
        </form>
    )
}

AddSerie.propTypes = {
    AddSerieHook: PropTypes.func.isRequired, 
}



export default AddSerie ;