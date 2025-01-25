
import './LegalPages.css'

export default function TermsAndConditions() {

    window.scroll(0,0)

  return (
    <div className="container mt-5 legal-page">
      <h1>Términos y Condiciones</h1>
      <p>Última actualización: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>1. Aceptación de los términos</h2>
        <p>Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos Términos y Condiciones, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables.</p>
      </section>

      <section>
        <h2>2. Uso de la licencia</h2>
        <p>Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Mi E-commerce únicamente para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:</p>
        <ul>
          <li>modificar o copiar los materiales;</li>
          <li>usar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial);</li>
          <li>intentar descompilar o aplicar ingeniería inversa a cualquier software contenido en el sitio web de Mi E-commerce;</li>
          <li>eliminar cualquier copyright u otras anotaciones de propiedad de los materiales; o</li>
          <li>transferir los materiales a otra persona o reflejar los materiales en cualquier otro servidor.</li>
        </ul>
      </section>

      <section>
        <h2>3. Exención de responsabilidad</h2>
        <p>Los materiales en el sitio web de Mi E-commerce se proporcionan tal cual son. Mi E-commerce no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.</p>
      </section>

      <section>
        <h2>4. Limitaciones</h2>
        <p>En ningún caso Mi E-commerce o sus proveedores serán responsables por cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficio, o debido a interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en el sitio web de Mi E-commerce, incluso si Mi E-commerce o un representante autorizado de Mi E-commerce ha sido notificado oralmente o por escrito de la posibilidad de tal daño.</p>
      </section>

      <section>
        <h2>5. Revisiones y erratas</h2>
        <p>Los materiales que aparecen en el sitio web de Mi E-commerce podrían incluir errores técnicos, tipográficos o fotográficos. Mi E-commerce no garantiza que cualquiera de los materiales en su sitio web sea exacto, completo o actual. Mi E-commerce puede realizar cambios a los materiales contenidos en su sitio web en cualquier momento sin previo aviso.</p>
      </section>

      <section>
        <h2>6. Enlaces</h2>
        <p>Mi E-commerce no ha revisado todos los sitios enlazados a su sitio web y no es responsable por el contenido de ningún sitio enlazado. La inclusión de cualquier enlace no implica aprobación por parte de Mi E-commerce del sitio. El uso de cualquier sitio web enlazado es por cuenta y riesgo del usuario.</p>
      </section>

      <section>
        <h2>7. Modificaciones de los términos de uso del sitio</h2>
        <p>Mi E-commerce puede revisar estos términos de uso de su sitio web en cualquier momento sin previo aviso. Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos y Condiciones de uso.</p>
      </section>

      <section>
        <h2>8. Ley aplicable</h2>
        <p>Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de [Tu País/Estado] y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en ese estado o localidad.</p>
      </section>
    </div>
  )
}