import boton from './Boton.module.css'

const Boton =(props)=>{
    return(
        <a className={boton.btn} href={props.link}><li><img className={boton.ico} src={props.ico}></img>{props.nom}</li></a>
    )
}

export default Boton