import React from 'react'
import './error.scss'
import sadCloud from '../../resources/sadCloud.png'

const Error = () => {
    return(
        <div id="error" className="columns">
            <div className="column center">
                <img src={sadCloud} alt="error"/>
            </div>
            <div className="column center">
                <p>No se han encontrado resultados para tu búsqueda</p>
            </div>
        </div>
    );
}

export default Error;