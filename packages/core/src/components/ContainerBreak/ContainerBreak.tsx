import type { DefaultProps } from '@robin-ui/types'
import React from 'react'

import { Breaker } from './ContainerBreak.style'

export interface Props extends DefaultProps<HTMLDivElement> {}

export const ContainerBreak = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...otherProps } = props

  return (
    <Breaker ref={ref} {...otherProps}>
      {children}
    </Breaker>
  )
})

ContainerBreak.displayName = 'ContainerBreak'
