import PropTypes from "prop-types";


export const Animals = ({titulo,descrip,detalles,img}) => {
  
  return (
    <div className="card" id="card">
        <img width={200} src={img} alt="vaca-lola" />
        <h1>Titulo:{titulo}</h1>
        <h2>Descripcion:{descrip}</h2>
        <p>Detalle:{detalles}</p>
        <button>Click me!!</button>
    </div>
  )
}

Animals.propTypes = {
    titulo: PropTypes.string.isRequired,
    descrip: PropTypes.string.isRequired,
    detalles: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

Animals.defaultProps = {
    titulo: "TITULO DEF",
    descrip: "DESCR DEF",
    detalles: "DEATLL DEF",
    img: "https://i.scdn.co/image/ab67616d0000b273684859b44eedd47cd886956e",
}
