import React from 'react'
import { styles } from '../../assets/styles/styles'

export default function ContentHeader({title, subtitle}) {
  return (
    <div className={`relative w-full h-screen mx-auto`}>
      <div className={`flex justify-center items-center h-screen`}>
        <div className="m-auto text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-white">{title}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
