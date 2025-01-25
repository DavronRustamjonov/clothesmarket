


import { useCart } from '../contexts/CartContext'
import './cart.css'

export default function Cart() {

  

  const { state, dispatch } = useCart()

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="cart">
      <h1>Carrito de compras</h1>
      {state.items.length === 0 ? (
        <p>Tu carrito esta vacío.</p>
      ) : (
        <>
          {state.items.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} alt={item.name} className='cart-img' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Precio: ${item.price.toFixed(2)}</p>
                    <div className="d-flex align-items-center">
                      <label htmlFor={`quantity-${item.id}`} className="me-2">Cantidad: </label>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="form-control form-control-sm me-2"
                        style={{width: '60px'}}
                      />
                      <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-end">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="btn btn-primary">Proceder al pago</button>
          </div>
        </>
      )}
    </div>
  )
}