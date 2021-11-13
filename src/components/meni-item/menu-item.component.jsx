import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, linkUrl, size}) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={`${size} menu-item`} style={styles}>
          <div className="content">
            <h2 className="title">{title}</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
    )
}

export default MenuItem
