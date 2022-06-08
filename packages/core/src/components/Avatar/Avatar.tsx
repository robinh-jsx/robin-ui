import type { DefaultProps, ColorToken, SizeValue } from '@robin-ui/types'
import React from 'react'

import { AvatarContainer } from './Avatar.style'

export interface Props extends DefaultProps<HTMLDivElement, 'size'> {
	color?: ColorToken
	size?: SizeValue
	radius?: SizeValue
	src?: string
	alt?: string
}

export const Avatar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		color = 'primary',
		size = 'lg',
		radius = 'xl',
		src,
		alt,
		children,
		...otherProps
	} = props

	return (
		<AvatarContainer ref={ref} $color={color} $size={size} $radius={radius} {...otherProps}>
			{src && <img src={src} alt={alt} />}
			{children}
		</AvatarContainer>
	)
})

Avatar.displayName = 'Avatar'
