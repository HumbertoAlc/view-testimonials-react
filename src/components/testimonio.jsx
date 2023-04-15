import "../stylesheets/testimonio.css"


function Testimonio (props){

  return (
    <div className='container-testimonio'>
      <img className='imagen-testimonio'
        src={require(`../images/${props.img}.jpeg`)} 
        alt='fotos'
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong> {props.empresa}</strong></p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  )
}


export default Testimonio