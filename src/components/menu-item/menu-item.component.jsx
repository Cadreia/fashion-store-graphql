import React from 'react'
import './menu-item.styles.scss'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

const MenuItem = ({title, imageUrl, linkUrl, size}) => {
    let navigate = useNavigate()
    let location = useLocation()
    // let { slug } = useParams()

    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={`${size} menu-item`} onClick={() => navigate('/shop')}>
         <div className="background-img" style={styles}></div>
          <div className="content">
            <h2 className="title">{title.toUpperCase()}</h2>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
    )
}

export default MenuItem
