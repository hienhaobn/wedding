import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 24 25" {...props}>
      <path d="M7 12.7571C7 13.3071 7.45 13.7571 8 13.7571H16C16.55 13.7571 17 13.3071 17 12.7571C17 12.2071 16.55 11.7571 16 11.7571H8C7.45 11.7571 7 12.2071 7 12.7571ZM12 2.75711C6.48 2.75711 2 7.23711 2 12.7571C2 18.2771 6.48 22.7571 12 22.7571C17.52 22.7571 22 18.2771 22 12.7571C22 7.23711 17.52 2.75711 12 2.75711ZM12 20.7571C7.59 20.7571 4 17.1671 4 12.7571C4 8.34711 7.59 4.75711 12 4.75711C16.41 4.75711 20 8.34711 20 12.7571C20 17.1671 16.41 20.7571 12 20.7571Z" />
    </Svg>
  )
}

export default Icon
