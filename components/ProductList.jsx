
import { Link } from 'react-router-dom'
import { useProducts } from '../contexts/ProductContext'
import { useState } from 'react'
import { IconSearch } from '@tabler/icons-react'

export default function ProductList() {

const { products, setSearchTerm } = useProducts()
const [search, setSearch] = useState([])

const handleChange = (e) =>{
  setSearch(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  setSearchTerm(search)
}

 

  return (
    <div>
     
      <form className='form-search'>
          <input
            type="search"
            placeholder="Buscar productos..."
            className="form-control me-2"
            onChange={handleChange}
          />
          <IconSearch className='icon-search' onClick={handleSubmit}></IconSearch>
        </form>

       <div className='products-header'>
       <h2>Productos</h2>
       </div>
      <div className="product-grid">
      {products.length>0
      
        ?
        products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary" id='btn-detail'>
                Ver detalles
              </Link>
            </div>
          </div>
        ))

        : <h3 className='not-found'>Producto no encontrado</h3>
      }
    </div>
    </div>
  )
}