
import './LegalPages.css'

export default function PrivacyPolicy() {

    window.scroll(0,0)

  return (
    <div className="container mt-5 legal-page">
      <h1>Política de Privacidad</h1>
      <p>Última actualización: 9/11/2024{/*new Date().toLocaleDateString()*/}</p>

      <section>
        <h2>1. Información que recopilamos</h2>
        <p>Recopilamos información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, dirección postal, número de teléfono e información de pago cuando realiza una compra.</p>
      </section>

      <section>
        <h2>2. Cómo utilizamos su información</h2>
        <p>Utilizamos la información que recopilamos para los siguientes propósitos:</p>
        <ul>
          <li>Procesar sus pedidos y enviarle productos</li>
          <li>Comunicarnos con usted sobre sus pedidos y proporcionarle servicio al cliente</li>
          <li>Enviarle información sobre productos, servicios y promociones que puedan interesarle</li>
          <li>Mejorar nuestro sitio web y nuestros productos y servicios</li>
          <li>Prevenir fraudes y mejorar la seguridad de nuestro sitio web</li>
        </ul>
      </section>

      <section>
        <h2>3. Compartir su información</h2>
        <p>No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información personal con:</p>
        <ul>
          <li>Proveedores de servicios que nos ayudan a operar nuestro negocio y a brindarle servicios</li>
          <li>Autoridades legales cuando sea requerido por ley o para proteger nuestros derechos legales</li>
        </ul>
      </section>

      <section>
        <h2>4. Seguridad de los datos</h2>
        <p>Tomamos medidas razonables para proteger su información personal contra pérdida, robo, uso indebido y acceso no autorizado. Sin embargo, ninguna transmisión de datos por Internet o sistema de almacenamiento electrónico es completamente seguro.</p>
      </section>

      <section>
        <h2>5. Sus derechos</h2>
        <p>Usted tiene derecho a:</p>
        <ul>
          <li>Acceder a la información personal que tenemos sobre usted</li>
          <li>Corregir cualquier información personal inexacta</li>
          <li>Solicitar la eliminación de su información personal</li>
          <li>Oponerse al procesamiento de su información personal</li>
          <li>Retirar su consentimiento en cualquier momento</li>
        </ul>
      </section>

      <section>
        <h2>6. Cookies y tecnologías similares</h2>
        <p>Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.</p>
      </section>

      <section>
        <h2>7. Cambios a esta política</h2>
        <p>Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página.</p>
      </section>

      <section>
        <h2>8. Contacto</h2>
        <p>Si tiene alguna pregunta sobre esta política de privacidad, por favor contáctenos a través de [tu dirección de correo electrónico o formulario de contacto].</p>
      </section>
    </div>
  )
}