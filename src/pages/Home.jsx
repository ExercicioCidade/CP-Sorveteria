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
      </section>
    </main>
  )
}
