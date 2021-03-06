import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'

import { StyledContainer } from './Container.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  maxWidth?: SizeValue
}

export const Container = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { maxWidth = '80ch', children, ...otherProps } = props
  return (
    <StyledContainer ref={ref} $maxWidth={maxWidth} {...otherProps}>
      {children}
    </StyledContainer>
  )
})

Container.displayName = 'Container'
