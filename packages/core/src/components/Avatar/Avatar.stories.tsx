import type { Meta, Story } from '@storybook/react'

import { Avatar, type Props } from './Avatar'

export default {
  title: 'Display/Avatar',
  component: Avatar,
  args: {
    color: 'primary',
    size: 'lg',
    radius: 'xl',
    src: 'https://bit.ly/dan-abramov',
    alt: 'Dan Abramov'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: Story<Props> = args => <Avatar {...args}>DA</Avatar>
