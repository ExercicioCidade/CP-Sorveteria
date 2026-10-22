import { NavLink } from 'react-router-dom'

const estiloLink = ({ isActive }) =>
  `navbar-link py-2 ${
    isActive ? 'font-bold' : 'font-medium'
  }`

const NavBar = () => {
  return (
    <header className="navbar bg-[#F7F4EE] text-[#4B1A08] border-b-4 border-[#849B83]">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
      >
        <NavLink
          to="/"
          className="text-xl font-bold"
        >
          Sorveteria
        </NavLink>

        <div className="flex flex-wrap items-center gap-6">
          <NavLink to="/" end className={estiloLink}>
            Início
          </NavLink>

          <NavLink to="/produtos" className={estiloLink}>
            Produtos
          </NavLink>

          <NavLink
            to="/produtos"
            className="navbar-action inline-block rounded-full bg-[#C25E50] px-5 py-2 font-semibold text-[#F7F4EE]"
          >
            Ver sabores
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar