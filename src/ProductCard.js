import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router';
import { useDispatch } from 'react-redux'
import { editProduct } from './features/products/productSlice';

const ProductCard = ({product={}}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch()

	function detail(product){
		dispatch(editProduct(product))
		navigate(`/products/${product?.id}`)
	}

	return (
		<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product?.image} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
				{product?.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>detail(product)}>Detail</Button>
      </Card.Body>
    </Card>
	);
}

export default ProductCard;
