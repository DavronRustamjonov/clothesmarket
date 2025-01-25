import './about.css'


export default function AboutPage() {

  window.scroll(0,0)

  return (
    <div className='about'>
      <div className="about-header">
        <h1>Acerca de nosotros</h1>
        <p className="lead">
          Somos una tienda en línea comprometida con ofrecer productos de alta calidad a precios competitivos.
        </p>
      </div>

      <div className="container about-content">
        <div className="about-section">
          <h2>Nuestra historia</h2>
          <p>
            Fundada en 2023, nuestra misión es proporcionar una experiencia de compra excepcional a nuestros clientes,
            ofreciendo una amplia gama de productos y un servicio al cliente de primera clase. Comenzamos como una
            pequeña tienda local y hemos crecido hasta convertirnos en una de las tiendas en línea más confiables del
            mercado. Nuestro éxito se debe a nuestro compromiso inquebrantable con la satisfacción del cliente y la
            calidad de nuestros productos.
          </p>
        </div>

        <div className="about-section">
          <h2>Nuestros valores</h2>
          <ul className="values-list">
            <li>Calidad: Ofrecemos solo los mejores productos a nuestros clientes.</li>
            <li>Integridad: Somos honestos y transparentes en todas nuestras operaciones.</li>
            <li>Servicio al cliente: Nos esforzamos por superar las expectativas de nuestros clientes.</li>
            <li>Innovación: Constantemente buscamos formas de mejorar y evolucionar.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Nuestro equipo</h2>
          <div className="row">
            <div className="col-md-4 team-member">
              <img src="./bb8c76bcb73cf00e7d4ab920447a365c.png" alt="Juan Pérez" />
              <h3>Juan Pérez</h3>
              <p>Fundador y CEO</p>
            </div>
            <div className="col-md-4 team-member">
              <img src="./50382765fd5648c7876d91cc37b27394.png" alt="María González" />
              <h3>María González</h3>
              <p>Directora de Operaciones</p>
            </div>
            <div className="col-md-4 team-member">
              <img src="./ed7055b68adec22bfa8a88d441e83e9a.png" alt="Carlos Rodríguez" />
              <h3>Carlos Rodríguez</h3>
              <p>Jefe de Servicio al Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}