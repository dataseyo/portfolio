import React from 'react'

import './styles.css'

type Props = {
    children: React.ReactNode,
    className?: string
}

const Card = ({children, className}: Props) => {
  return (
    <div className={`card__container ${className}`}>
        {children}
    </div>
  )
}

export default Card