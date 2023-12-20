import ico from '../../../../public/carrito.svg'
import { useState } from "react"
import carrito from './CartWidget.module.css'


const CartWidget = () => {
  
    const [count, setCount] = useState(0)
    const incrementar = () => {
      setCount(count + 1)
    }

    return(
      <a href="#" onClick={incrementar}>
      <div className={carrito.modulo}>
      <div className={carrito.carrito}>
        <div className={carrito.carro}>
            <img src={ico} alt="Carrito" className={carrito.ico} /><p className={carrito.num}>{count}</p>
            </div>
            <p className={carrito.text}>Carrito</p>
          </div>
          </div>
          </a>
        
    )
}

export default CartWidget