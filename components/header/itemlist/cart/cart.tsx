import { SCart } from "./cart.styles"
import { ReactSVG } from 'react-svg'
import CartSVG from './cart.svg'

const Cart = () => {
    return (
        <SCart>
            <ReactSVG src={CartSVG.src} />
        </SCart>
    )
}

export default Cart