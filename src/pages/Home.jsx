import { useState } from 'react'
import './Home.css'

const flavors = [
  { name: 'Morango', category: 'Frutas', color: 'strawberry', description: 'Leve, frutado e com aquele gostinho de quero mais.' },
  { name: 'Chocolate', category: 'Clássicos', color: 'chocolate', description: 'Intenso e cremoso. Um clássico que abraça a gente.' },
  { name: 'Pistache', category: 'Especiais', color: 'pistachio', description: 'Um sabor delicado para sair um pouquinho do comum.' },
  { name: 'Creme', category: 'Clássicos', color: 'cream', description: 'Suave e cheio de possibilidades. Combina com tudo.' },
]
const categories = ['Todos', 'Clássicos', 'Frutas', 'Especiais']

export default function Home() {
  const [category, setCategory] = useState('Todos')
  const visibleFlavors = flavors.filter((flavor) => category === 'Todos' || flavor.category === category)

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
      <section className="ice-flavors" id="sabores" aria-labelledby="flavors-title">
        <div className="ice-section-heading">
          <div>
            <p className="ice-eyebrow">QUAL VAI SER O DE HOJE?</p>
            <h2 id="flavors-title">Seu próximo favorito.</h2>
          </div>
          <p>Dos clássicos de sempre às novas paixões.<br />Tem um sabor para cada vontade.</p>
        </div>
        <div className="ice-filters" role="group" aria-label="Filtrar sabores por categoria">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <p className="ice-result-count" role="status">{visibleFlavors.length} {visibleFlavors.length === 1 ? 'sabor para experimentar' : 'sabores para experimentar'}</p>
        <div className="ice-flavor-grid">
          {visibleFlavors.map((flavor) => (
            <article className="ice-flavor-card" key={flavor.name}>
              <div className={`ice-flavor-image ice-flavor-image-${flavor.color}`} aria-hidden="true">
                <span className="ice-flavor-ball" />
                <span className="ice-flavor-cup" />
              </div>
              <div className="ice-flavor-content">
                <span className="ice-flavor-category">{flavor.category}</span>
                <h3>{flavor.name}</h3>
                <p>{flavor.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
