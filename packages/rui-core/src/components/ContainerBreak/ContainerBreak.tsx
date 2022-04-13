import type { DefaultProps } from '@rui/types'
import React from 'react'

import { BreakerContainer, Content } from './ContainerBreak.style'

export interface Props extends DefaultProps<HTMLDivElement> {}

export const ContainerBreak = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props

	return (
		<BreakerContainer>
			<Content ref={ref} {...otherProps}>
				{children}
			</Content>
		</BreakerContainer>
	)
})

ContainerBreak.displayName = 'ContainerBreak'