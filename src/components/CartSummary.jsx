import { Link } from 'react-router-dom'

const formatarMoeda = (valor) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

export default function CartSummary({ totalItems, subtotal, onPurchase, onClear }) {
  return (
    <aside
      aria-labelledby="cart-summary-title"
      className="h-fit rounded-2xl border border-[#849B83] bg-[#E7EAE2] p-6 sm:p-8"
    >
      <h2
        id="cart-summary-title"
        className="font-[Georgia,serif] text-2xl text-[#4B1A08]"
      >
        Resumo do pedido
      </h2>
      <dl className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between gap-4">
          <dt>Produtos ({totalItems})</dt>
          <dd className="font-semibold tabular-nums">{formatarMoeda(subtotal)}</dd>
        </div>
      </dl>
      <div className="mt-6 flex justify-between gap-4 border-t border-[#849B83] pt-5 text-lg font-bold">
        <p>Total</p>
        <p className="tabular-nums">{formatarMoeda(subtotal)}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed">
        Total referente aos produtos selecionados.
      </p>
      <button
        type="button"
        onClick={onPurchase}
        className="mt-7 min-h-12 w-full rounded-full bg-[#C25E50] px-5 py-3 text-center font-semibold text-white hover:bg-[#4B1A08] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4B1A08]"
      >
        Comprar
      </button>
      <Link
        to="/produtos"
        className="mt-4 flex min-h-11 items-center justify-center rounded-full px-5 py-2 text-center text-sm font-semibold underline underline-offset-4 hover:text-[#9B3F35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1A08]"
      >
        Continuar comprando
      </Link>
      <button
        type="button"
        onClick={onClear}
        className="mt-4 min-h-11 w-full rounded-full px-4 py-2 text-sm font-semibold underline underline-offset-4 hover:text-[#9B3F35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B1A08]"
      >
        Limpar carrinho
      </button>
    </aside>
  )
}
