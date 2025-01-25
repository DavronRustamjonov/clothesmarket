
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useCart } from '../contexts/CartContext'
import { useProducts } from '../contexts/ProductContext'


export default function ProductDetails() {

  window.scroll(0,0)

  const { id } = useParams()
  const navigate = useNavigate()
  const {products} = useProducts()
  const product = products.find(p => p.id === parseInt(id))
  const { dispatch } = useCart()

  if (!product) {
    return <div>Producto no encontrado</div>
  }

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })
    
  }

 
  
  return (
    <>
      <Button onClick={() => navigate('/products')} className="mb-3" id='btn-volver'>Volver</Button>
      <Row>
        <Col md={6}>
         <div>
         {product.image
          ?  <Image className='detail-img' src={`../${product.image}`} style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }} />
          : <Image className='detail-img' src={'https://via.placeholder.com/300'} style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }} />
         }
         </div>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Descripción: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  onClick={addToCart}
                  className="btn-block"
                  type="button"
                >
                  Agregar al carrito
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}