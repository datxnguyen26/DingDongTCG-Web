import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { client } from '../../client'
import { urlFor } from '../../client'
import './ProductDetail.scss'
import Navbar from '../Navbar/Navbar.jsx'

const ProductDetail = () => {

  const [product, setProduct] = useState([])
  const { slug } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.fetch(`*[_type == "sveproducts" && slug.current == '${slug}'][0]`)
     
      setProduct(response);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log(product)
  }
  console.log(product)
  return (
    
    <div className="H">
      <div>
        <Navbar homeRef='/' sveRef='/#sve/' cfvRef='/#cfv' weissRef='/#weiss' />
      </div>
        <div className='box'>
          {product.image && <img src={urlFor(product.image)} width={425} height={270} className="product-image" alt="product"/> }
          {product.image && <p className="ds">{product.name}</p>}
          {product.image && <p className="s">${product.price} </p>}
        </div>
    </div>
  )
}

export default ProductDetail;