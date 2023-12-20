import logo from '../../../../public/logotipo.svg'
import icono from '../../../../public/ico/menu.svg'
import menu from '../Menu/Menu.module.css'
import Boton from './Boton/Boton'

const Menu = () => {
    return (

        <>
            <a href="#"><img src={logo} className={menu.logotipo} alt="Logotipo Supermercados Giro" /></a>
            <Boton ico={icono} link={'#'} nom={'Categoría'}/>
        </>
    )
}

export default Menu