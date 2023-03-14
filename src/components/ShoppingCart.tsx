import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";


type ShoppingCartProps = {
    isOpen:boolean
}

export function shoppingCart({isOpen}: ShoppingCartProps) {

    const {closeCart} = useShoppingCart()
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <OffcanvasHeader closeButton>
            <OffcanvasTitle>Panier</OffcanvasTitle>
        </OffcanvasHeader>
    </Offcanvas>
}


export default shoppingCart;