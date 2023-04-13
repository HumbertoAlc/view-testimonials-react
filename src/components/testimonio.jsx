import React from "react";
import "../stylesheets/testimonio.css"


function Testimonio (){
  return (
    <div className='container-testimonio'>
      <img className='imagen-testimonio'
        src={require('../images/attractive-1869761_640.jpeg')} 
        alt='foto-ema'
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">humberto alcantara</p>
        <p className="cargo-testimonio">ingeniero en sitemas</p>
        <p className="texto-testimonio">Lorem ipsum, dolor sit amet 
        consectetur adipisicing elit. Eligendi corporis eveniet omnis commodi 
        saepe delectus dignissimos maiores ab nulla animi.</p>
      </div>
    </div>
  )
}


export default Testimonio