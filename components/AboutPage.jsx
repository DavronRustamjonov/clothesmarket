import './about.css'

export default function AboutPage() {
  window.scroll(0,0)
  return (
    <div className='about'>
      <div className="about-header">
        <h1>Biz haqimizda</h1>
        <p className="lead">
          Somos una tienda en línea comprometida con ofrecer productos de alta calidad a precios competitivos.
        </p>
      </div>

      <div className="container about-content">
        <div className="about-section">
          <h2>Nuestra historia</h2>
          <p>
           2023 yilda tashkil etilgan bizning vazifamiz mijozlarimizga ajoyib xarid qilish tajribasini taqdim etishdir,
          keng turdagi mahsulotlar va birinchi darajali mijozlarga xizmat ko'rsatishni taklif qiladi. sifatida boshladik
         kichik mahalliy do'kon va biz dunyodagi eng ishonchli onlayn-do'konlardan biriga aylandik
          bozor. Bizning muvaffaqiyatimiz mijozlar ehtiyojini qondirishga sodiqligimiz va
           mahsulotlarimiz sifati.
          </p>
        </div>

        <div className="about-section">
          <h2>Bizning qadriyatlarimiz</h2>
          <ul className="values-list">
            <li>Biz mijozlarimizga faqat eng yaxshi mahsulotlarni taklif qilamiz.</li>
            <li>Halollik: Biz barcha operatsiyalarimizda halol va shaffofmiz.</li>
            <li>Mijozlarga xizmat ko'rsatish: Biz mijozlarimiz kutganidan oshib ketishga intilamiz.</li>
            <li>Innovatsiyalar: Biz doimo takomillashtirish va rivojlanish yo'llarini qidiramiz.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Bizning jamoamiz</h2>
          <div className="row">
            <div className="col-md-4 team-member">
              <img src="./bb8c76bcb73cf00e7d4ab920447a365c.png" alt="Juan Pérez" />
              <h3>Polonchiyev Pustonchi</h3>
              <p>Zo'r bola </p>
            </div>
            <div className="col-md-4 team-member">
              <img src="./50382765fd5648c7876d91cc37b27394.png" alt="María González" />
               <h3>Polonchiyev Pustonchi</h3>
              <p>Zo'r bola </p>
            </div>
            <div className="col-md-4 team-member">
              <img src="./ed7055b68adec22bfa8a88d441e83e9a.png" alt="Carlos Rodríguez" />
           <h3>Polonchiyev Pustonchi</h3>
              <p>Zo'r bola </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
