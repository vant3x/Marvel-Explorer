import React from 'react';


const Paginacion = (props) => {
  return(
    <div className="row py-3 mb-4 justify-content-center">
      <button type="button" className="btn btn-warning mr-1">Anterior &larr;</button>
      <button type="button" className="btn btn-warning mr-1">Siguiente &rarr;</button>
    </div>
  )
}

export default Paginacion;