import React from 'react'
import stars  from '../../assests/images/sw_logo.png';
import './styles.scss'
import Content from './Content';
const Header = () => {
  return (
    <div  className='stars_header'>
        <img src={stars} className='stars_header_imgs' />
        <Content />
    </div>
  )
}

export default Header
