import React from 'react'

const Card = ({prop}) => {

  let badgeText
  if (prop.openSpots === 0) {
    badgeText = 'sold out'
  } else if (prop.openSpots > 0) {
    badgeText = 'online'
  }
  return (
    <div className="card">
        <div className='card--img'>
          <img src={`../images/${prop.coverImg}`} alt="img"/>
            <span>{badgeText}</span>
        </div>
        
        <div className='card--ratings'>
            <i class='bx bxs-star'></i>
            <span>{prop.stats.rating}</span>
            <span>{prop.stats.reviewCount} *</span>
            <span>{prop.location}</span>
        </div>

        <p>{prop.title}</p>
        <p><strong>From ${prop.price}</strong> / person</p>
    </div>
  )
}

export default Card
