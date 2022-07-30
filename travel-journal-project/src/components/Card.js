import React from 'react'

const Card = ({prop}) => {
  return (
    <div className='card'>

      <img src={prop.imageUrl} alt="img" />

      <div className='card--info'>
        <div className='card--location'>
          <i class='bx bx-current-location' ></i>
          <span>{prop.location}</span>
          <a href={prop.googleMapsUrl}>View on Google Mpas</a>
        </div>

        <h2>{prop.title}</h2>
        <strong>{prop.startDate} - {prop.endDate}</strong>
        <p>{prop.description}</p>
      </div>
    </div>
  )
}

export default Card
