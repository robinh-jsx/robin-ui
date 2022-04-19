import type { DefaultProps } from '@rui/types'
import React from 'react'
import type { Easing } from 'framer-motion/types/types'
import { AnimatePresence } from 'framer-motion'

import { Fade, Collapse, Grow } from '../Transition'

export interface Props extends DefaultProps<HTMLDivElement> {
	currentKey: string | number
	transition?: 'fade' | 'collapse' | 'grow'
	duration?: number
	ease?: Easing
}

export const TransitionSwitch: React.FC<Props> = props => {
	const { currentKey, transition = 'fade', duration = 400, children, ...otherProps } = props

	const Transition = (() => {
		switch (transition) {
			case 'collapse':
				return Collapse
			case 'grow':
				return Grow
			case 'fade':
			default:
				return Fade
		}
	})()

	return (
		<AnimatePresence exitBeforeEnter>
			<Transition key={currentKey} in unmountOnExit duration={duration} motionOnly {...otherProps}>
				{children}
			</Transition>
		</AnimatePresence>
	)
}

TransitionSwitch.displayName = 'TransitionSwitch'