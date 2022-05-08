import type { DefaultProps, ColorToken } from '@rui/types'
import React, { useContext } from 'react'
import { useId, useUncontrolled } from '@rui/hooks'
import { RadioGroupContext } from '../RadioGroup'

import { ControlInput } from '../ControlInput'

import { Circle } from './Radio.style'

export interface Props extends DefaultProps<HTMLInputElement, 'children' | 'label' | 'defaultValue'> {
	label?: number | string
	labelPosition?: 'left' | 'right'
	color?: ColorToken
	value?: string | number
	checked?: boolean
	defaultValue?: boolean
	error?: boolean
	onChange?: (checked: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
	const {
		label,
		labelPosition,
		color = 'primary',
		value,
		checked,
		defaultValue,
		error,
		disabled,
		onChange,
		id,
		className,
		...otherProps
	} = props
	const {
		error: groupError,
		disabled: groupDisabled,
		value: groupValue,
		onChange: groupOnChange
	} = useContext(RadioGroupContext)
	const _id = useId(id)
	const inGroup = !!groupOnChange
	const [_checked, setUncontrolled] = useUncontrolled(!!defaultValue, inGroup ? value === groupValue : checked)

	return (
		<ControlInput
			ref={ref}
			disabled={disabled}
			label={label}
			labelFor={_id}
			labelPosition={labelPosition}
			className={className}>
			<Circle
				id={_id}
				type="radio"
				checked={_checked}
				onChange={event => {
					if (inGroup) {
						groupOnChange(value)
					}
					setUncontrolled(event.target.checked)
					onChange?.(event)
				}}
				$color={color}
				$error={!!error || !!groupError}
				disabled={disabled || groupDisabled}
				{...otherProps}
			/>
		</ControlInput>
	)
})

Radio.displayName = 'Checkbox'
