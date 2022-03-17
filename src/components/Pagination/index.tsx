import { Text, Stack, Box } from '@chakra-ui/react';
import PaginationItem from './PaginationItem';

type Props = {
	totalCountOfRegisters: number;
	registersPerPage?: number;
	currentPage?: number;
	onPageChange: (page: number) => void;
};

const siblingCount = 2;

function generatePagesArray(from: number, to: number) {
	return [...new Array(to - from)]
		.map((_, index) => {
			return from + index + 1;
		})
		.filter((page) => page > 0);
}

function Pagination({
	totalCountOfRegisters,
	currentPage = 1,
	onPageChange,
	registersPerPage = 10,
}: Props) {
	const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

	const previousPages =
		currentPage > 1
			? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
			: [];

	const nextPages =
		currentPage < lastPage
			? generatePagesArray(
					currentPage,
					Math.min(currentPage + siblingCount, lastPage)
			  )
			: [];

	return (
		<Stack
			direction={['column', 'column', 'row']}
			mt='8'
			justify='space-between'
			align='center'>
			<Box>
				<strong>0</strong>- <strong>10</strong> de <strong>100</strong>
			</Box>
			<Stack direction='row' spacing='2'>
				{currentPage > 1 + siblingCount && (
					<>
						<PaginationItem onPageChange={onPageChange} number={1} />
						{currentPage > 2 + siblingCount && (
							<Text width='8' align='center' color={'gray.600'}>
								...
							</Text>
						)}
					</>
				)}
				{previousPages.length > 0 &&
					previousPages.map((page) => {
						return (
							<PaginationItem
								onPageChange={onPageChange}
								key={page}
								number={page}
							/>
						);
					})}

				<PaginationItem
					onPageChange={onPageChange}
					isCurrent
					number={currentPage}
				/>

				{nextPages.length > 0 &&
					nextPages.map((page) => {
						return (
							<PaginationItem
								onPageChange={onPageChange}
								key={page}
								number={page}
							/>
						);
					})}

				{currentPage + siblingCount < lastPage && (
					<>
						<Text width='8' align='center' color={'gray.600'}>
							...
						</Text>
						{currentPage + 1 + siblingCount < lastPage && (
							<PaginationItem onPageChange={onPageChange} number={lastPage} />
						)}
					</>
				)}
			</Stack>
		</Stack>
	);
}

export default Pagination;
