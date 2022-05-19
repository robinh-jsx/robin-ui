import type { Story, Meta } from '@storybook/react'

import { Table, type Props } from './Table'
import { Thead, Tbody, Tfoot } from '../TableSection'
import { Tr } from '../TableRow'
import { Th, Td } from '../TableCell'
import { TableCaption } from '../TableCaption'

export default {
	title: 'Display/Table',
	component: Table,
	subcomponents: { Thead, Tbody, Tfoot, Tr, Th, Td },
	args: {
		variant: 'flat'
	}
} as Meta<Props>

export const Default: Story<Props> = args => (
	<Table {...args}>
		<Thead>
			<Tr>
				<Th>Atomic Number</Th>
				<Th>Symbol</Th>
				<Th>Element Name</Th>
			</Tr>
		</Thead>
		<Tbody>
			<Tr>
				<Td>1</Td>
				<Td>H</Td>
				<Td>Hydrogen</Td>
			</Tr>
			<Tr>
				<Td>2</Td>
				<Td>He</Td>
				<Td>Helium</Td>
			</Tr>
			<Tr>
				<Td>3</Td>
				<Td>Li</Td>
				<Td>Lithium</Td>
			</Tr>
		</Tbody>
		<Tfoot>
			<Tr>
				<Th>Atomic Number</Th>
				<Th>Symbol</Th>
				<Th>Element</Th>
			</Tr>
		</Tfoot>
		<TableCaption align="center">First three elements of the periodic table</TableCaption>
	</Table>
)