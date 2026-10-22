import { products } from '../data/products'

const Cards = () => {
  return (
    <div className="bg-[#F7F4EE]">
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border border-gray-200 bg-[#849B83] p-5 shadow-sm transition hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 h-48 w-full rounded-2xl object-cover"
            />
            <h3 className="mb-2 text-lg font-semibold text-[#4b1a0e]">
              {product.name}
            </h3>
            <p className="text-sm text-[#4b1a0e]">{product.description}</p>
            <p className="mt-4 text-center text-xl font-bold text-black">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
