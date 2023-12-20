import navbar from './NavBar.module.css'
import Menu from './Menu/Menu.jsx'
import SubMenu from './SubMenu/SubMenu.jsx'
import CartWidget from './CartWidget/CartWidget.jsx'
import Buscador from './Buscador/Buscador.jsx'

const NavBar = () => {
    return (
        <>
            <div className={navbar.top}>
                <div className="container">
                    <div className={navbar.base}>
                        <Menu />
                        <Buscador />
                        <CartWidget />
                    </div>
                </div>
            </div>
            <div className={navbar.sub}>
                <div className="container">
                    <div className={navbar.baseDos}>
                            <SubMenu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar