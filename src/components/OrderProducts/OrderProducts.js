import React from 'react';
import './OrderProducts.css'

const OrderProducts = (props) => {
    const { name, img } = props.product;
    // console.log(props.product);


    return (
        <div>
            <div className='OrderProduct'>
                <img src={img} alt="" />
                <h4 className='show'>{name}</h4>

            </div>

        </div>
    );
};

export default OrderProducts;