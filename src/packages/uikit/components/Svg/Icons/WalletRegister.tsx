import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.375 4.625H21.125C21.6063 4.625 22 5.01875 22 5.5C22 5.98125 21.6063 6.375 21.125 6.375H19.375V8.125C19.375 8.60625 18.9813 9 18.5 9C18.0187 9 17.625 8.60625 17.625 8.125V6.375H15.875C15.3937 6.375 15 5.98125 15 5.5C15 5.01875 15.3937 4.625 15.875 4.625H17.625V2.875C17.625 2.39375 18.0187 2 18.5 2C18.9813 2 19.375 2.39375 19.375 2.875V4.625ZM12 6C13.5 6 14 6.5 14 8L5 8C4.44772 8 4 8.44772 4 9C4 9.55229 4.44772 10 5 10H16C17.1046 10 18 10.8954 18 12L18 17C18 19 17 20 14.999 20H5C3 20 2 19 2 17L2 9C2 7.5 3.5 6 5 6L12 6ZM16 14.5C16 15.3284 15.3284 16 14.5 16C13.6716 16 13 15.3284 13 14.5C13 13.6716 13.6716 13 14.5 13C15.3284 13 16 13.6716 16 14.5Z"
      />
    </Svg>
  )
}

export default Icon