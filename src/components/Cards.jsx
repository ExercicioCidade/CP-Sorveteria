import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const Cards = () => {
  const { addToCart } = useCart()

  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-8" aria-label="Sabores disponíveis">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex h-full flex-col rounded-2xl border border-[#849B83]/50 bg-[#E7EAE2] p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-5 aspect-[4/3] w-full rounded-xl object-cover"
            />
            <h2 className="font-[Georgia,serif] text-2xl text-[#4b1a08]">
              {product.name}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4b1a08]">
              {product.description}
            </p>
            <p className="mt-5 text-xl font-bold text-[#4b1a08]">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <button
              type="button"
              aria-label={`Adicionar ${product.name} ao carrinho`}
              onClick={() => addToCart(product)}
              className="mt-4 min-h-11 rounded-full bg-[#C25E50] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#4b1a08] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#4b1a08]"
            >
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cards
