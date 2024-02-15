import React, { useEffect, useState } from 'react'
import './Product.scss'
import ProductItem from './ProductItem'
import { client } from '../../client'
import { AiOutlineSync } from 'react-icons/ai'


export async function getPosts() {
  const posts = await client.fetch('*[_type == "sveproducts"]')
  return posts
} 

const Product = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await client.fetch('*[_type == "sveproducts"]')
      
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } 
  
  return (
    <div className='app__products'>
        <div className='product-heading'>
            <h2>Shadowverse Evolve</h2>
            <p> Sealed Product and Craft Splits</p>
        </div>
        <div className="products-container">
          {data?.map((product) => <ProductItem key={product._id} product={product} />)}
        </div>

    </div>
  )
}


export default Product