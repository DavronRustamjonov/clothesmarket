import React, { createContext, useContext, useReducer, useState, useMemo } from 'react'

const ProductContext = createContext()

const initialProducts = [
  { id: 1, name: 'Camisa-1', price: 19.99, image: './camisa-1.jpg', description: 'Descripción del Producto 1' },
  { id: 2, name: 'Pantalon-1', price: 29.99, image: './pantalon-1.jpg', description: 'Descripción del Producto 2' },
  { id: 3, name: 'Zapatillas-1', price: 39.99, image: './zapatillas-1.jpg', description: 'Descripción del Producto 3' },
  { id: 4, name: 'Remera-1', price: 19.99, image: './remera-1.jpg', description: 'Descripción del Producto 4' },
  { id: 5, name: 'Camisa-2', price: 49.99, image: './camisa-2.jpg', description: 'Descripción del Producto 5' },
  { id: 6, name: 'Zapatillas-2', price: 39.99, image: './zapatillas-2.jpg', description: 'Descripción del Producto 6' },
  { id: 7, name: 'Pantalon-2', price: 29.99, image: './pantalon-2.jpg', description: 'Descripción del Producto 7' },
  { id: 8, name: 'Remera-2', price: 59.99, image: './remera-2.png', description: 'Descripción del Producto 8' },
  { id: 9, name: 'Pantalon-3', price: 19.99, image: './pantalon-3.jpg', description: 'Descripción del Producto 9' }
]

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      return [...state, { ...action.payload, id: state.length + 1 }]
    }
    case 'UPDATE_PRODUCT': {
      return state.map(product => 
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      )
    }
    case 'DELETE_PRODUCT': {
      return state.filter(product => product.id !== action.payload)
    }
    default:
      return state
  }
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, initialProducts)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [products, searchTerm])

  const clearSearch = () => {
    setSearchTerm('')
  }

  return (
    <ProductContext.Provider value={{ products: filteredProducts, dispatch, searchTerm, setSearchTerm,clearSearch  }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}