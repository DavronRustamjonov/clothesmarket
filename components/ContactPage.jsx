import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Formulario enviado:', formData)
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  window.scroll(0,0)

  return (
<div className='contact'>
    <h2>Contacto</h2>
<div className='contact-container'>
<div  id='contact-info'>
    <h3>Informacion de contacto</h3>
   <div className='contact-h4'>
   <h4><strong>Telefono:</strong> +012 345 678 102 / +012 345 678 203</h4>
    <h4><strong>Email:</strong> random@email.com</h4>
    <h4><strong>Dirección:</strong> Tu direccion, calle, altura 123.</h4>
   </div>
</div>

<div  id='contact-container'>
      <h3>Contactanos</h3>
      <p className="lead">
    ¿Tienes alguna pregunta o comentario? No dudes en contactar con nosotros.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electronico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
    </div>
</div>
  )
}