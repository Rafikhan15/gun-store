
import { useState } from 'react';
import OrderProducts from '../OrderProducts/OrderProducts';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);

    for (let product of cart) {

        const { id, name, img } = product;

    }
    console.log(cart);





    const Choose = (cart) => {
        let items = cart;
        let item = items[Math.floor(Math.random() * items.length)];
        // console.log(item.name);
        alert(item.name);
        // <ChoooseProduct item={item}></ChoooseProduct>



    }

    const []


    return (
        <div className='cart'>
            <h4>Order Summary</h4>


            {
                cart.map(product => <OrderProducts key={product.id} product={product}></OrderProducts>)
            }




            <button onClick={() => Choose(cart)}>
                Choose For 1
            </button>

            <button>
                Choose Again
            </button>


        </div>
    );
};

export default Cart;