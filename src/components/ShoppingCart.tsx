import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CardItem from "./CardItem";


type ShoppingCartProps = {
    isOpen:boolean
}

export function shoppingCart({isOpen}: ShoppingCartProps) {

    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <OffcanvasHeader closeButton>
            <OffcanvasTitle>Panier</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
            <Stack gap={3}>
            {cartItems.map(item => (
                <CardItem key={item.id} {...item} />
            ))}
            </Stack>
        </OffcanvasBody>
    </Offcanvas>
}


export default shoppingCart;