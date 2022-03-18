import React from 'react'

import { PaginationContainer, PageButton, Elipsis } from './Pagination.style'
import { ChevronLeft, ChevronRight } from 'icons'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'onChange'> {
	totalItems: number
	itemsPerPage: number
	currentPage: number
	/**
	 * Max number of page buttons. Min 5.
	 * @default 7
	 */
	maxLength?: number
	/**
	 * Alignment.
	 * @default right
	 */
	align?: 'left' | 'right' | 'center'
	/**
	 * Button color.
	 * @default primary
	 */
	color?: string
	onChange?: (page: number) => void
}

const Pagination = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		totalItems,
		itemsPerPage,
		currentPage,
		maxLength = 7,
		align = 'right',
		color = 'primary',
		onChange,
		...otherProps
	} = props

	const numberOfPages = Math.ceil(totalItems / itemsPerPage)
	const numSiblings = Math.max(5, maxLength) / 2
	const currentIndex = currentPage - 1
	const minIndex = currentIndex - Math.floor(numSiblings)
	const maxIndex = currentIndex + Math.ceil(numSiblings)

	const visiblePages = Array(numberOfPages)
		.fill(null)
		.map((_, i) => i + 1)
		.slice(
			Math.max(0, minIndex + Math.min(0, numberOfPages - maxIndex)),
			Math.min(numberOfPages, maxIndex - Math.min(0, minIndex))
		)

	const navigate = (page: number) => {
		if (page < 1 || page > numberOfPages) {
			return
		}
		onChange?.(page)
	}

	return (
		<PaginationContainer ref={ref} $align={align} {...otherProps}>
			<PageButton
				variant="outlined"
				size="sm"
				$activeColor={color}
				disabled={currentPage === 1}
				onClick={() => navigate(currentPage - 1)}
				startAdornment={<ChevronLeft />}
			/>
			{visiblePages.map((page, i) => {
				switch (i) {
					case 0:
						page = 1
						break
					case 1:
						if (page > 2) {
							return <Elipsis key={page} />
						}
						break
					case visiblePages.length - 1:
						page = numberOfPages
						break
					case visiblePages.length - 2:
						if (page < numberOfPages - 1) {
							return <Elipsis key={page} />
						}
						break
				}
				return (
					<PageButton
						key={page}
						variant="outlined"
						size="sm"
						$activeColor={color}
						$active={page === currentPage}
						onClick={() => navigate(page)}>
						{page}
					</PageButton>
				)
			})}
			<PageButton
				variant="outlined"
				size="sm"
				$activeColor={color}
				disabled={currentPage === numberOfPages}
				onClick={() => navigate(currentPage + 1)}
				endAdornment={<ChevronRight />}
			/>
		</PaginationContainer>
	)
})

Pagination.displayName = 'Pagination'
export default Pagination
