import './Home.css'

const moments = [
  { symbol: '♡', title: 'Seu momento de pausa', description: 'Entre uma tarefa e outra, sempre cabe um sorvete e um respiro.' },
  { symbol: '✳', title: 'Do seu jeito', description: 'Na casquinha ou no potinho, um sabor de cada vez ou sua combinação favorita.' },
  { symbol: '☺', title: 'Melhor com companhia', description: 'Chame os amigos, coloque a conversa em dia e divida bons momentos.' },
]

export default function Home() {
  return (
    <main className="ice-home bg-[#F7F4EE] font-[Trebuchet_MS,Arial,sans-serif] leading-relaxed text-[#4b1a08]" id="inicio">
      <title>Artesanale Gelateria</title>
      <section className="grid items-center gap-4 overflow-hidden bg-[#F7F4EE] px-6 pt-12 pb-8 md:grid-cols-2 md:gap-10 md:px-[6vw] md:py-20 xl:px-[max(6vw,calc((100vw-1200px)/2))]" aria-labelledby="home-title">
        <div>
          <p className="mb-5 font-[Georgia,serif] text-2xl font-bold tracking-tight">Artesanale Gelateria</p>
          <p className="text-[10px] font-bold tracking-[.17em] md:text-[11px]">FEITO PARA DEIXAR O DIA MAIS GOSTOSO</p>
          <h1 className="mt-6 font-[Georgia,serif] text-[clamp(52px,6.5vw,94px)] leading-[1.03] font-bold tracking-[-.055em]" id="home-title">A felicidade<br />vem em <em className="font-normal text-[#4b1a08]">bolas.</em></h1>
          <p className="mt-6 max-w-90 text-base md:text-[17px]">Uma pausa no dia. Seu sabor favorito. E aquele sorvete que dá vontade de repetir.</p>
          <a className="mt-8 inline-flex items-center gap-8 rounded-full bg-[#C25E50] px-6 py-4 text-xl font-bold text-white hover:bg-[#4b1a08] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#4b1a08]" href="#experiencia">Conheça a Artesanale <span aria-hidden="true">↗</span></a>
          <p className="mt-4 text-xs">Pode vir. A parte difícil é escolher.</p>
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
      <div className="flex items-center justify-center gap-3 bg-[#849B83] px-4 py-4 text-center text-[11px] font-bold md:gap-12 md:text-[15px]" aria-label="Sorvete, boas conversas e momentos felizes">
        <span>Sorvete na mão</span><span className="text-xl" aria-hidden="true">✳</span>
        <span>Boas conversas</span><span className="text-xl" aria-hidden="true">✳</span>
        <span>Momentos felizes</span>
      </div>
      <section className="mx-auto max-w-300 scroll-mt-6 px-6 py-12 md:px-8 md:py-20" id="experiencia" aria-labelledby="experience-title">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-8">
          <div>
            <p className="text-[11px] font-bold tracking-[.17em]">UM CONVITE PARA APROVEITAR</p>
            <h2 className="mt-3 font-[Georgia,serif] text-[clamp(32px,4vw,48px)] leading-tight tracking-[-.04em]" id="experience-title">Um sorvete. Muitas histórias.</h2>
          </div>
          <p className="max-w-75 text-sm">Dos clássicos de sempre às novas paixões. Tem um sabor para cada vontade.</p>
        </div>
        <ul className="mt-10 grid gap-8 border-t border-[#849B83] pt-8 md:grid-cols-3 md:gap-10">
          {moments.map((moment) => (
            <li key={moment.title}>
              <span className="text-3xl text-[#4b1a08]" aria-hidden="true">{moment.symbol}</span>
              <h3 className="mt-4 font-[Georgia,serif] text-2xl">{moment.title}</h3>
              <p className="mt-3 max-w-80 text-sm">{moment.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
