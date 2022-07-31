import Button from 'react-bootstrap/Button';
import React from 'react';
import { useNavigate } from "react-router-dom";
import useProducts from '../../hooks/useProducts';

import './Home.css';
import Review from '../Review/Review';

const Home = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    const hotProduct = {
        name: 'Apple MacBook Pro',
        des: "The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio‑quality mics, it’s our most portable pro laptop.",
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207'
    }

    const handleAllReviews = () => {
        navigate('/reviews');
    }

    return (
        <section>
            <div className='container home-container'>
                <div className='d-flex align-items-center'>
                    <div>
                        <h1>{hotProduct.name}</h1>
                        <p>{hotProduct.des}</p>
                        <Button>Live Demo</Button>
                    </div>
                </div>
                <div className='home-img'>
                    <img src={hotProduct.img} alt="" />
                </div>
            </div>

            <div>
                <h1 className='customer-review'>Customer Reviews({products.length})</h1>
                <div className='container review-card'>
                    {
                        products.slice(0, 3).map(product => <Review
                            key={product.id}
                            product={product}
                        ></Review>)
                    }
                </div>
                <div>
                    <Button onClick={handleAllReviews} className='seeAllReviewsBtn'>See All Reviews</Button>
                </div>
            </div>
        </section>
    );
};

export default Home;