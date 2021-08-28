import '../../styles/SideBar.css'

import { useCallback, useRef } from 'react'
import { BsHouseFill, BsList, BsFillClockFill, BsSun } from 'react-icons/bs'

const SideBar = () => {
  const sideBarRef = useRef(null)

  const handleMenuClick = useCallback(() => {
    sideBarRef.current.classList.toggle('open')
  }, [])

  const LinkItem = ({ href, iconComponent, text }) => {
    return (
      <li>
        <a href={href}>
          {iconComponent}
          <span className='links_name'>{text}</span>
        </a>
        <span className='tooltip'>{text}</span>
      </li>
    )
  }

  return (
    <div className='sidebar' ref={sideBarRef}>
      <div className='logo-details'>
        <BsList onClick={handleMenuClick} />
        <div className='logo_name'>SHOWCASE</div>
      </div>
      <ul className='nav-list'>
        <LinkItem href='/' iconComponent={<BsHouseFill />} text='Home' />
        <LinkItem
          href='clock'
          iconComponent={<BsFillClockFill />}
          text='Clock'
        />
        <LinkItem href='weather' iconComponent={<BsSun />} text='Weather' />
      </ul>
    </div>
  )
}

export default SideBar
