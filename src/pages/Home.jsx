const moments = [
  { symbol: '♡', title: 'Seu momento de pausa', description: 'Entre uma tarefa e outra, sempre cabe um sorvete e um respiro.' },
  { symbol: '✳', title: 'Do seu jeito', description: 'Na casquinha ou no potinho, um sabor de cada vez ou sua combinação favorita.' },
  { symbol: '☺', title: 'Melhor com companhia', description: 'Chame os amigos, coloque a conversa em dia e divida bons momentos.' },
]

export default function Home() {
  return (
    <main className="bg-[#F7F4EE] font-[Trebuchet_MS,Arial,sans-serif] leading-relaxed text-[#4b1a08]" id="inicio">
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
        <div className="relative isolate h-[480px] max-[1001px]:-m-[25px] max-[1001px]:scale-[.88] max-md:mx-[-12px] max-md:mt-[-12px] max-md:mb-[-40px] max-md:h-[440px] max-md:scale-[.85]" role="img" aria-label="Casquinha com bolas de sorvete de morango, creme e pistache">
          <span className="absolute top-2 left-1/2 -translate-x-1/2 -rotate-6 whitespace-nowrap font-[Georgia,serif] text-xl leading-normal italic">Uma casquinha de alegria</span>
          <div className="absolute top-[52%] left-1/2 -z-10 size-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#849B83]/20 max-md:size-[320px]" />
          <div className="absolute top-[255px] left-[calc(50%-67px)] h-[205px] w-[134px] -rotate-10 [background:repeating-linear-gradient(35deg,transparent_0_15px,#b77b414d_16px_18px),repeating-linear-gradient(-35deg,#edbb7b_0_15px,#c58b51_16px_18px)] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
          <div className="absolute top-[169px] left-[calc(50%-122px)] h-[143px] w-[158px] -rotate-14 rounded-[48%_51%_43%_47%] [background:radial-gradient(ellipse_at_30%_35%,#4b1a08_0_2px,transparent_3px),radial-gradient(ellipse_at_70%_65%,#4b1a08_0_2px,transparent_3px),#849B83] shadow-[inset_-16px_-18px_20px_#4b1a081c,inset_10px_9px_14px_#ffffff55,0_8px_10px_#4b1a0810]" />
          <div className="absolute top-[159px] left-[calc(50%-12px)] h-[143px] w-[158px] rotate-12 rounded-[48%_51%_43%_47%] bg-[#F7F4EE] shadow-[inset_-16px_-18px_20px_#4b1a081c,inset_10px_9px_14px_#ffffff55,0_8px_10px_#4b1a0810]" />
          <div className="absolute top-[66px] left-[calc(50%-74px)] h-[143px] w-[158px] -rotate-8 rounded-[48%_51%_43%_47%] [background:radial-gradient(ellipse_at_25%_40%,#4b1a08_0_2px,transparent_3px),radial-gradient(ellipse_at_68%_70%,#4b1a08_0_2px,transparent_3px),#C25E50] shadow-[inset_-16px_-18px_20px_#4b1a081c,inset_10px_9px_14px_#ffffff55,0_8px_10px_#4b1a0810]" />
          <span className="absolute top-[100px] left-[4%] text-5xl leading-none text-[#4b1a08]" aria-hidden="true">✳</span>
          <span className="absolute right-0 bottom-20 text-5xl leading-none text-[#4b1a08]" aria-hidden="true">✧</span>
          <span className="absolute bottom-5 left-0 grid size-[105px] -rotate-14 place-content-center rounded-full border border-[#4b1a08] text-center text-xs leading-normal tracking-[.08em] text-[#4b1a08]">MAIS SABOR<br />POR FAVOR!</span>
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
