import type { Story, Meta } from '@storybook/react'

import { List, type Props } from './List'
import { ListItem } from '../ListItem'
import { Plus, Minus } from '@robin-ui/icons'

export default {
	title: 'Display/List',
	component: List,
	subcomponents: { ListItem }
} as Meta<Props>

export const Default: Story<Props> = args => (
	<List {...args}>
		<ListItem>Item 1</ListItem>
		<ListItem>Item 2</ListItem>
		<ListItem>Item 3</ListItem>
	</List>
)

export const WithIcons: Story<Props> = args => (
	<List {...args} marker={<Plus />}>
		<ListItem>Item 1</ListItem>
		<ListItem>Item 2</ListItem>
		<ListItem marker={<Minus />}>Item 3</ListItem>
	</List>
)