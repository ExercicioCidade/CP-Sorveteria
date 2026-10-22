import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const foco =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4B1A08]'

const estiloLink = ({ isActive }) =>
  `navbar-link relative block py-2 text-center ${foco} ${
    isActive ? 'font-bold' : 'font-medium'
  }`

const NavBar = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  const { totalItems } = useCart()

  const fecharMenu = () => setMenuAberto(false)

  const tratarTeclado = (event) => {
    if (event.key === 'Escape' && menuAberto) {
      fecharMenu()

      event.currentTarget
        .querySelector('[aria-controls="navbar-links"]')
        ?.focus()
    }
  }

  return (
    <header
      className="navbar border-b-4 border-[#849B83] bg-[#F7F4EE] text-[#4B1A08]"
      onKeyDown={tratarTeclado}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
      >
        <NavLink
          to="/"
          className={`text-xl font-bold ${foco}`}
          onClick={fecharMenu}
        >
          Sorveteria
        </NavLink>

        <div className="flex items-center gap-3">
          <span
            className="rounded-full bg-[#E7EAE2] px-3 py-2 text-sm font-semibold"
            aria-live="polite"
            aria-atomic="true"
          >
            {totalItems} {totalItems === 1 ? 'item' : 'itens'} no carrinho
          </span>
          <button
            type="button"
            aria-controls="navbar-links"
            aria-expanded={menuAberto}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuAberto((aberto) => !aberto)}
            className={`navbar-toggle inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg border border-[#4B1A08] px-3 py-2 hover:bg-[#4B1A08] hover:text-[#F7F4EE] aria-expanded:bg-[#4B1A08] aria-expanded:text-[#F7F4EE] sm:hidden ${foco}`}
          >
            {menuAberto ? 'Fechar ✕' : 'Menu ☰'}
          </button>
        </div>

        <div
          id="navbar-links"
          data-open={menuAberto}
          className={`navbar-links w-full flex-col items-stretch gap-3 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-6 ${
            menuAberto ? 'flex' : 'hidden'
          }`}
        >
          <NavLink
            to="/"
            end
            className={estiloLink}
            onClick={fecharMenu}
          >
            Início
          </NavLink>

          <NavLink
            to="/produtos"
            className={estiloLink}
            onClick={fecharMenu}
          >
            Produtos
          </NavLink>

          <NavLink
            to="/produtos"
            onClick={fecharMenu}
            className={`navbar-action inline-block rounded-full bg-[#C25E50] px-5 py-2 text-center font-semibold text-[#F7F4EE] hover:bg-[#4B1A08] focus-visible:bg-[#4B1A08] ${foco}`}
          >
            Ver sabores
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
