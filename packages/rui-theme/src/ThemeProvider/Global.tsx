import { Global as EmotionGlobal } from '@emotion/react'

export const Global = () => (
	<EmotionGlobal
		styles={theme => ({
			'@layer rui': {
				':root': {
					colorScheme: theme.colorMode,
					accentColor: theme.palette.primary.base
				},
				html: {
					padding: 0,
					margin: 0,
					fontSize: '62.5%',
					scrollBehavior: 'smooth',
					boxSizing: 'border-box'
				},
				body: {
					margin: 0,
					padding: 0,
					lineHeight: 1.5,
					minHeight: ['100vh', '-webkit-fill-available'],
					background: theme.fn.getModifiedColor('background', 'primary', 'backgroundTint'),
					color: theme.palette.background.onBase,
					textRendering: 'optimizeLegibility',
					WebkitFontSmoothing: 'antialiased'
				},
				'*': {
					margin: 0,
					padding: 0,
					boxSizing: 'inherit'
				},
				'@media (prefers-reduced-motion)': {
					html: {
						scrollBehavior: 'auto'
					},
					'*, *::before, *::after': {
						transitionDuration: '0ms !important'
					}
				}
			},
			...theme.global
		})}
	/>
)
