import styled from '@rui/styles'
import { BaseContainer } from '../BaseContainer'

interface BoxProps {
	$state: 'disabled' | 'error' | 'active' | 'none'
	$leftPadding: number
	$rightPadding: number
}

export const Box = styled(BaseContainer)<BoxProps>(
	({ theme, $leftPadding, $rightPadding }) => ({
		position: 'relative',
		width: '100%',
		color: theme.palette.surface.onBase,
		'& > input, & > select': {
			padding: theme.fn.getSpacing(['sm', 0]),
			paddingRight: $rightPadding || theme.spacing.md,
			paddingLeft: $leftPadding || theme.spacing.md,
			width: '100%',
			fontSize: theme.typography.text.fontSize.md,
			height: '3.6rem',
			lineHeight: '1em',
			background: 'transparent',
			color: 'inherit',
			border: `0.1rem solid ${theme.palette.outline}`,
			borderRadius: theme.borderRadius.sm,
			outline: 'none',
			transition: theme.fn.getTransition(),
			'&:focus': {
				borderColor: theme.palette.primary.base
			},
			'::placeholder': {
				color: theme.fn.getAlphaColor('surface.onBase', 'disabledOnBase')
			},
			'&::before': {
				content: '"\\200b"'
			}
		}
	}),
	({ theme, $state }) =>
		({
			disabled: {
				color: `${theme.fn.getAlphaColor('surface.onVariant', 'disabledOnBase')} !important`,
				'& > input, & > select': {
					background: `${theme.fn.getAlphaColor('surface.variant', 'disabledBase')} !important`,
					borderColor: `${theme.fn.getAlphaColor('outline', 'disabledOnBase')} !important`,
					cursor: 'default !important',
					'::placeholder': {
						color: theme.fn.getAlphaColor('surface.onVariant', 'disabledOnBase')
					}
				}
			},
			error: {
				'& > input, & > select': {
					borderColor: theme.palette.critical.base
				}
			},
			active: {
				'& > input': {
					borderColor: theme.palette.primary.base
				}
			},
			none: null
		}[$state])
)

interface AdornmentProps {
	$position: 'left' | 'right'
}

export const Adornment = styled.span<AdornmentProps>(
	({ theme }) => ({
		position: 'absolute',
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.fn.getSpacing([0, 'sm'])
	}),
	({ $position }) =>
		({
			left: {
				left: 0
			},
			right: {
				right: 0
			}
		}[$position])
)
