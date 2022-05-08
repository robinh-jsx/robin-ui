import React from 'react'

import { Paper } from '../Paper'

import { AlertContainer, AlertTitle } from './Alert.style'
import { AlertCircle, AlertTriangle, CheckCircle, Info } from '@rui/icons'
import { Label } from '../Typography'

const statusIcon = {
	none: null,
	success: <CheckCircle />,
	info: <Info />,
	warning: <AlertTriangle />,
	critical: <AlertCircle />
}

export interface Props extends Omit<React.ComponentProps<typeof Paper>, 'title'> {
	status?: 'none' | 'success' | 'info' | 'warning' | 'critical'
	variant?: 'flat' | 'outlined'
	icon?: React.ReactNode
	title?: React.ReactNode
}

export const Alert = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { status = 'critical', variant = 'flat', title, children, ...otherProps } = props

	const icon = statusIcon[status]

	return (
		<AlertContainer ref={ref} role="alert" variant="flat" $color={status} $variant={variant} {...otherProps}>
			<AlertTitle>
				{icon}
				{title && <Label size="xl">{title}</Label>}
			</AlertTitle>
			{children}
		</AlertContainer>
	)
})

Alert.displayName = 'Alert'