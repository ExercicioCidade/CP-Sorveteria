import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import { useCart } from '../context/cart-context'

export default function Cart() {
  const {
    items,
    totalItems,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart()

  return (
    <main className="min-h-screen bg-[#F7F4EE] font-[Trebuchet_MS,Arial,sans-serif] leading-relaxed text-[#4B1A08]">
      <title>Seu carrinho | Artesanale Gelateria</title>
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
        <Link
          className="inline-flex rounded-sm text-sm font-bold underline underline-offset-4 hover:text-[#C25E50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B1A08]"
          to="/produtos"
        >
          Voltar aos sabores
        </Link>
        <h1 className="mt-7 font-[Georgia,serif] text-[clamp(44px,7vw,76px)] leading-tight tracking-[-.05em]">
          Seu carrinho
        </h1>
        <p className="mt-3 text-base md:text-lg">
          {totalItems} {totalItems === 1 ? 'item escolhido' : 'itens escolhidos'}
        </p>

        {items.length === 0 ? (
          <div className="mt-12 border-y border-[#849B83] py-16 text-center sm:py-20">
            <h2 className="font-[Georgia,serif] text-3xl text-[#4B1A08] sm:text-4xl">
              Seu carrinho está vazio
            </h2>
            <p className="mx-auto mt-4 max-w-xl">
              Escolha seus sabores favoritos e eles vão aparecer aqui.
            </p>
            <Link
              to="/produtos"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#C25E50] px-6 py-3 font-semibold text-white hover:bg-[#4B1A08] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4B1A08]"
            >
              Explorar sabores
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
            <section aria-label="Produtos no carrinho">
              <ul className="divide-y divide-[#849B83] border-y border-[#849B83]">
                {items.map((item) => (
                  <CartItem
                    key={item.product.id}
                    item={item}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </ul>
            </section>
            <CartSummary
              totalItems={totalItems}
              subtotal={subtotal}
              onPurchase={clearCart}
              onClear={clearCart}
            />
          </div>
        )}
      </section>
    </main>
  )
}
