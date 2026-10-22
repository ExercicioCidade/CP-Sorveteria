const formatarMoeda = (valor) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const { product, quantity } = item

  return (
    <li className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-24 rounded-xl object-cover sm:w-32"
      />
      <div className="min-w-0 flex-1">
        <h2 className="font-[Georgia,serif] text-xl text-[#4B1A08] sm:text-2xl">
          {product.name}
        </h2>
        <p className="mt-2 text-sm text-[#4B1A08]">
          {formatarMoeda(product.price)} por unidade
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Diminuir quantidade de ${product.name}`}
              onClick={() => onDecrease(product.id)}
              className="min-h-11 min-w-11 rounded-full border border-[#4B1A08] text-lg font-semibold hover:bg-[#E7EAE2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1A08]"
            >
              −
            </button>
            <span
              aria-label={`Quantidade de ${product.name}`}
              className="min-w-8 text-center font-semibold tabular-nums"
            >
              {quantity}
            </span>
            <button
              type="button"
              aria-label={`Aumentar quantidade de ${product.name}`}
              onClick={() => onIncrease(product.id)}
              className="min-h-11 min-w-11 rounded-full border border-[#4B1A08] text-lg font-semibold hover:bg-[#E7EAE2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1A08]"
            >
              +
            </button>
          </div>
          <button
            type="button"
            aria-label={`Remover ${product.name} do carrinho`}
            onClick={() => onRemove(product.id)}
            className="min-h-11 rounded-full px-3 text-sm font-semibold text-[#4B1A08] underline underline-offset-4 hover:text-[#9B3F35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1A08]"
          >
            Remover
          </button>
        </div>
      </div>
      <p className="font-semibold tabular-nums sm:min-w-28 sm:text-right">
        {formatarMoeda(product.price * quantity)}
      </p>
    </li>
  )
}
