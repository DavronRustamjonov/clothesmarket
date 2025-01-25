
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row" id='row-footer'>
          <div className="col-sm-12 col-md-6">
            <h6>Acerca de</h6>
            <p className="text-justify">Nuestra tienda en línea se dedica a ofrecer productos de alta calidad a precios competitivos. Nos esforzamos por brindar una experiencia de compra excepcional y un servicio al cliente de primera clase.</p>
          </div>


          <div className="col-xs-6 col-md-3">
            <h6>Enlaces rápidos</h6>
            <ul className="footer-links">
              <li><Link to="/about">Acerca de nosotros</Link></li>
              <li><Link to="/contact">Contáctanos</Link></li>
              <li><Link to="/privacy">Política de privacidad</Link></li>
              <li><Link to="/terms">Términos y condiciones</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2024 Todos los derechos reservados por 
         <a href="#"> Clothes</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><IconBrandFacebook></IconBrandFacebook></a></li>
              <li><a className="twitter" href="#"><IconBrandX></IconBrandX></a></li>
              <li><a className="instagram" href="#"><IconBrandInstagram></IconBrandInstagram></a></li>
              <li><a className="linkedin" href="#"><IconBrandLinkedin></IconBrandLinkedin></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}