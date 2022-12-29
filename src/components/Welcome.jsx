import React from 'react'

const Welcome = () => {

    const info = {
        nombre: 'Andres',
        apellido: 'Perez',
        edad: 49
      };

  return (
    <>
    <h1>
      Hola mi nombre es : {info.nombre} y mi apellido es:{info['apellido'] }
    </h1>
    </>    
  )
}

export default Welcome