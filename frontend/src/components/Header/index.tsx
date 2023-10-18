import { HeaderContainer, UserContainer } from './styles'
import { Scroll, Timer, Swap, Package, List } from 'phosphor-react'
import logoIgnite from '../../assets/archeng.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <div>
        <UserContainer>
          <h2>Bruno Andrade</h2>
          <h3>Admin</h3>
        </UserContainer>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/sync" title="Sicnronizar">
          <Swap size={24} />
        </NavLink>
        <NavLink to="/records" title="Cadastros">
          <Package size={24} />
        </NavLink>
        <NavLink to="/views" title="Listas">
          <List size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}