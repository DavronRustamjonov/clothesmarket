
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import './Header.css'
import { IconHanger, IconShoppingCart } from '@tabler/icons-react'
import { useProducts } from '../contexts/ProductContext'

export default function Header() {



const { state } = useCart()
const itemCount = state.items.reduce((acc, item) => acc + item.quantity, 0)
const {  clearSearch } = useProducts()


 

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='header'>
     
        <Navbar.Brand> <Link className='link-brand' onClick={clearSearch} to={"/"}><IconHanger></IconHanger> Clothes</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav className='links' >
        
        <Link className='link' to={"/about"}>Sobre nosotros</Link>
        <Link className='link' to={"/contact"}>Contáctanos</Link>
        <Link className='link' onClick={clearSearch} to={"/products"}>Productos</Link>
  
        </Nav>

        </Navbar.Collapse>
        
        <Link to={'/cart'} className='cart-icon-div'><IconShoppingCart className='link-icon'></IconShoppingCart> {itemCount > 0 && <Badge bg="primary">{itemCount}</Badge>}</Link>
        
  
    </Navbar>
  )
}