import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system'
import { PropsWithChildren } from 'react'

export interface Props extends SpaceProps, TypographyProps, LayoutProps {
  color?: string
  bold?: boolean
  small?: boolean
  ellipsis?: boolean
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
}

export type TextProps = PropsWithChildren<Props>
