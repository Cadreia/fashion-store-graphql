import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, linkUrl, size}) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={`${size} menu-item`} >
         <div className="background-img" style={styles}></div>
          <div className="content">
            <h2 className="title">{title.toUpperCase()}</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
    )
}

export default MenuItem
