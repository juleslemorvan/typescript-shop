import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CardItem from "./CardItem";
import { formatCurrency } from "../utilities/formatCurrency";
import  storeItems  from '../data/items.json';

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
            <div className="ms-auto fw-bold fs-5">
                Total : {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                }, 0)
                )}
            </div>
            </Stack>
        </OffcanvasBody>
    </Offcanvas>
}


export default shoppingCart;