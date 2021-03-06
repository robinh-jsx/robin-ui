import type { Meta, Story } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { type Props, TextInput } from './TextInput'

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Placeholder',
    value: ''
  }
} as Meta<Props>

export const Default: Story<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <TextInput
      {...args}
      onChange={event => {
        args.onChange?.(event)
        updateArgs({ value: event.target.value })
      }}
    />
  )
}
