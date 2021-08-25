import '../../styles/SideBar.css'

import { useCallback, useRef } from 'react'
import { BiMenu, BiTimeFive } from 'react-icons/bi'

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
        <BiMenu onClick={handleMenuClick} />
        <div className='logo_name'>Christian</div>
      </div>
      <ul className='nav-list'>
        <LinkItem href='clock' iconComponent={<BiTimeFive />} text='Clock' />
      </ul>
    </div>
  )
}

export default SideBar
