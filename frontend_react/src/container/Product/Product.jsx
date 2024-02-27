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

  const [sveItem1, setsveItem1] = useState([])
  const [sveItem2, setsveItem2] = useState([])
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response1 = await client.fetch('*[_type == "sveproducts" && id=="01"]')
      const response2 = await client.fetch('*[_type == "sveproducts" && id=="01"]')
      setsveItem1(response1);
      setsveItem2(response2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } 
  
  return (
    <div className='app__products' id="sve">
        <div className='sve-heading'>
            <h1>Shadowverse Evolve</h1>
            <span> Sealed Product and Craft Splits</span>
        </div>
        <div className="sve-products">
          <div className='sve1-heading'>
            <h2> Set 4: Cosmic Mythos</h2>
            <p>Ships by 4/9</p>
          </div>
          <div className='sve1'>
            {sveItem1?.map((product) => <ProductItem key={product._id} product={product} />)}
          </div>
          <div className='sve1-heading'>
            <h2> Set 5: Omen Eternals</h2>
            <p>Ships by 6/9</p>
          </div>
          <div className='sve2'>
            {sveItem2?.map((product) => <ProductItem key={product._id} product={product} />)}
          </div>
        </div>

    </div>
  )
}


export default Product