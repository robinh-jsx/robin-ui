import { useEffect } from 'react'
import { usePreviousState } from '../usePreviousState'

export const useTraceUpdate = (props: Record<string, any>) => {
	const prev = usePreviousState(props)

	useEffect(() => {
		const changedProps = Object.entries(props).reduce<Record<string, any[]>>((ps, [k, v]) => {
			if (prev?.[k] !== v) {
				ps[k] = [prev?.[k], v]
			}
			return ps
		}, {})

		if (Object.keys(changedProps).length > 0) {
			console.info('Changed props:', changedProps)
		}
	})
}