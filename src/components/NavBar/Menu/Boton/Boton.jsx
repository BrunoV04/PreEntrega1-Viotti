import boton from './Boton.module.css'

const Boton = (props) => {
    return (
        <>
        <a className={boton.btn} href={props.link}><img src={props.ico}></img><li>{props.nom}</li></a>
        </>
    )
}

export default Boton