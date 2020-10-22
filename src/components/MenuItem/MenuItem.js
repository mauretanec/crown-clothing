import React from 'react'
import { withRouter } from 'react-router-dom'
import './MenuItem.styles.scss'

const MenuItem = ({
  id,
  title,
  imageUrl,
  linkUrl,
  size,
  history,
  match
}) => {
  const menuItemClass = size ? `${size} menu-item` : 'menu-item'
  return (
    <div className={menuItemClass} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
