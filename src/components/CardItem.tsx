import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Button, Stack } from 'react-bootstrap';
import  storeItems  from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CardItemProps = {
    id: number
    quantity: number
}

const CardItem = ({id, quantity}:CardItemProps) => {

    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={2} className="d-flex align-item-center">
            <img src={item.imgUrl} style={{ width: '125px', height:"75px", objectFit:"cover"}}/>
            <div className='me-auto'>
                 <div>
                    {item.name} {quantity > 1 && (
                        <span className='text-muted' style={{fontSize:"0.65rem"}}>X {quantity}</span>
                    )}
                 </div>
                 <div className='text-muted' style={{fontSize:".75rem"}}>
                        {formatCurrency(item.price)}
                 </div>
            </div>
                <div>{formatCurrency(item.price * quantity)}</div>
                <Button variant='outline-danger' size='sm' onClick={ () => removeFromCart(item.id)}>X</Button>
        </Stack>
    );
};

export default CardItem;