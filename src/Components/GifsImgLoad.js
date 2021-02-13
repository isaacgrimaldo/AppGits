import React from 'react'

const GifsImgLoad = ( {id , gif , title}) => {
    return (
        <div className = 'gif-cpntent animate__animated animate__fadeInUp animate__fast ' >
             <img src ={gif} alt ={title} className ="animate__animated animate__backInDown"/>
             <p className="animate__animated animate__fadeInDownBig animate__slow">{title}</p>  
        </div>
    )
 }

export default GifsImgLoad; 
