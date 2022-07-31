import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { name, img, comment, rating } = props.product;
    return (
        <Card className='review-card' >
            <Card.Img style={{ height: '400px' }} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {comment}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="rating-color">Rating: {rating}</small>
            </Card.Footer>
        </Card>
    );
};

export default Review;