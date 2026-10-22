import './Home.css'

export default function Home() {
  return (
    <main className="ice-home" id="inicio">
      <section className="ice-hero" aria-labelledby="home-title">
        <div className="ice-hero-copy">
          <p className="ice-eyebrow">FEITO PARA DEIXAR O DIA MAIS GOSTOSO</p>
          <h1 id="home-title">A felicidade<br />vem em <em>bolas.</em></h1>
          <p className="ice-intro">Uma pausa no dia. Seu sabor favorito. E aquele sorvete que dá vontade de repetir.</p>
          <a className="ice-button" href="#sabores">Encontre seu sabor <span aria-hidden="true">↗</span></a>
          <p className="ice-small-note">Pode vir. A parte difícil é escolher.</p>
        </div>
        <div className="ice-hero-art" role="img" aria-label="Casquinha com bolas de sorvete de morango, creme e pistache">
          <span className="ice-art-caption">Uma casquinha de alegria</span>
          <div className="ice-art-circle" />
          <div className="ice-cone" />
          <div className="ice-scoop ice-scoop-pistachio" />
          <div className="ice-scoop ice-scoop-cream" />
          <div className="ice-scoop ice-scoop-strawberry" />
          <span className="ice-spark ice-spark-one" aria-hidden="true">✳</span>
          <span className="ice-spark ice-spark-two" aria-hidden="true">✧</span>
          <span className="ice-art-stamp">MAIS SABOR<br />POR FAVOR!</span>
        </div>
      </section>
      <div className="ice-ribbon" aria-label="Sorvete, boas conversas e momentos felizes">
        <span>Sorvete na mão</span><span aria-hidden="true">✳</span>
        <span>Boas conversas</span><span aria-hidden="true">✳</span>
        <span>Momentos felizes</span>
      </div>
    </main>
  )
}
