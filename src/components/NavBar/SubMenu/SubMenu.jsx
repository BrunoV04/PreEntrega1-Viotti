import Boton from './Boton/Boton'
import almacen from '../../../../public/ico/almacen.svg'
import desayunos from '../../../../public/ico/desayunos.svg'
import frescos from '../../../../public/ico/frescos.svg'
import frutas from '../../../../public/ico/frutas.svg'
import bebidas from '../../../../public/ico/bebidas.svg'
import congelados from '../../../../public/ico/congelados.svg'
import limpieza from '../../../../public/ico/limpieza.svg'

const SubMenu = () => {
    return (

        <>
            <Boton ico={almacen} link={'#'} nom={'Almacen'}/>
            <Boton ico={desayunos} link={'#'} nom={'Desayunos'}/>
            <Boton ico={frescos} link={'#'} nom={'Frescos'}/>
            <Boton ico={frutas} link={'#'} nom={'Frutas y Verduras'}/>
            <Boton ico={bebidas} link={'#'} nom={'Bebidas'}/>
            <Boton ico={congelados} link={'#'} nom={'Congelados'}/>
            <Boton ico={limpieza} link={'#'} nom={'Limpieza'}/>
        </>
    )
}

export default SubMenu