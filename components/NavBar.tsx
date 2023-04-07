import { ActiveLink } from './ActiveLink'
import style from './Navbar.module.css'

export const NavBar = () => {
  const menuItems = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
    {
      text: 'Pricing1',
      href: '/pricing',
    },
  ]

  const routesNavbar = () =>
    menuItems.map(({ href, text }, index) => {
      return <ActiveLink key={index} href={href} text={text}></ActiveLink>
    })

  return (
    <div>
      <nav className={style['menu-container']}>{routesNavbar()}</nav>
    </div>
  )
}
