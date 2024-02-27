import React from 'react'


import { urlFor } from '../../client'
import './ProductItem.scss'

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      {/*<Link href={`/product/${slug.current}`}> */}
        <div className="product-card">
          <img src={urlFor(image)} width={425} height={270} className="product-image" alt="product"/>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      {/*</Link>*/}
    </div>
  )
}

export default Product