import Cards from '../components/Cards'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] font-[Trebuchet_MS,Arial,sans-serif] leading-relaxed text-[#4b1a08]">
      <title>Sabores | Artesanale Gelateria</title>
      <section className="mx-auto max-w-[1200px] px-6 pt-14 pb-10 md:px-8 md:pt-20">
        <Link
          className="mb-8 inline-flex rounded-sm text-sm font-bold text-[#4b1a08] underline underline-offset-4 hover:text-[#C25E50] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#4b1a08]"
          to="/"
        >
          Voltar para início
        </Link>
        <h1 className="font-[Georgia,serif] text-[clamp(44px,7vw,76px)] leading-tight tracking-[-.05em]">
          Nossos sabores
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg">
          Escolha entre nossos sabores e encontre o sorvete perfeito para o seu momento.
        </p>
      </section>
      <Cards />
    </main>
  )
}
