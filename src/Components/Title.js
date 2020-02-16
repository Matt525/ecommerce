import React, { Component } from 'react'
import './index.css'

export default ({name, title}) => {
        return (

            <div>

                    <div className="row">
                        <div className="col-10.mx-auto.my-2.text-center.text-title"> 

                                    <h1 className="text-capitalized">{name}
                                                    &nbsp;
                                        <strong className='text-blue'>{title}</strong>
                                        
                                    </h1>
                                    
                        </div>
                        
                    </div>
                   
        
            </div>
        )
}






