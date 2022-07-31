import React from 'react';
import useProducts from '../../hooks/useProducts';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>What Our Customers Say!</h2>
            <div className='container review-card'>
                {
                    products.map(product => <Review
                        key={product.id}
                        product={product}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;