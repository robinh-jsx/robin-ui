import type { DefaultProps } from '@rui/types'
import React, { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { useIsomorphicLayoutEffect, usePreviousState, useSize } from '@rui/hooks'

import { DynamicResizeContainer } from './DynamicResizer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	/**
	 * Animation duration.
	 * @default 200
	 */
	duration?: number
	disableResizeHeight?: boolean
	disableResizeWidth?: boolean
}

type Stages = 'preparing' | 'updating' | 'finished'

export const DynamicResizer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { duration = 200, disableResizeHeight, disableResizeWidth, children, ...otherProps } = props
	const [stage, setStage] = useState<Stages>('finished')
	const contentRef = useRef<HTMLDivElement>(null)
	const size = useSize(contentRef.current, [children])
	const previousSize = usePreviousState(size)

	useIsomorphicLayoutEffect(() => {
		setStage('preparing')
		const prepareTimeout = window.setTimeout(() => flushSync(() => setStage('updating')))
		const updateTimeout = window.setTimeout(() => flushSync(() => setStage('finished')), duration)
		return () => {
			window.clearTimeout(prepareTimeout)
			window.clearTimeout(updateTimeout)
		}
	}, [children])

	const [width, height] = (() => {
		switch (stage) {
			case 'preparing':
				return [previousSize?.width, previousSize?.height]
			case 'updating':
				return [size?.width, size?.height]
			case 'finished':
			default:
				return ['auto', 'auto']
		}
	})()

	return (
		<DynamicResizeContainer
			ref={ref}
			$width={disableResizeWidth ? 'auto' : width}
			$height={disableResizeHeight ? 'auto' : height}
			$duration={duration}
			{...otherProps}>
			<div ref={contentRef}>{children}</div>
		</DynamicResizeContainer>
	)
})

DynamicResizer.displayName = 'DynamicResizer'
