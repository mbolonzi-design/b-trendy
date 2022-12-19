import React from 'react'

function NewProduct() {
  return (
    <div>
      <form className='new-product-form'>
        <input 
          type="text"
          name='name'
          placeholder='product name' 
        />
        <input 
          type="text"
          name='category'
          placeholder='product category' 
        />
        <input 
          type="text"
          name='description'
          placeholder='product description' 
        />
        <input 
          type="text"
          name='price'
          placeholder='price' 
        />
        <input type="submit" value='Add Product' />
      </form>
    </div>
  )
}

export default NewProduct