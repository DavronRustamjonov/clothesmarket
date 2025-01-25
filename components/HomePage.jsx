
import { Link } from 'react-router-dom'
import { useProducts } from '../contexts/ProductContext'
import './Home.css'
import { IconClock24, IconReceiptRefund, IconTruck } from '@tabler/icons-react'

export default function HomePage() {
  const { products } = useProducts()
  const featuredProducts = products.slice(0, 3) // Mostrar los primeros 3 productos como destacados

  

  return (
    <div className="home-page">
     <div className="home-jumbotron">
        <div className="jumbotron-content">
          <h1>Bienvenido a nuestra tienda en línea</h1>
          <p className="lead">Descubre nuestros productos de alta calidad a precios increíbles.</p>
          <Link to="/products" className="btn btn-primary btn-lg btn-shop-now">Comprar ahora</Link>
        </div>
      </div>

      <div className="home-content">
        <div className="featured-products">
          <div className="container">
            <h2>Productos destacados</h2>
            <div className="row">
              {featuredProducts.map(product => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card h-100 product-card">
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price.toFixed(2)}</p>
                      <Link to={`/product/${product.id}`} className="btn btn-primary">Ver detalles</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="why-choose-us">
          <div className="container">
            <h2 className="text-center mb-5">¿Por qué elegirnos?</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="feature-card">
                  <IconTruck className='icon-big'></IconTruck>
                  <h3>Envío rápido</h3>
                  <p>Entregamos tus productos en tiempo récord, para que los disfrutes cuanto antes.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="feature-card">
                <IconReceiptRefund className='icon-big'></IconReceiptRefund>
                  <h3>Devoluciones gratuitas</h3>
                  <p>Si no estás satisfecho, puedes devolver tu compra sin costo adicional.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="feature-card">
                <IconClock24 className='icon-big'></IconClock24>
                  <h3>Atención al cliente 24/7</h3>
                  <p>Estamos aquí para ayudarte en cualquier momento, todos los días del año.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-signup">
          <div className="container">
            <h2 className="text-center mb-4">Suscríbete a nuestro boletín</h2>
            <p className="text-center mb-4">Recibe las últimas novedades y ofertas exclusivas directamente en tu correo.</p>
            <form className="newsletter-form">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Tu dirección de correo" aria-label="Tu dirección de correo" />
                <button className="btn btn-primary" type="submit">Suscribirse</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
