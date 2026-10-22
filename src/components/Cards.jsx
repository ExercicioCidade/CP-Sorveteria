import { products } from '../data/products'

const Cards = () => {
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
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cards
